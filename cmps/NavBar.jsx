import NavLinks from './NavLinks.jsx'
import HomePageTitle from './HomePageTitle.jsx'
import SearchBar from './SearchBar.jsx'
import eventBusService from '../services/eventBusService.js';
import EmailStatusFilter from './EmailCmps/EmailStatusFilter.jsx'
import BooksPriceFilter from './BooksCmps/BooksPriceFilter.jsx'
const { NavLink } = ReactRouterDOM;
import { Fragment } from "react";


export default class NavBar extends React.Component {

    constructor() {
        super();
        this.navToggleBtn = React.createRef();
    }

    state = {
        isNavLinksOpen: false,
        currApp: 'home',
    }

    componentDidMount() {
        eventBusService.on('set-nav-state', (page) => {
            this.setState({ currApp: page })
        });
    };

    toggleNavLinks = () => {
        this.navToggleBtn.current.classList.toggle('nav-active');
        this.setState(prevState => ({
            isNavLinksOpen: !prevState.isNavLinksOpen
        }))
    };

    render() {
        const { isNavLinksOpen, currApp, } = this.state

        return (
            <React.Fragment>
                <nav className="nav-bar-container">
                    <NavLink exact to='/'>
                        <img className="logo" src={`assets/imgs/logo-${currApp}.png`} />
                    </NavLink>
                        {(currApp === 'home') && <HomePageTitle />}
                    <section className="nav-break-wide">
                        {(currApp != 'home') && <SearchBar currApp={this.state.currApp} />}
                        {(currApp === 'email') && <EmailStatusFilter />}
                        {(currApp === 'books') && <BooksPriceFilter />}
                    </section>
                    <div ref={this.navToggleBtn} onClick={this.toggleNavLinks} className="nav-links-toggle-wrapper">
                        <img className="navlinks-toggle" src="assets/imgs/nav-icn-grey.png" alt="" />
                    </div>
                    {isNavLinksOpen && <NavLinks toggleNavLinks={this.toggleNavLinks} />}
                </nav>
                <section className="nav-break-narrow">
                    {(currApp != 'home') && <SearchBar currApp={this.state.currApp} />}
                    {(currApp === 'email') && <EmailStatusFilter />}
                    {(currApp === 'books') && <BooksPriceFilter />}
                </section>
            </React.Fragment>
        )
    }
}
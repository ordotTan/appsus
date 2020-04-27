import NavLinks from './NavLinks.jsx'
import HomePageTitle from './HomePageTitle.jsx'
import SearchBar from './SearchBar.jsx'
import eventBusService from '../services/eventBusService.js';
import EmailStatusFilter from './EmailCmps/EmailStatusFilter.jsx'


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
        this.removeEventBus = eventBusService.on('set-nav-state', (page) => {
            this.setState({ currApp: page })
        });
    };

    componentWillUnmount() {
        this.removeEventBus();
    }

    toggleNavLinks = () => {
        this.navToggleBtn.current.classList.toggle('nav-active');
        this.setState(prevState => ({
            isNavLinksOpen: !prevState.isNavLinksOpen
        }))
    }

    changePage = (page) => {
        this.navToggleBtn.current.classList.remove('nav-active');
        this.setState({ currApp: page, isNavLinksOpen: false })
    }

    render() {
        const { isNavLinksOpen, currApp, searchBar } = this.state

        return (

            <nav className="nav-bar-container">
                <div className="nav-bar-dynamic">
                    <img className="logo" src={`assets/imgs/logo-${currApp}.png`} />
                    {(currApp != 'home') && <SearchBar />}
                    {(currApp === 'email') && <EmailStatusFilter />}
                    {(currApp === 'home') && <HomePageTitle />}
                </div>
                <div ref={this.navToggleBtn} className="nav-links-toggle-wrapper">
                    <img className="navlinks-toggle" onClick={this.toggleNavLinks} src="assets/imgs/nav-icn-grey.png" alt="" />
                </div>
                {isNavLinksOpen && <NavLinks changePage={this.changePage} />}
            </nav>
        )
    }
}
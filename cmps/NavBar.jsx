import NavLinks from './NavLinks.jsx'
import SearchBar from './SearchBar.jsx'


export default class NavBar extends React.Component {

    constructor() {
        super();
        this.navToggleBtn = React.createRef();
    }

    state = {
        isNavLinksOpen: false,
        currApp: 'home',
    }

    toggleNavLinks = () => {
        let elNabToggleBtn = this.navToggleBtn.current.classList.toggle('nav-active');
        this.setState(prevState => ({
            isNavLinksOpen: !prevState.isNavLinksOpen
        }))
    }

    changePage = (page) => {
        console.log(page)
        this.setState({currApp : page, isNavLinksOpen : false})
    }

    render() {
        const { isNavLinksOpen, currApp, logoUrl } = this.state

        return (

            <nav className="nav-bar-container">

                <img className="logo" src={`assets/imgs/logo-${currApp}.png`} />
                <SearchBar />
                <div ref={this.navToggleBtn} className="nav-links-toggle-wrapper">
                    <img className="navlinks-toggle" onClick={this.toggleNavLinks} src="assets/imgs/nav-icn.png" alt="" />
                </div>
                {isNavLinksOpen && <NavLinks changePage={this.changePage} />}
            </nav>
        )
    }
}
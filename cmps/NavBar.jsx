import NavLinks from './NavLinks.jsx'
import SearchBar from './SearchBar.jsx'


export default class NavBar extends React.Component {


    state = {
        isNavLinksOpen: true,
        currApp: 'home',
        logoUrl: 'assets/imgs/logo-appsus.png'
    }

    toggleNavLinks = () => {
        this.setState(prevState => ({
            isNavLinksOpen : !prevState.isNavLinksOpen
        }))
    }

    render() {
        const {isNavLinksOpen, CurrApp, logoUrl} = this.state

        return (

            <nav className="nav-bar-container">

                <img className="logo" src={logoUrl}/>
                <SearchBar />
                <img className="navlinks-toggle" onClick={this.toggleNavLinks} src="assets/imgs/nav-icn-grey.png" alt=""/>
                {isNavLinksOpen && <NavLinks />}
            </nav>
        )
    }
}
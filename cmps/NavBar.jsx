import NavLinks from './NavLinks.jsx'
import SearchBar from './SearchBar.jsx'


export default class NavBar extends React.Component {


    state = {
        isNavOpen: false,
        currApp: 'home',
        logoUrl: './assets/imgs/logo-home.png'
    }

    render() {
        return (
            <nav className="nav-bar-container">
                
                <img className="logo" src="assets/imgs/logo-appsus.png"/>
                <SearchBar />
                <button className = "back-btn" onClick={()=>{props.history.goBack();}}>Back</button>
                <NavLinks />
            </nav>
        )
    }
}
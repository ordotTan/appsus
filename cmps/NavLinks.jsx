const { NavLink } = ReactRouterDOM;

export default function NavLinks(props) {

    return (
        <section className="nav-links">
            <NavLink exact to='/'>
                <img className="home-main-nav" src="assets/imgs/logo-home.png" alt="appsus"/>
            </NavLink>
            <NavLink exact to='/email'>
            <img className="mail-main-nav" src="assets/imgs/logo-email.png" alt="email"/>
            </NavLink>
            <NavLink exact to='/keep'>
            <img className="keep-main-nav" src="assets/imgs/logo-keep.png" alt="keep"/>
            </NavLink>
            <NavLink exact to='/book'>
            <img className="books-main-nav" src="assets/imgs/logo-books.png" alt="book"/>
            </NavLink>
        </section>
    )
}
const { NavLink } = ReactRouterDOM;

export default function NavLinks() {

    return (
        <section className="nav-links">
            <NavLink to='/'>
                <img src="assets/imgs/logo-appsus.png" alt="appsus"/>
            </NavLink>
            <NavLink to='/email'>
            <img src="assets/imgs/logo-email.png" alt="email"/>
            </NavLink>
            <NavLink to='/keep'>
            <img src="assets/imgs/logo-keep.png" alt="keep"/>
            </NavLink>
            <NavLink to='/book'>
            <img src="assets/imgs/logo-books.png" alt="book"/>
            </NavLink>
        </section>
    )
}
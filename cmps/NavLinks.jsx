const { NavLink } = ReactRouterDOM

export default function NavLinks() {

    return (
        <section className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/email'>Email</NavLink>
            <NavLink to='/keep'>Keep</NavLink>
            <NavLink to='/book'>Book</NavLink>
        </section>
    )

}
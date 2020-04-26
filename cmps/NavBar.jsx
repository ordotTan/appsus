const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return (
        <nav>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/book'>Miss Books</NavLink>
                <NavLink to='/email'>Email</NavLink>
                <NavLink to='/keep'>Keep</NavLink>
            </div>
        </nav>
    )
}
const { NavLink } = ReactRouterDOM;

export default function NavLinks(props) {

    return (
        <section className="nav-links">
            <NavLink exact to='/'>
                <img className="home-main-nav" onClick={()=>{props.changePage('home')}} src="assets/imgs/logo-home.png" alt="appsus"/>
            </NavLink>
            <NavLink to='/email'>
            <img className="mail-main-nav" onClick={()=>{props.changePage('email')}} src="assets/imgs/logo-email.png" alt="email"/>
            </NavLink>
            <NavLink to='/keep'>
            <img className="keep-main-nav" onClick={()=>{props.changePage('keep')}} src="assets/imgs/logo-keep.png" alt="keep"/>
            </NavLink>
            <NavLink to='/book'>
            <img className="books-main-nav" onClick={()=>{props.changePage('books')}} src="assets/imgs/logo-books.png" alt="book"/>
            </NavLink>
        </section>
    )
}
import eventBusService from "../services/eventBusService.js"
const { NavLink } = ReactRouterDOM;

export default class Home extends React.Component {

    componentDidMount() {
        eventBusService.emit('set-nav-state', 'home')
    };

    render() {
        return (
            <section>
                <section className="home-container">
                    <NavLink to='/email'>
                        <img className="mail-main-nav" src="assets/imgs/logo-email.png" alt="email" />
                    </NavLink>
                    <NavLink to='/keep'>
                        <img className="keep-main-nav" src="assets/imgs/logo-keep.png" alt="keep" />
                    </NavLink>
                    <NavLink to='/book'>
                        <img className="books-main-nav" src="assets/imgs/logo-books.png" alt="book" />
                    </NavLink>
                </section>
            </section>
        )
    }
}
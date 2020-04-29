import BooksGallery from './BooksMain/BooksGallery.jsx'
import HomePage from './BooksMain/HomePage.jsx'
import About from './BooksMain/About.jsx'
import BookDetails from './BooksMain/BookDetails.jsx'
import eventBusService from '../services/eventBusService.js'

const Router = ReactRouterDOM.HashRouter
const { Route, NavLink } = ReactRouterDOM


export default class BooksApp extends React.Component {


    componentDidMount() {
        eventBusService.emit('set-nav-state', 'books');
    }

    render() {
        return (

            <Router>
                <div className="main-container flex justify-center align-items-center flex-column">
                    <header className="header">
                        <h1>MissBooks</h1>
                        <nav>
                            <NavLink className="link" to='/book'>Home</NavLink>
                            <NavLink className="link" to='/book/books'>Books</NavLink>
                            <NavLink className="link" to='/book/about'>About</NavLink>
                        </nav>
                    </header>
                    <Route exact component={BookDetails} path="/book/books/:bookId" />
                    <Route exact component={HomePage} path="/book" />
                    <Route exact component={BooksGallery} path="/book/books" />
                    <Route exact component={About} path="/book/about" />
                </div>
            </Router>
        )
    }
}


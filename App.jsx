const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
// const history = History.createBrowserHistory()
import NavBar from './cmps/NavBar.jsx'
import UserMsg from './cmps/UserMsg.jsx'
import BooksApp from './main/BooksApp.jsx'
import KeepApp from './main/KeepApp.jsx'
import EmailApp from './main/EmailApp.jsx'
import Home from './main/Home.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router >
                <main >
                    <NavBar/>
                    <UserMsg />
                    <Switch>
                        <Route component={BooksApp} path="/book" />
                        <Route component={KeepApp} path="/keep" />
                        <Route component={EmailApp} path="/email/" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                <footer>
                copyrights &copy; 2020 | D.G &amp; O.D
            </footer>
            </Router>
        )
    }
}

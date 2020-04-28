const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()
import NavBar from './cmps/NavBar.jsx'
import UserMsg from './cmps/UserMsg.jsx'
import BookApp from './main/BookApp.jsx'
import KeepApp from './main/KeepApp.jsx'
import EmailApp from './main/EmailApp.jsx'
import Home from './main/Home.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <main>
                    <NavBar />
                    <UserMsg />
                    <Switch>
                        <Route component={BookApp} path="/book" />
                        <Route component={KeepApp} path="/keep" />
                        <Route component={EmailApp} path="/email/" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                {/* <footer>
                copyrights 2020 &copy;
            </footer> */}
            </Router>
        )
    }
}

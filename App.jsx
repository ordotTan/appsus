const Router = ReactRouterDOM.HashRouter 
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()
import AppHeader from './cmps/AppHeader.jsx'
import BookApp from './main/BookApp.jsx'
import KeepApp from './main/KeepApp.jsx'
import EmailApp from './main/EmailApp.jsx'
import Home from './main/Home.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router history ={history}> 
            <main>
            {/* JSON.stringify(value); */}
                <br></br>
                <a href='/index.html?noteInfo={%22txt%22:%22Need%20to%20sleep%20more!%22}&noteType=NoteTxt#/email'>Open email with Note</a>
                <br></br>
                <a href='/index.html?email={"id":"MzLE","location":"inbox","from":"Bobby Fillangie","to":"Daniel Goldfine","subject":"Message from the future","body":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.","isRead":false,"sentAt":2919671164771}#/keep'>Open keep with email</a>
                <AppHeader/>
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


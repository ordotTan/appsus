import NavBar from './NavBar.jsx'
import UserMsg from './UserMsg.jsx'


export default function AppHeader(props) {
    return (
        <section>
             <h1>AppSus</h1>
             <button className = "back-btn" onClick={()=>{props.history.goBack();}}>Back</button>
            <NavBar></NavBar>
            <UserMsg></UserMsg>
        </section>
    )
}
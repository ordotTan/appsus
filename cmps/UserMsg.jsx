import eventBusService from '../services/eventBusService.js'

export default class UserMsg extends React.Component {
    state = {msg: null}

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBusService.on('user-msg', (msg)=>{
            const delay = 5000;
            this.setState({msg})
            setTimeout(()=>{
                this.setState({msg: null})
            }, delay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }

    render() {
        const {msg} = this.state
        return (!msg)? '' : 
        <section className="user-msg">
            <button className="close-user-msg" onClick={()=>{
                this.setState({msg: null})
            }}>x</button>
            <h3>{msg.header}</h3>
            <p>{msg.body}</p>
        </section>
    }
}
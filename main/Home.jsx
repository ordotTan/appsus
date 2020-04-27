import eventBusService from "../services/eventBusService.js"

export default class Home extends React.Component {

        componentDidMount() {
            eventBusService.emit('set-nav-state', 'home')
    };

    render() {
        return (
            <section>
                <h2>Home Sweet Home</h2>
            </section>
        )
    }
}
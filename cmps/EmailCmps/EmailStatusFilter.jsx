import eventBusService from "../../services/eventBusService.js"

export default class EmailStatusFilter extends React.Component {

    state = {
        filterState : 1
    }

    handleChange = ({target}) => {
        let value = target.value;
        this.setState({filterState : value}, () => {
        })
        eventBusService.emit('filter-email-by-status', value)
    }

    render() {
        return (

            <section className="email-status-filter">
                <h3>Unread</h3>
            <input type="range" min="0" max="2" value={this.state.filterState} onChange={this.handleChange}/>
                <h3>Read</h3>
            </section>

        );
    };
};
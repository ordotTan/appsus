import eventBusService from "../../services/eventBusService.js"



export default class NoteFilter extends React.Component {
    state = {
        txt: ''
      };

    componentDidMount() {
        this.removeEventBus = eventBusService.on('filter-keep-by-text', (txt) => {
            this.handleChange(txt)
        });
    }

    componentWillUnmount() {
        this.removeEventBus();
    }

    handleChange = (txt) => {
        this.setState({ txt }, () => {
          // this will run the onSetFilter for every input change
          this.props.onSetFilter(this.state);
        });
      };

    render() {
        return null
    }
}
import eventBusService from "../services/eventBusService.js";

export default class SearchBar extends React.Component {

    state = {
        placeHolderVal: ''
    };

    componentDidMount() {
        eventBusService.on('set-nav-state', (page) => {
            this.setState({ currApp: page }, () => {
                this.setPlaceHolder(page);
            });
        });
        this.setPlaceHolder(this.props.currApp);
    };

    setPlaceHolder(page) {

        let placeHolderVal;

        switch (page) {
            case 'books':
                placeHolderVal = 'Book'
                break;
            case 'keep':
                placeHolderVal = 'Note'
                break;
            case 'email':
                placeHolderVal = 'Mail'
                break;
            default:
                break;
        };
        this.setState({ placeHolderVal });
    };

    handleChange = ({ target }) => {

        const page = this.props.currApp;

        if (page === 'email') {
            eventBusService.emit('filter-email-by-text', target.value)
            return
        };
        if (page === 'keep') {
            eventBusService.emit('filter-keep-by-text', target.value)
            return
        };
    };

    render() {
        const { placeHolderVal } = this.state
        return (
            <div className="search-bar-container">
                <img src="assets/imgs/icn-search.png" alt="" />
                <input onChange={this.handleChange} className="search-bar" type="text" placeholder={`Search ${placeHolderVal}`} />
            </div>
        )
    }
}
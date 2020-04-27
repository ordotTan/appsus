import eventBusService from "../services/eventBusService.js";

export default class SearchBar extends React.Component {

    state = {
        currApp: null,
        placeHolderVal: ''
    };

    componentDidMount() {
        eventBusService.on('set-nav-state', (page) => {
            this.setState({ currApp: page }, () => {
                this.setPlaceHolder();
                console.log('placeholder got', this.state.currApp)
            })

        });
    };

    setPlaceHolder() {

        const { currApp } = this.state;
        let placeHolderVal;

        switch (currApp) {
            case 'home':
                placeHolderVal = ''
                break;
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

        const { currApp } = this.state;
        if (currApp === 'email') {
            eventBusService.emit('filter-email-by-text', target.value)
            return
        };
        if (currApp === 'keep') {
            eventBusService.emit('filter-keep-by-text', target.value)
            return
        };
    }

    render() {
        const { placeHolderVal } = this.state
        return (
            <div className="search-bar-container">
                <img src="/assets/imgs/icn-search.png" alt="" />
                <input onChange={this.handleChange} className="search-bar" type="text" placeholder={`Search ${placeHolderVal}`} />
            </div>
        )
    }
}
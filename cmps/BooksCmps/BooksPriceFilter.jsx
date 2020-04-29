import eventBusService from '../../services/eventBusService.js'

export default class Filter extends React.Component {

    state = {
        filter: {
            minPrice: 0,
            maxPrice: Infinity
        }
    }

handleChange = ({target}) => {

    const field = target.name;
    const value = target.value;

    // if (field === 'minPrice' && value === '') value = 0;
    // if (field === 'maxPrice' && value === '') value = Infinity;

    this.setState(prevState => ({filter: {...prevState.filter, [field]: value}}), () => {
        eventBusService.emit('filter-books', this.state.filter)
    });
};

    render() {
        const { title, minPrice, maxPrice } = this.state;
        return (
                <section className="books-price-filter">
                <form onSubmit={this.onFilter}>
                    <div>
                    <label>Min Price:</label>
                    <input type="number" name="minPrice" value={minPrice} onChange={this.handleChange} />
                    </div>
                    <div>
                    <label>Max Price:</label>
                    <input type="number" name="maxPrice" value={maxPrice} onChange={this.handleChange} />
                    </div>
                </form>
                </section>

        )
    }
}

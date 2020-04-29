export default class Filter extends React.Component {

    state = {
        filter: {
            title: '',
            minPrice: 0,
            maxPrice: Infinity
        }
    }
handleChange = ({target}) => {
    const field = target.name;
    const value = (target.type === 'number') ? parseInt(target.value) : target.value;

    this.setState(prevState => ({filter: {...prevState.filter, [field]: value}}), () => {
        this.props.onSetFilter(this.state.filter);
    });
};
    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filter);
    };
    render() {
        const { title, minPrice, maxPrice } = this.state;
        return (
            <React.Fragment>
                <h1>Filter by:</h1>
                <form onSubmit={this.onFilter}>
                    <label>By Title:</label>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                    <label>By Min Price:</label>
                    <input type="number" name="minPrice" value={minPrice} onChange={this.handleChange} />
                    <label>By Max Price:</label>
                    <input type="number" name="maxPrice" value={maxPrice} onChange={this.handleChange} />
                </form>
            </React.Fragment>
        )
    }
}

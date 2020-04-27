import eventBusService from "../../services/eventBusService.js"

export default class NoteFilter extends React.Component {
    state = {
        filter: {
            name: ''
        }
    }

    componentDidMount() {
        this.removeEventBus = eventBusService.on('filter-keep-by-text', (txt) => {
            this.handleChange(txt)
        });
    }

    handleChange = (value) => { // The onChnage function gets be default "event".. and we destructe from it "target"

        console.log('note filter got', value)
        this.setState(prevState => (
            // console.log(prevState.filter),
            // console.log({...prevState.filter}),
            // console.log(field),
            // console.log([field]),
            // console.log(value),
            { filter: { ...prevState.filter, name: value } }), () => { // this will run the onSetFilter for every input change
                this.props.onSetFilter(this.state.filter)
            })
    }
    // if we want to invoke the filter by clicking on a button... 
    // onFilter = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetFilter(this.state.filter)
    // }

    render() {
        const { name } = this.state.filter
        return (
            <section>
                {/* <h2>Filter</h2> */}
                {/* <form onSubmit={ this.onFilter }> */}
                {/* <label htmlFor="">Filter by name: </label> */}
                {/* <input type="text" name="name" placeholder="Note Name" value={ name } /> */}
                {/* <button>Filter</button> */}
                {/* </form> */}
            </section>

        )
    }
}
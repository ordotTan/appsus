export default class NoteFilter extends React.Component {
    state = {
        filter: {
            name: ''
        }
    }

    handleChange = ({ target }) => { // The onChnage function gets be default "event".. and we destructe from it "target"
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ( 
            // console.log(prevState.filter),
            // console.log({...prevState.filter}),
            // console.log(field),
            // console.log([field]),
            // console.log(value),
            { filter: { ...prevState.filter, [field]: value } }), () => { // this will run the onSetFilter for every input change
            this.props.onSetFilter(this.state.filter)
        })
    }
    // if we want to invoke the filter by clicking on a button... 
    // onFilter = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetFilter(this.state.filter)
    // }

    render() {
        const { name} = this.state.filter
        return (
            <section>
                {/* <h2>Filter</h2> */}
            {/* <form onSubmit={ this.onFilter }> */}
                <label htmlFor="">Filter by name: </label>
                <input type="text" name="name" placeholder="Note Name" value={ name } onChange={ this.handleChange } />
                {/* <button>Filter</button> */}
            {/* </form> */}
            </section>

        )
    }
}
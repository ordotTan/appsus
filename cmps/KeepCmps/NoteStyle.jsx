export default class NoteStyle extends React.Component {
    state = {
        backgroundColor: ''
    }

    handleInput = (ev) => {
        console.log(ev.target.value)
        const value = ev.target.value
        this.setState({backgroundColor:value})
      //  this.props.onSetBackgroundColor((this.props.note,value))
    }

    render() {
        return (
        <div>
            <h2>Style Controls:</h2>
            Background color:
            <input type="color" onChange={(ev)=>this.props.onSetBackgroundColor(this.props.note.id,ev.target.value)}></input>
            Font color:
            <input type="color" onChange={(ev)=>this.props.onSetFontColor(this.props.note.id,ev.target.value)}></input>
        </div>

        )
    }
}
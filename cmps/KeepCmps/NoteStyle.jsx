import ColorPicker from './ColorPicker.jsx'


export default class NoteStyle extends React.Component {

    render() {
        return (
        <div>
            <h4>Background color</h4> <ColorPicker noteId={this.props.note.id} handleColorSelection={this.props.onSetBackgroundColor}/>
            <h4>Font color</h4>  <ColorPicker noteId={this.props.note.id} handleColorSelection={this.props.onSetFontColor}/>
        </div>

        )
    }
}
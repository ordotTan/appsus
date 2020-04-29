import ColorPicker from './ColorPicker.jsx'

export default class NoteStyle extends React.Component {

    state = {
        activeColors: '',
    }

    toggleBgColor = () => {
        this.setState({ activeColors: 'background' })
    }

    toggleFontColor = () => {
        this.setState({ activeColors: 'font' })
    }

    render() {
        const { activeColors } = this.state
        return (
            <div>
                <img className={(activeColors === 'background') ? "icon active" : "icon"} onClick={this.toggleBgColor} src="assets/imgs/bg-color.png"></img> 
                <img className={(activeColors === 'font') ? "icon active" : "icon"} onClick={this.toggleFontColor} src="assets/imgs/font-color.png"></img> 
                {activeColors === "background" && <ColorPicker noteId={this.props.note.id} handleColorSelection={this.props.onSetBackgroundColor} />}
                {activeColors === "font" && <ColorPicker noteId={this.props.note.id} handleColorSelection={this.props.onSetFontColor} />}
            </div>

        )
    }
}
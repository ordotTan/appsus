export default class NoteImg extends React.Component {

    addImgNote = (img) => {
        console.log(img.src)
    }

    render() {
        return (<div>
            <h1>Input img</h1>
            <img src={this.props.note.info.src}></img>
        </div>
        )

    }
}
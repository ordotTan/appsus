export default class NoteStyle extends React.Component {
    state = {
        backgroundColor: 'white'
    }

    render() {
        return (
        <div>
            <h2>Style Controls:</h2>
            Background color:<input type="color"></input>
        </div>

        )
    }
}
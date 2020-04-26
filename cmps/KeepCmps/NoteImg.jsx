export default class NoteImg extends React.Component {

    onImgInput = (ev) => {
        console.log(ev)
        this.loadImageFromInput(ev, this.addImgNote)
    }

    loadImageFromInput = (ev, onImageReady) => {
        //document.querySelector('.share-container').innerHTML = ''
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = onImageReady.bind(null, img)
            img.src = event.target.result;
        }
        reader.readAsDataURL(ev.target.files[0]);
    }

    addImgNote = (img) => {
        console.log(img.src)
    }

    render() {
        return (<div>
            <h1>Input img</h1>
            <input type="file" id="file" name="image" onChange={(ev)=>{this.onImgInput(ev)}} />
            <img></img>
        </div>
        )

    }
}
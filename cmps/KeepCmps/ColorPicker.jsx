export default class ColorPicker extends React.Component {

    state = {
        selectedColor:''
    }

    toggle = () => {
        console.log('toggled')
    }

    render() {
        const colorsInfo = [
            { color: 'lightgoldenrodyellow', class: 'color-item color0' },
            { color: '#EAE519', class: 'color-item color1' },
            { color: '#4A4737', class: 'color-item color2' },
            { color: '#AFAC99', class: 'color-item color3' },
            { color: '#00FFE2', class: 'color-item color4' },
            { color: '#00CAAB', class: 'color-item color5' },
            { color: 'white', class: 'color-item white' },
            { color: 'black', class: 'color-item black' }
        ]
        return (
            <div className="color-picker flex align-center flex-start">
                {colorsInfo.map(colorItem => 
                    <div key ={colorItem.color} onClick={()=>{this.props.handleColorSelection(this.props.noteId,`${colorItem.color}`);this.toggle()}} 
                    className={colorItem.class}></div>
                )}
            </div>
        )

    }
    
}


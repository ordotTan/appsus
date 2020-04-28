export default function ColorPicker(props) {
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
        <div className="color-picker flex align-center">
            {colorsInfo.map(colorItem => 
                <div key ={colorItem.color} onClick={()=>props.handleColorSelection(props.noteId,`${colorItem.color}`)} 
                className={colorItem.class}></div>
            )}
        </div>
    )
}


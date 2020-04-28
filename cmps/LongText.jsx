export default function LongText(props) {

    const {text,isLongTxtShown,txtLimit} = props
    var displayText = isLongTxtShown ? text : text.substring(0, txtLimit)
    var btnLabel = isLongTxtShown ? 'Less' : 'More'
    if (text.length > txtLimit && btnLabel === 'More') displayText += '...'
    return (<p>
        {displayText} {(props.text.length > txtLimit) && <button className="btn long-text-toggle" onClick={(ev)=>props.onToggleDesc(ev)}>{btnLabel}</button>}
    </p>
    )
}



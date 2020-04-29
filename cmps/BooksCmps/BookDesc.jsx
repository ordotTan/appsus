export default function BookDesc(props) {
    if (props.desc.length < 100) {
        return (
            <p className="book-desc">{props.desc}</p>
        )
    } else if (!props.isLongText) {
        return (
            <p className="book-desc">{props.desc.slice(0,99)}...<span onClick={() => {
                props.toggleLongText();
            }}> show more</span></p>
        )
    } else {
        return (
            <p className="book-desc">{props.desc}<span onClick={() => {
                props.toggleLongText();
            }}> show less</span></p>
        )
    };
}
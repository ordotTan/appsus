import BookPreview from './BookPreview.jsx'
import utilService from '../../services/utilService.js'

export default function BookList(props) {


    return (
        <div className="book-list">
            {props.books.map(book => <BookPreview onSelectBook={props.onSelectBook} key={utilService.makeId(4)} book={book} />)}
        </div>
    )};
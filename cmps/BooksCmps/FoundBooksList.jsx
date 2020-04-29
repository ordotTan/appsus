import utilService from "../../services/utilService.js";

export default function FoundBooksList(props) {

    return (
        <ul className="found-books">
            {props.foundBooks.map(book => {
                return (
                    <li key={utilService.makeId(3)} onClick={() => {
                        props.onAddBook(book);
                    }}>{book.volumeInfo.title}</li>
                );
            })}
        </ul>
    );
};
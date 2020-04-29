const { Link } = ReactRouterDOM

export default function bookPreview(props) {

    

    const { book } = props
    const currency = book.listPrice.currencyCode
    let currencySymbol;

    switch (currency) {
        case 'ILS':
            currencySymbol = '₪'
            break;
        case 'USD':
            currencySymbol = '$'
            break;
        case 'EUR':
            currencySymbol = '€'
            break;
        default:
            break;
    }


    return (
        <Link to={`/book/books/${book.id}`}>
            <article className="book-preview flex flex-column justify-space-between align-items-center">
                <img src={book.thumbnail} alt="book-img" />
                <div>
                    <h4>{book.title}</h4>
                    <p>{book.listPrice.amount} {currencySymbol}</p>
                </div>
            </article>
        </Link>
    );
};
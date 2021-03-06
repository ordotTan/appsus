import booksService from '../../services/booksService.js'
import BookList from '../../cmps/BooksCmps/BookList.jsx'
import AddBook from '../../cmps/BooksCmps/AddBook.jsx'
import BookAddedMsg from '../../cmps/BooksCmps/BookAddedMsg.jsx'
import eventBusService from '../../services/eventBusService.js'

export default class BookApp extends React.Component {

    state = {
        books: [],
        filterByTxt: null,
        filterByPrice: null
    };

    componentDidMount() {
        this.removeFilterEB = eventBusService.on('filter-books', (filter) => {
            this.setFilter(filter)
        });
        this.loadBooks();
    }

    loadBooks = () => {
        booksService.query(this.state.filterByTxt, this.state.filterByPrice)
            .then(books => {
                this.setState({ books })
            });
    }

    setFilter = (filter) => {
        console.log('books gallery got', filter)


        if (filter.minPrice != undefined) {
            this.setState({ filterByPrice: filter }, () => {
                this.loadBooks();
            });
        }else {
            this.setState({ filterByTxt: filter }, () => {
                this.loadBooks();
            });
        }
    };

    render() {

        const { books } = this.state;

        return (
            <section className="books-main-container">
                <BookAddedMsg />
                <AddBook refreshBooks={this.loadBooks} />
                <BookList onSelectBook={this.onSelectBook} books={books} />
            </section>
        );
    };
};
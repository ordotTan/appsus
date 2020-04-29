import booksService from '../../services/booksService.js'
import BookList from '../../cmps/BooksCmps/BookList.jsx'
import BookFilter from '../../cmps/BooksCmps/BookFilter.jsx'
import AddBook from '../../cmps/BooksCmps/addBook.jsx'
import BookAddedMsg from '../../cmps/BooksCmps/BookAddedMsg.jsx'

export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null
    };

    componentDidMount() {

        this.loadBooks()
    }

    loadBooks = () => {
        let books = booksService.query(this.state.filterBy)
        this.setState({ books })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks());
    };

    render() {

        const { books } = this.state;

        return (
            <section className="books-main-container">
                <h1>BOKK AAP</h1>
                <BookAddedMsg />
                <AddBook refreshBooks={this.loadBooks} />
                <BookFilter onSetFilter={this.onSetFilter} books={books} />
                <BookList onSelectBook={this.onSelectBook} books={books} />
            </section>
        );
    };
};
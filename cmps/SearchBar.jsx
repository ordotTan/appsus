export default class SearchBar extends React.Component {

    render() {

        return (
            <div className="search-bar-container">
                <img src="/assets/imgs/icn-search.png" alt=""/>
                <input className="search-bar" type="text" placeholder="Search"/>
            </div>
        )
    }
}
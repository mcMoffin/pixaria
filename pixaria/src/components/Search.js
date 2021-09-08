import {useState} from 'react'
import {FaSearch} from 'react-icons/fa';

const Search = ({search,query}) => {

    const [text,setText] = useState('');

    function submitSearch(e){
        e.preventDefault();

        if(!text){
            alert("Please type a query in the search bar.");
            return;
        }

        search(`https://api.pexels.com/v1/search?query=${text}&per_page=8&page=1`);
        query(text);

        setText('');
    }

    return (
        <form className="search" onSubmit={submitSearch}>
            <input 
                type="text" 
                placeholder="Enter search"
                value={text}
                onChange={ e => setText(e.currentTarget.value) }
                className="search-field"
            />
            <button 
                type="submit"
                value="Search"
                className="btn btn-search" 
            >
                <FaSearch />
            </button>
        </form>
    )
}

export default Search

import PropTypes from 'prop-types';
import Search from './Search';

const header = ( {name,picUrl,query,search} ) => {

    return (
        <div
            className="hero-header" 
            style={{backgroundImage: `url("${picUrl}")`
        }}>
            <div className="hero-content" >
                <h1>
                    The best free stock photos shared by talented creators.
                </h1>
            
                <Search search={search} query={query} />
            </div>

            <span>Photo by {name}</span>
        </div>
    )
}

/* header.defaultProps = {
    name: "Pok Rei",
    picUrl: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
} */

header.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}

export default header;
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Images = ({ name, picUrl, largPic, modal, id }) => {
    
    return (
        <div className="gallary-img-container">
            <img 
                src={ picUrl }
                className="gallary-img"
                onClick={ ()=> modal(id) }
            ></img>

            <div className="img-info">
                
                <div className="photographer-info">
                    <span className="photographer-name">{ name }</span>
                </div>

                <div className="img-actions">
                    <FontAwesomeIcon 
                        className="img-actions-icons" 
                        icon={ faFileDownload } 
                        style={ iconStyle }
                        onClick={ ()=> window.open(largPic) }
                    />
                </div>
            </div>
        </div>
    )
}

const iconStyle = {
    margin: '6px',
    width: '30px',
    height: '30px',
    color: '#fff',
    pointerEvents: 'all',
    cursor: 'pointer',
}

Images.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    dlLink: PropTypes.string
}
export default Images

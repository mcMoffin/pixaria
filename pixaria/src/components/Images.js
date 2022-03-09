import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderStyle, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'

const Images = ({ posterImg, name, posterPg, picUrl, largPic, Modal, id }) => {
    
    return (
        <div className="gallery-img-container">
            <img
                src={ picUrl }
                onClick={ ()=>{
                    Modal(id);
                    $('body').addClass('prevent-scroll');
                }}
            ></img>

            <div className="img-info">
                
                <div className="photographer-info">
                    {/* <img className='posterImg' src={posterImg}/> */}
                    <a href={posterPg} className="photographer-name"><h1>{name}</h1></a>
                </div>

                <div className="img-actions">
                    <FontAwesomeIcon 
                        className="img-actions-icons" 
                        icon={faFileDownload} 
                        style={iconStyle}
                        onClick={()=> window.open(largPic)}
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

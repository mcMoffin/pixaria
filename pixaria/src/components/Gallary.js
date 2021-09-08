import {useState} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Images from './Images';

const Gallary = ( {GalaryTite,pics,onBtnClick,modal} ) => {

    return (
        <div className="gallary-section">
            <h2>{ GalaryTite }</h2>
            <div className="gallary">
                
                { pics.map((pic) => (
                    <Images
                        name={pic.photographer}
                        picUrl={pic.src.medium}
                        largPic={pic.src.large2x}
                        id={pic.id}
                        modal={ modal }
                    />
                ) )}
            </div>

            <Button onClick={ onBtnClick } bgColor="#7E4DD2" txtColor="#fff"  btnText="Load More" />
        </div>
    )
}

Gallary.defaultProps = {
    profImg: "https://images.pexels.com/users/avatars/92810756/brian-lazo-240.jpeg?auto=compress&fit=crop&h=256&w=256",
    posterName: "Brian Lazo",
    imgUrl: "https://images.pexels.com/photos/9160984/pexels-photo-9160984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    original: "https://www.pexels.com/photo/9160984/download/?search_query=&tracking_id=so1xqtw586"
}

Gallary.propTypes = {
    GalaryTite: PropTypes.string
}
export default Gallary

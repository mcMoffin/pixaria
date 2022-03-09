import {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Images from './Images';

const Gallery = ( {GalleryTitle,Pics,onBtnClick,Modal} ) => {
    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms);
        };
    }
    
    function GetColumnsAmnt() {
        const [dimensions, setDimensions] = React.useState({
            width: window.innerWidth
        })
        React.useEffect(() => {
            const debouncedHandleResize = debounce(function handleResize() {
                setDimensions({
                width: window.innerWidth
                })
            }, 1000);
    
            window.addEventListener('resize', debouncedHandleResize);
    
            return _ => {
                window.removeEventListener('resize', debouncedHandleResize)        
            }
        });
        
        if(dimensions.width >= 1900){
            return 4;
        }else if(dimensions.width>1100 && dimensions.width<1900 ){
            return 3;
        }else{
            return 2;
        }
    }

    function sortPics(num,arr){
        let colPics=[];
        for(let i = 0; i < num; i++){
            let inc = i;
            colPics.push(
                arr.filter( (pic,indx)=> {
                    if(indx == inc){
                        inc+= num;
                        return pic
                    }
                })
            );
        }
        return colPics; 
    }
console.log(Pics);
    return (
        <div className="gallery-section">
            
            <h2>{ GalleryTitle }</h2>

            <div className="gallery">
                {sortPics(GetColumnsAmnt(),Pics).map( col=>{

                    return <div className='col'>
                    
                        {col.map((pic,i)=>{
                            return <Images
                                key={i}
                                name={pic.photographer}
                                // posterImg={`https://images.pexels.com/users/avatars/${pic.photographer_id}/${daria-kruchkova-265}.jpeg?auto=compress&fit=crop&h=256&w=256`}
                                posterPg={pic.photographer_url}
                                picUrl={pic.src.medium}
                                largPic={pic.src.large2x}
                                id={pic.id}
                                Modal={Modal}
                            />
                        })} 
                    
                    </div>
    
                })}
            </div>

            <Button 
                onClick={ onBtnClick } 
                bgColor="#7E4DD2" txtColor="#fff"  
                btnText="Load More" 
            />
        </div>
    )
}

Gallery.defaultProps = {
    profImg: "https://images.pexels.com/users/avatars/92810756/brian-lazo-240.jpeg?auto=compress&fit=crop&h=256&w=256",
    posterName: "Brian Lazo",
    imgUrl: "https://images.pexels.com/photos/9160984/pexels-photo-9160984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    original: "https://www.pexels.com/photo/9160984/download/?search_query=&tracking_id=so1xqtw586"
}

Gallery.propTypes = {
    GalleryTitle: PropTypes.string
}
export default Gallery

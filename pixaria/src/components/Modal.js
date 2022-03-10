import {useState} from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Modal = ({picInfo,close}) => {
    const [size,setSize]= useState(picInfo.src.medium);
    const [hideShow,setHideShow]= useState(false);

    return (
        <div className="modal-bg">
            <Button 
                onClick={ close }
                className='close-btn'
                bgColor='transparent'  
                btnText="X"
            />
        
            <div className="modal">
                <span className="modal-info">
                    <a href={picInfo.photographer_url}><h1>{picInfo.photographer}</h1></a>

                    <div className="modal-actions">
                        <Button
                            classN={"dlBtn"}
                            txtColor={'white'}
                            bgColor={'#7E4DD2'}
                            btnText={'Download'}
                            onClick={ ()=> window.open(size) }
                        />
                        <div>
                            <Button className="dropDownBtn" 
                                classN={"ddBtn"}
                                txtColor={'white'}
                                bgColor={'#7E4DD2'}
                                btnText={
                                    <FontAwesomeIcon className="img-actions-icons" 
                                        icon={ faChevronDown }
                                        style={ iconStyle }
                                    />
                                }
                                onClick={ ()=> {setHideShow(!hideShow)} }
                            />
                            
                            <form className={`dropDown ${hideShow === true && "active"}` } name="Size" id="Size">
                                <ul>
                                    <li>
                                        <input id="tiny" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.tiny)} />
                                        <label htmlFor="tiny">Tiny</label>
                                    </li>
                                    <li>
                                        <input id="small" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.small)} />
                                        <label htmlFor="small">Small</label>
                                    </li>
                                    <li>
                                        <input id="portrait"  type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.portrait)} />
                                        <label htmlFor="portrait">Portrait</label>
                                    </li>
                                    <li>
                                        <input id="original" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.original)} />
                                        <label htmlFor="original">original</label>
                                    </li>
                                    <li>
                                        <input id="medium" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.medium)} />
                                        <label htmlFor="medium">Medium</label>
                                    </li>
                                    <li>
                                        <input id="large" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.large)} />
                                        <label htmlFor="large">Large</label>
                                    </li>
                                    <li>
                                        <input id="large2" type="radio" name="sizes" onClick={ ()=> setSize(picInfo.src.large2x)}/>
                                        <label htmlFor="large2">large x 2</label>
                                    </li>
                                </ul>
                            </form>                            
                        </div>
                    </div>
                </span>
            
                <div className="modal-img-container">
                    <img className="modal-img" src={picInfo.src.large} ></img>
                </div>
            </div>
        </div>
    )
}

const iconStyle = {
    color: '#fff',
    pointerEvents: 'all'
}

export default Modal

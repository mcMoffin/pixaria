import {useState, useEffect} from 'react';
import $ from 'jquery'
import './style/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

function App() {

  // variables
  const auth = "563492ad6f91700001000001653e06666d1942be81ce3137b5a4417d";
  
  
  const [submitedUrl, setSubmitedUrl] = useState(`https://api.pexels.com/v1/curated?per_page=8&page=1`);
  const [modalPic, setModalPic] = useState();
  const [headerInfo, setHeaderInfo] = useState({});
  const [title,setTitle] = useState("Today's selection");
  const [pictures, setPictures] = useState([]);

  useEffect( ()=>{
    async function getHeaderInfo() {
      await curatedHeader();
      await curatedPhotos(8,submitedUrl);
    }
    getHeaderInfo();
  }, []);


  const curatedHeader = async ()=>{

    const dataFetch = await fetch("https://api.pexels.com/v1/search?query=landscape", {
      headers: {
          Authorization: auth
      }
    });

    const data = await dataFetch.json().catch( err => console.log(`Failed to fetch Header`) )

    const currentDay = new Date().getDate();
    const randoNum = currentDay >= 15 ? currentDay % 15 : currentDay;
    
    setHeaderInfo( {imgUrl: data.photos[randoNum].src.original, name:  data.photos[randoNum].photographer} );
  }

  const curatedPhotos = async ( amount=8,fetchUrl )=>{
    
    const newFetchedUrl = fetchUrl.replace(/per_page=8/,`per_page=${amount}`);

    const dataFetch = await fetch(newFetchedUrl, {
      headers: {
        Authorization: auth
      }
    });

      const data = await dataFetch.json().catch( err => console.log(`Failed to fetch Photos`) );
    
      setPictures(data.photos);
  }

  function modal(id){
    const index = pictures.findIndex(pic => pic.id == id);
    setModalPic( pictures[index] );
  }


  return (
    <div className="container">
      <NavBar
        search={ (query)=> { curatedPhotos(8,query); setSubmitedUrl(query) } }
        query={(query)=> setTitle(query)}
      />

      {// checks if "modalPic" has an object stored, if true creates the <modal />
        typeof modalPic === 'object' && <Modal picInfo={modalPic} close={ ()=>{
          setModalPic('');
          $('body').removeClass('prevent-scroll');
        }} />
      }

      <Header
        picUrl={ headerInfo.imgUrl }
        posterName={ headerInfo.name }
        search={ (query)=> { curatedPhotos(8,query); setSubmitedUrl(query) } }
        query={ (query)=> setTitle(query) }
      />

      {<Gallery
        GalleryTitle={title}
        Pics={pictures}
        onBtnClick={ ()=> curatedPhotos(pictures.length + 6, submitedUrl) }
        Modal={ (id)=> modal(id) }
      />}
      
    </div>
  );
}

export default App;
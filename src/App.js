import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import FetchPhotoAction from './Actions/FetchPhotoAction';
import AlbumComponent from './Components/AlbumComponent';
function App() {


  const photos=useSelector(store=>store.photos)
  const dispatch= useDispatch()

  useEffect(()=>{
    console.warn('ComponenetDid Mount Called')
    dispatch(FetchPhotoAction())
  },[] )


  return (
    <div className="App">
      <header className="App-header">
        <AlbumComponent></AlbumComponent>
      {/* <div>
          {
            photos.map(photo => {

              return <span>
                <img src={photo.thumbnailUrl} />

              </span>
            })
          }
        </div> */}
        
      </header>
    </div>
  );
}

export default App;

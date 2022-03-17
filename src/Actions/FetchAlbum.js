import { FETCH_ALBUM } from "../Constant/Constant"

       const FetchAlbum=()=>ActionDispatcher=>{
           fetch('https://jsonplaceholder.typicode.com/albums')
           .then(response => response.json())
           .then(json=>ActionDispatcher({type:FETCH_ALBUM,value:json}))
       }
              

    
    export {FetchAlbum}
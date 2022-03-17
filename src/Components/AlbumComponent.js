import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchAlbum } from "../Actions/FetchAlbum"


export default()=>{

    const AlbumStore=useSelector(Store=>Store.albums)
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(FetchAlbum()) 
    },[])



    return(
         <React.Fragment>
             <div>
                 {
                   AlbumStore.map(album=> {

                    return <span>
                      {album.title}
      
                    </span>
                  })   
                 }
             </div>

         </React.Fragment>

    )
}



      const  FetchPhotoAction=()=>dispatch=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(response=>response.json())
       .then(json=>dispatch({type:'GET_PHOTO',value:json}))
}

export default FetchPhotoAction;


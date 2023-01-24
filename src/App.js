import Searchbar from "./components/Searchbar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";


function App() {
  const[images,setImages]=useState([])
  const handleSubmit = async (term) => {
    //console.log("do Search with",term)
   const result = await searchImages(term)
   setImages(result)
  }
  return (
    <div className="App">
     <h1>Image Search App</h1>
     <Searchbar searchSubmit = {handleSubmit}/>
     <ImageList images={images} />
    </div>
  );
}

export default App;

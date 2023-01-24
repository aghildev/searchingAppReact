import axios from "axios";

const searchImages = async (term)=>{
  const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization: "Client-ID WrgRfYRot0gTiImr-e9wvkMNrsaGWL2N-iTSeTs6vLc"
    },
    params:{
        query:term
    }
  })
  console.log(response)
  return response.data.results
}


export default searchImages;
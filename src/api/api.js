import axios from "axios";

const Backend_EndPoint="https://qtify-backend-labs.crio.do";

export const fetchTopAlbum=async()=>{
   try {
       let res= await axios.get(`${Backend_EndPoint}/albums/top`);
       return res.data;
   } catch (err) {
    console.error(err);
   }
}
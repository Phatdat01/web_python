import axios from "axios";
const baseURL = "http://127.0.0.1:5000";

const instance = axios.create({
    baseURL,
    withCredentials: true, // Ensure that cookies are sent with requests
    headers: {
      "Content-Type": "application/json",
    },
  });

const DataShop ={
    listData: async ()=>{
        try{
            const response = await instance.post('/test_conn', {});
            console.log(response);
        }
        catch(error) {
            console.error("Error calling other API:", error);
            throw error; // Re-throw the error to propagate it to the caller
          }
    }
}

export default DataShop;
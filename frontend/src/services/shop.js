import axios from "axios";
const baseURL = "http://127.0.0.1:5000";

const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

const DataShop ={
    listData: async ()=>{
        try{
            const response = await instance.post('/test_conn', {});
            cosole.log(response);

            let xData = response.data.area;
            let obj = {
              arr: Object.values(xData),
              url: response.data.image_url,
            };
            return obj;
        }
        catch(error) {
            console.error("Error calling other API:", error);
            throw error; // Re-throw the error to propagate it to the caller
          }
    }
}

export default DataShop;
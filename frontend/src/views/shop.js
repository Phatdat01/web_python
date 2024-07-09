import DataShop from "../services/shop";
const [data, setData] = useState([]);

function mainExploreData(){
    useEffect(() => {
    //     const fetchData = async() => {
    //         try{
                
    //             const result = await  DataShop.listData();
    //             setData(result.arr);
    //         }
    //         catch (error) {
    //             console.error("Error fetching data:", error);
    //         } finally {
                
    //         }
    //     }
    //     fetchData();
    })
    return (<div className="content">
        <h2 style={{ textAlign: "center" }}> 
          No data available to show dashboard
        </h2>
      </div>
    );
}

export default mainExploreData;
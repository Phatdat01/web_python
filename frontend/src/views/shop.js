import DataShop from "../services/shop";
const [data, setData] = useState([]);

function mainExploreData(){
    useEffect(() => {
        const fetchData = async() => {
            try{
                setLoading(true);
                const result = await  DataShop.listData();
            }
            catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
                setData(result.arr);
            }
        }
        fetchData();
    })
    return (<>
        <div>
            Hello
        </div>
    </>
    );
}

export default mainExploreData;
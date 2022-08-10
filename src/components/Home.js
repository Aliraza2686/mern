import { useSelector, useDispatch } from "react-redux";
import { decreament, increament, increamentBy } from "../store/reducers/mainReducer";

const Home = () => {
    const { count } = useSelector((state) => state.main);
    const dispatch = useDispatch();
    return (
        <div>  
             <h2 className="text-red-900">Home</h2>
             <div className="container">
                <p>{count}</p>
                <button onClick={() => dispatch(increament())} className="mx-10 my-3 bg-yellow-500 m-5">Increament</button>
                <button onClick={() => dispatch(decreament())} className="mx-10 my-3 bg-red-600 m-5">decreament</button>
                <button onClick={() => dispatch(increamentBy(33))}>increament by 33</button>
             </div>
       </div>
    )
}

export default Home;
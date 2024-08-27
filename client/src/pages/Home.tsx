import { useSelector, useDispatch } from "react-redux";
import { AuthDetails, setAuth } from "./../state/slice/eventSlice";
import { RootState, AppDispatch } from "./../state/store";

const Home = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  return <div className="text-3xl font-bold underline">Home</div>;
};

export default Home;

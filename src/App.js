import { useSelector, useDispatch } from "react-redux";
import RouteComp from "./routes/index";
import Login from "./pages/login";
import { isValidToken } from "./utils";
import { authSuccess } from "./store/reducers/authSlice";
import { error } from "./store/reducers/loaderSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const checkAuthToken = () => {
    const token = localStorage.getItem("srimandir");
    if (token) {
      const validateToken = isValidToken(token);
      if (validateToken.data) {
        dispatch(authSuccess());
      } else {
        dispatch(error(validateToken.error));
      }
    }
  };
  checkAuthToken();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // return <>{isAuthenticated ? <RouteComp /> : <Login />}</>;
  return <RouteComp /> ;
}

export default App;

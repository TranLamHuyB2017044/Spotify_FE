// import Header from "./components/HeaderComponent/Header";
import { useEffect } from "react";
// import Login from "./components/LoginComponent/Login";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import Spotify from "./components/Spotify";
function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect(() =>{
    const hash = window.location.hash
    if(hash){
      const token = hash.split('=')[1]
      dispatch({type: reducerCases.SET_TOKEN, token})
    }
  }, [token , dispatch]);
  return (
    <>
       <Spotify/> 
    
    </>
  );
}

export default App;

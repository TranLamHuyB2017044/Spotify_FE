import Body from "./BodyComponent/Body";
import Footer from "./FooterComponent/Footer";
import Navbar from "./NavbarComponent/Navbar";
import Sidebar from "./SidebarComponent/SideBar";
import styles from "./Spotify.module.scss";
import { useStateProvider } from "../utils/StateProvider";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  const navBarRef = useRef()
  const [backGroundNavBar, setbackGroundNavBar] = useState(false);

  const onScrollNav = () =>{
    navBarRef.current.scrollTop >= 30 ? setbackGroundNavBar(true) : setbackGroundNavBar(false);
  }
  useEffect(() => {
    const getUserProfile = async () => {
      const {data} = await axios.get(
        "https://api.spotify.com/v1/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      }
      dispatch({type: reducerCases.SET_USER, userInfo})
    }
    getUserProfile()
  }, [token, dispatch])
  return (

      <div className={styles.Spotify_container}>
        <div className={styles.Spotify_body}>
          <Sidebar />
          <div className={styles.body} ref={navBarRef} onScroll={onScrollNav}>
            <Navbar backGroundNavBar = {backGroundNavBar} />
            <div className={clsx(styles.body_content)} >
              <Body />
            </div>
          </div>
        </div>
        <div className="Spotify_footer">
          <Footer />
        </div>
      </div>

  );
}

export default Spotify;

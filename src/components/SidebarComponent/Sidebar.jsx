import styles from "./Sidebar.module.scss";
import { CgHome } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
// import {FiPlusSquare} from "react-icons/fi"
// import {MdLanguage} from "react-icons/md"
import PlayLists from "../PlayListComponent/PlayLists";
function Sidebar() {
  
  
  return (
    <div className={styles.Sidebar_Container}>
        <div className={styles.Logo}>
            <img  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Logo"/>
        </div>
        <ul className={styles.nav_items}>
          <li className={styles.item}>
            <CgHome className={styles.icon}/>
            <span>Home</span>
          </li>
          <li className={styles.item}>
            <BiSearch className={styles.icon}/>
            <span>Search</span>
          </li>
          <li className={styles.item}>
              <IoLibrary className={styles.icon}/>
              <span>Your Libary</span>
          </li>
        </ul>
        {/* <ul className={styles.nav_items}>
          <li className={styles.item}>
                <FiPlusSquare className={styles.icon}/>
                <span>Add PlayLists</span>
            </li>
            <li className={styles.item}>
                <BiHeartSquare className={styles.icon}/>
                <span>Like Song</span>
            </li>
        </ul> */}
        <PlayLists/>
        <div className={styles.footer_sidebar}>
            <span>Legal</span>
            <span>Privary Center</span>
            <span>Privary Policy</span>
            <span>Cookies</span>
            <span>About Ads</span>
            <span>Acessbility</span>
        </div>
        {/* <button className={styles.Language}><MdLanguage className={styles.icon_language}/> English</button> */}
    </div>
  );
}

export default Sidebar;

import styles from "./Navbar.module.scss";
import {FaSearch} from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../utils/StateProvider";
import clsx from 'clsx'
function Navbar({backGroundNavBar}) {
    const [{userInfo}] = useStateProvider();
  return (
    <div className={clsx(styles.Navbar_Container, backGroundNavBar ? styles.changeBackground : '')}>
        <div className={clsx(styles.Search_bar)}>
            <FaSearch/>
            <input className={styles.input} type="text" placeholder="What do you want to listen to?" />
        </div>
        <div className={styles.avatar}>
            <a href="#">
                <CgProfile/>
                <span>{userInfo?.userName}</span>
            </a>
        </div>
    </div>
  );
}

export default Navbar;

import styles from './Footer.module.scss';
import CurrentTrack from '../CurrentTrackComponent/CurrentTrack';
import Control from '../ControllerPlayingComponent/Control';
function Footer(){
    return (
        <div className={styles.Footer_Container}>
            <CurrentTrack/>
            <Control/>
        </div>
    )
}

export default Footer;
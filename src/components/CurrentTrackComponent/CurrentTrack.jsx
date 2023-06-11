import { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";
import styles from "./CurrentTrack.module.scss";
import {AiOutlineHeart} from 'react-icons/ai'
import {MdPictureInPictureAlt} from 'react-icons/md'
function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/me/player/currently-playing`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artists) => artists.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <div className="current_container">
      {currentlyPlaying && (
      <div className={styles.track}>
          <div className={styles.track__image}>
            <img src={currentlyPlaying.image} alt="currentPlaying" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.track__name}>{currentlyPlaying.name}</h4>
            <h6 className={styles.track__artists}>
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
          <div className={styles.track_icon}>
            <AiOutlineHeart/>
            <MdPictureInPictureAlt/>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentTrack;

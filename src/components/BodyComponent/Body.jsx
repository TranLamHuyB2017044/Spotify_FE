import { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";
import styles from "./Body.module.scss";
import { BsFillHeartFill, BsThreeDots } from "react-icons/bs";
import { AiFillPlayCircle, AiFillClockCircle } from "react-icons/ai";
function Body() {
  const [{ token, selectedPlaylist, playListId }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getPlayList = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playListId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        added_at:response.data.tracks.items[0].added_at,
        tracks: response.data.tracks.items.map(({ track }) => ({
          idTrack: track.id,
          nameTrack: track.name,  
          artists: track.artists.map((artist) => {
            artist.name;
          }),
          image: track.album.images[2].url,
          duration_ms: track.duration_ms,
          album: track.album.name,
          context_uri: track.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getPlayList();
  }, [token, dispatch, playListId]);
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <div className="body_container" style={{color: '#fff', opacity: '0.8'}}>
      {selectedPlaylist && (
        <>
          <div className={styles.playlist}>
            <div className={styles.image}>
              <img src={selectedPlaylist.image} alt="selected playlist" />
            </div>
            <div className={styles.details}>
              <span className={styles.type}>Playlist</span>
              <h1 className={styles.title}>{selectedPlaylist.name}</h1>
              <p className={styles.description}>
                {selectedPlaylist.description}
              </p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.header_row}>
              <div className={styles.nav_row}>
                <AiFillPlayCircle className={styles.circle} />
                <BsFillHeartFill className={styles.heart} />
                <BsThreeDots className={styles.threedot} />
              </div>
              <div className={styles.nav_row2}>
                <div className={styles.col}>
                  <span>#</span>
                </div>
                <div className={styles.col}>
                  <span>Title</span>
                </div>
                <div className={styles.col}>
                  <span>Album</span>
                </div>
                <div className={styles.col}>
                  <span>Date added</span>
                </div>
                <div className={styles.col}>
                  <span>
                    <AiFillClockCircle />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.track}>
            {selectedPlaylist.tracks.map(
              (
                {
                  idTrack,
                  nameTrack,
                  artists,
                  image,
                  duration_ms,
                  album,
                },
                index
              ) => {
                return (
                  <div className={styles.row} key={idTrack}>
                    <div className={styles.col}>
                      <span>{index + 1}</span>
                    </div>
                    <div className={styles.col_detail}>
                      <div className={styles.image}>
                        <img src={image} alt="image_track" />
                      </div>
                      <div className={styles.infor}>
                        <span className={styles.nameTrack}>{nameTrack}</span>
                        <span>{artists}</span>
                      </div>
                    </div>
                    <div className={styles.col}>
                      <span>{album}</span>
                    </div>
                    <div className={styles.col}>
                      <span>{selectedPlaylist.added_at}</span>
                    </div>
                    <div className={styles.col}>
                      <span>{msToMinutesAndSeconds(duration_ms)}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;

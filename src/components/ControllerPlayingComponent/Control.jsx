import {BiShuffle} from 'react-icons/bi'
import {FiSkipBack, FiSkipForward} from 'react-icons/fi'
import {SlLoop} from 'react-icons/sl'
import {AiOutlinePauseCircle, AiFillPlayCircle} from 'react-icons/ai'
import styles from './Control.module.scss'
import { useStateProvider } from "../../utils/StateProvider";
import axios from 'axios'
import { reducerCases } from '../../utils/Constants'
function Control() {
    const [{token, playingState}, dispatch] = useStateProvider();
    const changeState = async () =>{
        const state = playingState ? "pause" : "play";
        await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          );
          dispatch({
            type: reducerCases.SET_PLAYER_STATE,
            playingState: !playingState,
          });
    };
    const changeTrack = async(type) =>{
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,{},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
            );
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playingState:true });
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
    }
    return ( 
        <div className ={styles.control_container}>
            <div className={styles.shuffle}>
                <BiShuffle />    
            </div>
            <div className={styles.back} >
                <FiSkipBack onClick={() => changeTrack('previous')}/>
            </div>
            <div className={styles.playPause}>
                {playingState ? <AiFillPlayCircle onClick={changeState}/> : <AiOutlinePauseCircle onClick={changeState}/>}  
            </div>
            <div className={styles.next} >
                <FiSkipForward onClick={() => changeTrack('next')}/>
            </div>
            <div className={styles.loop}>
                <SlLoop/>
            </div>

        </div>
     );
}

export default Control;
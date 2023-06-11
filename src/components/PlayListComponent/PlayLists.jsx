import axios from "axios";
import { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
import styles from './PlayList.module.scss'
function PlayLists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayListsData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlayListsData();
  }, [token, dispatch]);
  return (
    <>
      <ul className={styles.nav_items}>
        {playlists.map(({ name, id }) => {
          return <li className={styles.item} key={id}>{name}</li>;
        })}
      </ul>

    </>
  );
}

export default PlayLists;

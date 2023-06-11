import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    playListId: '37i9dQZF1DX3TPMgP3ojGS',
    selectedPlaylist: null,
    currentlyPlaying: null,
    playingState: false,
}

const reducer = (state, action) =>{
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,
                playlists: action.playlists
            }
        }
        case reducerCases.SET_USER:{
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            }
        }
        case reducerCases.SET_PLAYING:{
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying,
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            return {
                ...state,
                playingState: action.playingState,
            }
        }
        default: 
            return state
    }
}

export default reducer;
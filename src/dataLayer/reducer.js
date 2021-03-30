
export const SETUSER = 'set_user';
export const SETTOKEN = 'set_token';
export const SETPLAYLIST = 'set_playlist'
export const SETDISCOVER = 'set_discover'
export const SETFAVLIST = 'set_favlist'

export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly: null,
    fav_playlist: false
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case SETUSER: 
            return {
                ...state, user: action.user
            }
        case SETTOKEN: 
            return{
                ...state, token: action.token
            }
        case SETPLAYLIST: 
            return {
                ...state, playlist: action.playlist
            }
        case SETDISCOVER:
            return {
                ...state, discover_weekly: action.discover_weekly
            }
        case SETFAVLIST: 
            return {
                ...state, fav_playlist: action.fav_playlist
            }
        default:
            return;
    }
}


export default reducer;
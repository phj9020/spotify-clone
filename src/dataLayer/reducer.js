
export const SETUSER = 'set_user';
export const SETTOKEN = 'set_token';
export const SETPLAYLIST = 'set_playlist'

export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    token: null
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
        default:
            return;
    }
}


export default reducer;
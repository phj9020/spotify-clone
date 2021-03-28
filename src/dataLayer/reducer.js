
export const SETUSER = 'set-user';

export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case SETUSER: 
            return {
                ...state, user: action.user
            }
        default:
            return;
    }
}


export default reducer;
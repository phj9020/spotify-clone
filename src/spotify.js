export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectedUri = "http://localhost:3000";

const SPOTIFY_CLIENTID = "a527aea8556a479d96bbc8818d368cf7";

const authScope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const loginUrl = `${authEndPoint}?client_id=${SPOTIFY_CLIENTID}&redirect_uri=${redirectedUri}&scope=${authScope.join("%20")}&response_type=token&show_dialog=true`;

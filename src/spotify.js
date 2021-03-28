export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "a527aea8556a479d96bbc8818d368cf7";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // http://localhost:3000/#access_token=BQDcE5yrL9vUeewn2QGJx7ubLnVExg2FRFn3emHa7t9viLEShxH26q9TVg8v3l6j0ZQlA6b1L_BYIrlA9avP_41ePU4bwdq9BIF9ZN6QYTV5L7qjaw6elqNTD0-UpVCGYTLkgOhHOWtDa0hQUFsmqnaOw4pVi8owZL6wOLFKh-dluk6n&token_type=Bearer&expires_in=3600
  // find location # and exclude $ with substring(1) and spllit &  will gives you array
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

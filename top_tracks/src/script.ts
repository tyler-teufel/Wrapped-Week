// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

const clientId = "79bedb443d674b4fad1d34658d8f394b";  // Replace with your client id
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    const top_tracks = await fetchTracks(accessToken);
    populateUI(profile);
    populateTracks(top_tracks);
}


async function fetchProfile(code: string): Promise<UserProfile> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

async function fetchTracks(code: string): Promise<TopTracks> {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        
        method: "GET", headers: {Authorization: `Bearer ${code}`} ,
      

    });
    
    return await result.json();
}

function populateUI(profile: UserProfile) {
    document.getElementById("displayName")!.innerText = profile.display_name;
    document.getElementById("avatar")!.setAttribute("src", profile.images[0].url)
    document.getElementById("followers")!.innerText = profile.followers.total.toString();
    document.getElementById("country")!.innerText = profile.country;
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0].url;
}

function populateTracks(top_tracks: TopTracks) {
    document.getElementById("track_name")!.innerText = top_tracks.track_name;
    document.getElementById("artist")!.innerText = top_tracks.artist;
}

export { };

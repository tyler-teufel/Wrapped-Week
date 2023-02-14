# Wrapped-Week

## Description

The Wrapped Week web application will function similarly to the 'Spotify Wrapped' summary released to its users' at the end of each calendar year. 

The main goal for this project is to provide users with weekly recaps of their genre focus / mood each week, providing them with insight into how their music taste changes based on the type week they may of had, or the appeals that seem to vary throughout different points in the year. 

So far, the only elements contained in this repository are the authentication methods, along with a simple example of user profile data requests.

# Spotify Web API Examples

## Contents

- [Authentication examples](/authentication/)
    - [Authorization Code]( /authentication/authorization_code/)
    - [Client Credentials](/authentication/client_credentials)
    - [Implicit Grant](/authentication/implicit_grant/)
    - [login Method](/authentication/login_method/)
- [Get User Profile example](/get_user_profile/)

## Usage

The contained authentication methods contain authentication strategies referenced in the Spotify Developers' documentation, with examples compiled
from two seperate repositories:

-[login Method Reference](https://github.com/JMPerez/passport-spotify)
-[Authorization Code, Client Credentials, Implicit Grant](https://github.com/spotify/web-api-examples)

Base of the code was used from these repositories, with several edits in order to suite a different sort of usage with protected credentials. 

Repositories can also be directly found in the reference section of Spotify's Web API references, under the OAuth2 references for Node.js, [here](https://developer.spotify.com/documentation/web-api/libraries/), and the Web API Tutorial, [here](https://developer.spotify.com/documentation/web-api/quick-start/).

As of 2/14/2023, this repository just contains the OAuth2 flows, and a user profile request. Further developement to come utilizing these methods to create the Wrapped-Week Web application.



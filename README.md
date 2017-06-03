# Angular (4.x) Spotify Player - Tutorial source code

Videos: coming soon (italian only)

![Output Preview](spotify-preview-ani.gif "Output Preview")


## Development server

1. In order to avoid CORS issues, download the [Allow-Control-Allow-Origin:*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en) Chrome Extension

2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

> NOTE: in order to work you must [register your own](https://developer.spotify.com/web-api/authorization-guide/) Spotify Application and replate `client_id` and `client_secret` in `SpotifyAPIService`

```typescript
export class SpotifyAPIService {
  client_id = "[YOUR OWN CLIENT ID]";
  client_secret = "[YOUR OWN SECRET KEY]";
  //...
}
```

## Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

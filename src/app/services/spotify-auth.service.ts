import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyAuthService {
  client_id = "c45325aad4bc420ca34fb1bdfe9a2ab1";
  client_secret = "f752ef01bed04d4b87a459ed56eda73f";

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  private accessToken: any;
  private tokenType: string;

  constructor(private _http: Http) {
    console.log ('AUTH')
    let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';

    this._http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .subscribe(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));

  }

  login() {
    console.log ('AUTH')
    let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';

    this._http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .subscribe(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));

  }
  searchMusic(str: string, type = 'artist,album') {
    this.searchUrl = `https://api.spotify.com/v1/search?q=${str}&type=${type}`;
    return this.makeCall(this.searchUrl);
  }

  getArtist(id: string) {
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this.makeCall(this.artistUrl);
  }

  getAlbums(artistId: string) {
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.makeCall(this.albumsUrl);

  }

  getAlbum(albumId: string) {
    this.albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    return this.makeCall(this.albumUrl);

  }

  private makeCall(url: string) {
    console.log(this.accessToken);
    console.log(this.tokenType);

    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });

    return this._http.get(url, options).map(res => res.json());
  }
}
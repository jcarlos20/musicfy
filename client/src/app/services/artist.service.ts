import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Artist } from '../models/artist';

@Injectable()
export class ArtistService{
	public url: string;
	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	addArtist(token, artist: Artist){
		let params = JSON.stringify(artist);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		return this._http.post(this.url + 'saveArtist', params, {headers: headers}).pipe(map(res => res.json()));
	}

	getArtists(token, page){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url + 'allArtists/' + page, options).pipe(map(res => res.json()));
	}

	getArtist(token, id: string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url + 'artist/' + id, options).pipe(map(res => res.json()));
	}
	editArtist(token, id: string, artist: Artist){
		let params = JSON.stringify(artist);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		return this._http.put(this.url + 'artist/' + id, params, {headers: headers}).pipe(map(res => res.json()));
	}

	deleteArtist(token, id: string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		let options = new RequestOptions({headers: headers});
		return this._http.delete(this.url + 'artist/' + id, options).pipe(map(res => res.json()));
	}

}
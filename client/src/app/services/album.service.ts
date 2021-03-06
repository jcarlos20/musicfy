import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Album } from '../models/album';

@Injectable()
export class AlbumService{
	public url: string;
	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	getAlbum(token, id: string){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url + 'album/'+ id, options).pipe(map(res => res.json()));
	}

	editAlbum(token, id: string, album: Album){
		let params = JSON.stringify(album);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		return this._http.put(this.url + 'updateAlbum/' + id, params, {headers: headers}).pipe(map(res => res.json()));
	}

	addAlbum(token, album: Album){
		let params = JSON.stringify(album);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		return this._http.post(this.url + 'saveAlbum', params, {headers: headers}).pipe(map(res => res.json()));
	}

	getAlbums(token, artistId = null){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		let options = new RequestOptions({headers: headers});
		if (artistId == null) {
			return this._http.get(this.url + 'getAllAlbums', options).pipe(map(res => res.json()));
		}else{
			return this._http.get(this.url + 'getAllAlbums/' + artistId, options).pipe(map(res => res.json()));	
		}
		
	}
}
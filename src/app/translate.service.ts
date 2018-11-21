import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { googleApiKey } from '../environments/environment';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  googleURL: string;

  constructor(private http: HttpClient) { 
    this.googleURL = `https://translation.googleapis.com/language/translate/v2?key=${googleApiKey}`;
  }

  translate(text: string, settings: GoogleParams){
    settings.q = text;
    return this.http.post(this.googleURL, settings);
  }
}


export class GoogleParams{
  q: string;
  source: string = 'en';
  target: string = 'fr';
  readonly format: string = 'text';
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '@app/config/api.url';
import { Profile } from '@app/interfaces/profile.interface';
import { Observable, concatMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private urlprofile = API_URLS.profile;
  private urlcloud = API_URLS.fakeProduct;

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile> {
    return this.http.get<Profile>(this.urlprofile);
  }

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.urlprofile + '/' + id);
  }

  updateProfile(personalInfo: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.urlprofile, personalInfo);
  }

  uploadImage(image: string): Observable<UploadResponse> {
    console.log(image);
    return this.http.get<UploadResponse>(this.urlcloud);
  }

  saveProfile(image: string, personalInfo: Profile): Observable<Profile> {
    return this.uploadImage(image).pipe(
      concatMap(response => {
        personalInfo = { ...personalInfo, avatar: response.images[0] };
        return this.updateProfile(personalInfo);
      })
    );
  }
}

interface UploadResponse {
  images: string[];
}

import { Injectable } from '@angular/core';
// import { Deta } from 'deta';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagesManagementService {
  // deta = Deta('a0xlrrw7_9D1oybUDsVHmYpJtAsvJdTjqXES5P8KH');
  // photos = this.deta.Drive('photos');

  constructor(private http: HttpClient) {}

  addUserAvatar(userId: string, image: File) {
    const formData = new FormData();

    formData.append('profile', image);

    return this.http.post(
      'https://homie-iti.herokuapp.com/users/profileImage/' + userId,
      formData
    );
  }
}

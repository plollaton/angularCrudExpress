import { Injectable } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest/rest.service';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService: RestService) { }

  public getAll(){
    return this.restService.get(`${environment.URL_BACKEND}/user`);
  }

  public getUser(id: string){
    return this.restService.get(`${environment.URL_BACKEND}/user/${id}`);
  }

  public save(user: User){
    if (user.id == -1){
      var x = this.restService.post(`${environment.URL_BACKEND}/user`, user);
      console.log(x)
      return x
    } else {
      return this.restService.put(`${environment.URL_BACKEND}/users`, user);
    }
  }

  public delete(id: string){
    return this.restService.delete(`${environment.URL_BACKEND}/users/${id}`);
  }
}

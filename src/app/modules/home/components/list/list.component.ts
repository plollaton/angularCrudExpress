import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  @Input() public userList: Array<User> = [];

  public openEdit:boolean = false;
  public editing: boolean = false;
  public selectedItem: User = {
    _id: "",
    id: -1,
    name: "",
    email: "",
    phone: "",
    username: "",
    website: ""
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(){
    this.userService.getAll().subscribe((value) => {
      this.userList = value;    
    });
  }

  public onClickEditar(e:string){
    this.userService
      .getUser(e)
      .subscribe((value) => {
        const item = value;
        this.selectedItem = {
          _id: item._id,
          id: item.id,
          name: item.name,
          email: item.email,
          phone: item.phone,
          username: item.username,
          website: item.website
        }
        this.openEdit = true;
        this.editing = true;
      });
  }

  public async onClickSave(){
    await this.userService
      .save(this.selectedItem)
      .subscribe((value) => {
        console.log('d');
        console.log(value)
        this.loadUsers();
      });
    this.editing = false;
    this.openEdit = false;
  }

  public onClickCancel(){
    this.editing = false;
    this.openEdit = false;
  }

  public onClickAdd(){
    this.editing = true;
    this.openEdit = true;
    this.selectedItem = {
      _id: "",
      id: -1,
      name: "",
      email: "",
      phone: "",
      username: "",
      website: ""
    }
  }

  public onClickDelete(e: string){
    //this.userList.splice(e, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public openEdit:boolean = false;
  public editing: boolean = false;
  public selectedItem: User = {
    Id: -1,
    Name: "",
    Email: "",
    Phone: "",
    Username: "",
    Website: ""
  };

  public userList: Array<User> = [
    {
      Id: 1,
      Name: "Leanne Graham",
      Username: "Bret",
      Email: "Sincere@april.biz",
      Phone: "1-770-736-8031 x56442",
      Website: "hildegard.org"
    },
    {
      Id: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv",
      Phone: "010-692-6593 x09125",
      Website: "anastasia.net",
    },
    {
      Id: 3,
      Name: "Clementine Bauch",
      Username: "Samantha",
      Email: "Nathan@yesenia.net",
      Phone: "1-463-123-4447",
      Website: "ramiro.info",
    },
  ];

  /**
   *
   */
  constructor() {
  }

  ngOnInit(): void { }

  public onClickEditar(e:number){
    const item = this.userList[e];

    this.selectedItem = {
      Id: item.Id,
      Name: item.Name,
      Email: item.Email,
      Phone: item.Phone,
      Username: item.Username,
      Website: item.Website
    }
    this.openEdit = true;
  }

  public onClickSave(){
    if (this.selectedItem.Id == -1){
      this.userList.push(this.selectedItem)
    } else {
      this.userList[this.selectedItem.Id - 1] = this.selectedItem;
    }
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
      Id: -1,
      Name: "",
      Email: "",
      Phone: "",
      Username: "",
      Website: ""
    }
  }

  public onClickDelete(e: number){
    this.userList.splice(e, 1);
  }

}

import { ListDataService } from './../services/list-data.service';
import { PostDataService } from './../services/post-data.service';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud-compoenet',
  templateUrl: './crud-compoenet.component.html',
  styleUrls: ['./crud-compoenet.component.css']
})
export class CrudCompoenetComponent implements OnInit {

  private url = "https://jsonplaceholder.typicode.com/posts";

  data: any;
  searchText: any;
  
  listData: any;

  constructor(private services: PostDataService, private dataServices: ListDataService) {
   
   }

   

  ngOnInit(): void {
    this.services.getPosts().subscribe(response => {
      this.data = response;
      this.data.splice(5);
    });

    this.listData = this.dataServices.getData();
  }

  deleteRow(row: any){
    this.services.deletePost(row).subscribe(reponse =>{
      let index = this.data.indexOf(row);
      this.data.splice(index, 1);
    })
  }

  addData(input: HTMLInputElement){
    let item = {title: input.value};
    this.services.createPost(item).subscribe(response =>{
      this.data.splice(0,0,item);
    });
    

    this.dataServices.addData(item.title);
   
  }

  updateTitle(input: HTMLInputElement){
    let item = {title: input.value};
    this.services.updatePost(item).subscribe(reponse => {
      
    });
  }


  // ListData
  updateBrand(input: HTMLInputElement, item: any) {
    let index = this.listData.indexOf(item);
    this.dataServices.updateData(input.value,index);

  }

  deleteBrand(item: any) {
    let index = this.listData.indexOf(item);
    this.dataServices.deleteData(index);
  }
  

}

import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

 
export class HomePage {
	public items:any;
 public todos=[];
  rootPage: any = ListPage;
  newPage = NewpagePage;
  listPage = ListPage;

  constructor(public navCtrl: NavController, public storage:Storage, private todoService:TodoServiceProvider, public http: HttpClient) {
  this.loadData();
  	this.todoService.addTodo("todoList1");
  	this.todoService.addTodo("todoList2");
  	this.todos = this.todoService.getTodos();
  	for(let i = 0; i <= this.todos.length; i++){
        console.log(this.todos[i]);
	} 
  	
  }
  loadData(){
  	let data: Observable<any>;
  	data = this.http.get('https://jsonplaceholder.typicode.com/posts');
  	data.subscribe(result=>{
  		this.items = result;
  	})
  }
  funct() {
    //this.navCtrl.setRoot(ListPage);
    //alert("Hiii");
  }
  itemClick(itemid:number){
  	alert(itemid);
  }
 setData() {
    //this.navCtrl.setRoot(ListPage);
    //alert("Set");
    this.storage.set('name1', 'Max');
     this.storage.set('name2', 'min');
      this.storage.set('name3', 'mom');
  }
 getData() {
    //this.navCtrl.setRoot(ListPage);
    //alert("Get");
    this.storage.get('name1').then((val) => {
    console.log('Your name is', val);
    if(val=="Max")
    	 return this.storage.get('name2')
  }).then((val) => {
    console.log('Your name is', val);
  });
  }

   ionViewDidLoad(){
   		let myObservable = Observable.create(observer =>{
   			observer.next("hello");
   		});

   		myObservable.subscribe((data) =>{
   			console.log(data)
   		});
   }

}

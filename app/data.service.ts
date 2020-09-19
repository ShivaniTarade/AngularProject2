import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:80/tydoc/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpclient:HttpClient) {}
  saveData(data)
  {
    return this.httpclient.post(api + "add.php",data)
  }
  getData()
  {
    return this.httpclient.get(api +'user.php')
  }
  deleteData(id)
  {
    return this.httpclient.delete(api +'delete.php')
  }
}
 



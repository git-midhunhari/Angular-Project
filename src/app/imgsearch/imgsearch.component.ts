import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../services/searchservice.service';
@Component({
  selector: 'app-imgsearch',
  templateUrl: './imgsearch.component.html',
  styleUrls: ['./imgsearch.component.css']
})
export class ImgsearchComponent implements OnInit {
  name:string;
  images:any[];

  //previewImage:any;
  constructor(private searchserviceService:SearchserviceService) {
    this.images=[];
    this.name="";
    this.getImage();
  }

  ngOnInit(): void {
  }
  getImage(){
    var i;
    this.searchserviceService.getImage(this.name).subscribe((data)=>{
      this.images = data['hits'];
      console.log(data['hits']);
      //for(i=0;i<data.hits.length;i++){
      //  this.images.push(data.hits[i].previewURL)
      //}


    })

  }
}

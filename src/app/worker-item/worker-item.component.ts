import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-worker-item',
  templateUrl: './worker-item.component.html',
  styleUrls: ['./worker-item.component.css']
})
export class WorkerItemComponent implements OnInit {
  flightDetail:any = [];
  flightInfo: any = [];
  workers:any= [];
  id:any;

  constructor(private workerService: WorkerService,private actRoute: ActivatedRoute) {}

  ngOnInit() {
    // this get route id of a worker, then remove flight info for that id which was clicked and refresh the flights on the table
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
     if (this.id) {
      this.flightInfo = null;
      setInterval(() => {
        this.getOneWorker(this.id)
      },3000)
      }
    })
  }
  // method to get the id  of a worker
  getOneWorker(id:any):void{
    this.workerService.getId(id).subscribe(data => {

      this.flightDetail = data;

    })
  }
  // method to get flight information of a worker filtered with num of a flight in API
  getFlight(num:any){

      let flight = this.flightDetail.find((flight:any) => flight.num == num)

      this.flightInfo = flight || null;
  }


}

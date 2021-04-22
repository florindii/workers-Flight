import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  selectedWorker?: any;
  workers:any = [];
  constructor(private workerService: WorkerService,private actRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // getting workers from api
    this.workerService.getAll().subscribe(data => {
      this.workers = data;
    // when the component is open the first worker is active with index 0
      this.getfirst(this.workers[0].id);
    });

  }
  // method to navigate to the first worker
  getfirst(id:any){
    this.router.navigate(['worker-list',id]);
  }
  // activate selected worker
  onSelect(worker: any): void {
    this.selectedWorker = worker;
  }

}



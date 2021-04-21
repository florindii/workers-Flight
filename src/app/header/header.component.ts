import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // workers:any = [];
  constructor(private workerService: WorkerService,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.workerService.getAll().subscribe(data => {
    //   this.workers = data;
    // });
  }



}

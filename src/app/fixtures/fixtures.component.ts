import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  constructor(private service:DataService, private datePipe: DatePipe) { }

  fixturesList:any = [];
  fixture:any;

  date:Date;
  formatedDate:any;
  leagueId:any;

  ngOnInit(): void {
    this.refreshFixturesList();
  }

  getFilteredFixtures(){
    var datePipe = new DatePipe('en-US');
    this.formatedDate = datePipe.transform(this.date, 'yyyy-MM-dd');
    var val = {date:this.formatedDate,
                leagueId:this.leagueId}
    this.service.getFixturesFiltered(val).subscribe(data => {
      this.fixturesList = data;
    })
  }

  refreshFixturesList() {
    this.service.getFixturesList().subscribe(data => {
      this.fixturesList = data;
    })
  }

}

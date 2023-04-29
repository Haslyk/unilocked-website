import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isResponsive: boolean = true;

  @Input('project') project : any
  @Input('dark') dark : boolean = false

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  longText = ` Türkiye • İnsan Kaynakları Yöneticisi`;

}

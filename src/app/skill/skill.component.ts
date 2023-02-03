import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface SkillList {
  complang: string;
  datasci: string;
  webdev: string;
  service: string;
}

const ELEMENT_DATA: SkillList[] = [
  {complang: 'C', datasci: 'Python', webdev: 'HTML', service: 'AWS'},
  {complang: 'C++', datasci: 'MySQL', webdev: 'CSS', service: 'DynamoDB'},
  {complang: 'Java', datasci: 'Apache Kafka', webdev: 'JavaScript', service: 'Map Reduce'},
  {complang: 'C#', datasci: 'Doc2Vec', webdev: 'Jquery', service: 'HIVE'},
  {complang: 'Perl', datasci: 'Numpy', webdev: 'BootStrap', service: 'Hadoop'},
  {complang: '', datasci: 'Scipy', webdev: 'LESS', service: 'Amazon EC2'},
  {complang: '', datasci: 'Pandas', webdev: 'AJAX', service: ''},
  {complang: '', datasci: 'Matplotlib', webdev: 'NodeJS', service: ''},
  {complang: '', datasci: 'NLTK', webdev: 'AngularJS', service: ''},
  {complang: '', datasci: 'Scikit-Learn', webdev: 'ReactJS', service: ''},
];

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  displayedColumns!: string[];
  dataSource?: MatTableDataSource<any>;
  // element_data: SkillList[] = [
  //   {complang: 'C', datasci: 'Python', webdev: 'HTML', service: 'AWS'},
  //   {complang: 'C++', datasci: 'MySQL', webdev: 'CSS', service: 'DynamoDB'},
  //   {complang: 'Java', datasci: 'Apache Kafka', webdev: 'JavaScript', service: 'Map Reduce'},
  //   {complang: 'C#', datasci: 'Doc2Vec', webdev: 'Jquery', service: 'HIVE'},
  //   {complang: 'Perl', datasci: 'Numpy', webdev: 'BootStrap', service: 'Hadoop'},
  //   {complang: '', datasci: 'Scipy', webdev: 'LESS', service: 'Amazon EC2'},
  //   {complang: '', datasci: 'Pandas', webdev: 'AJAX', service: ''},
  //   {complang: '', datasci: 'Matplotlib', webdev: 'NodeJS', service: ''},
  //   {complang: '', datasci: 'NLTK', webdev: 'AngularJS', service: ''},
  //   {complang: '', datasci: 'Scikit-Learn', webdev: 'ReactJS', service: ''},
  // ];
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['complang', 'datasci', 'webdev', 'service'];
    // this.dataSource = ELEMENT_DATA;
  }

}

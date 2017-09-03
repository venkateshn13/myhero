import { Component, Injector, OnInit } from '@angular/core';
// import { ReactChildComponentView } from './tree';
import { MyTree } from './mytree';

@Component({
  selector: 'app-sam',
  template: `<div (click)="myClick()" id='v'>I am Sam{{count}}</div>
            <table id='k'></table>`,
  styleUrls: ['../app.component.css']
})
export class SamComponent implements OnInit {
  count = 5;
  MyTrees = undefined;
  constructor(public injector: Injector ) {

}

myClick= () => {
  const c: any = [{ name: 'firstName' },
  { name: 'lastName' }];

  const d: any = [{ id: 10, firstName: 'Angela', lastName: 'Merkel' },
  { id: 20, firstName: 'Vladimir', lastName: 'Putin' }];
  this.MyTrees(c, d);
}

public ngOnInit() {
  // console.log('k');
  this.MyTrees = MyTree.init;
  // ReactChildComponentView.initialize('Hi', 'v', this.injector );
}
}

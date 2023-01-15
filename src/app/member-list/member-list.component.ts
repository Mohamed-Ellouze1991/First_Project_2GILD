import { Component } from '@angular/core';
import {member} from 'src/models/member';
import { GLOBAL } from '../app-config';

import { MemberService } from '../../services/member.service';



@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  constructor(private MS:MemberService){}
  datasource :member[]=this.MS.tab;
  tab:member[]=GLOBAL._DB.members;
  
 
 displayedColumns: string[] = ['id', 'cin', 'name', 'creatdate','cv','type','action'];

 Delete(id:string):void
  {
    console.log('Button was clicked');

this.MS.deleteMemberById(id).then(()=>{this.datasource=this.MS.tab})
//this.datasource=this.MS.tab;
  }

}


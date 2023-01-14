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
  
 
 displayedColumns: string[] = ['id', 'cin', 'name', 'creatdate','cv','type','action'];

}

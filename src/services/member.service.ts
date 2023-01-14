import { Injectable } from '@angular/core';
import {member} from 'src/models/member';
import { GLOBAL } from 'src/app/app-config';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  //creation tableau du service
  tab:member[]=GLOBAL._DB.members;
  saveMember(member:any):Promise<member>
  {
    //return this.httpClient.post<Member>('link',member).toPromise();  // adresse partie backend
    const memberToSave={...member,
      id:Math.ceil(Math.random()*1000).toString(),
      creatdate:new Date().toISOString(),

    }
    //insertion dans le tableau du services
    this.tab=[memberToSave,...this.tab.filter(item=>item.id!=memberToSave.id)]
    return new Promise(resolve => resolve(memberToSave))
  }

  constructor () { }
}

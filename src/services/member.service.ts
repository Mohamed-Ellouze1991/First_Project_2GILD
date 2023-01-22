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
      id:member.id??Math.ceil(Math.random()*1000).toString(),
      creatdate:member.creatdate ?? new Date().toISOString()
    }
    console.log("eeeeeeeeeeeee",memberToSave);
    //insertion dans le tableau du services
    this.tab=[memberToSave,...this.tab.filter(item=>item.id!==memberToSave.id)]
    return new Promise(resolve => resolve(memberToSave))
  }

  constructor () { }

  getMemberById(CurrentItemId : string):Promise<member>
  {
    //this.httpClient.get<member>('link').toPromise(); //adresse partie backend
    return new Promise (resolve=>resolve(
    this.tab.filter(item=>item.id===CurrentItemId)[0] ?? null
    ))
  }

  deleteMemberById(id:string):Promise<void>
  {
    //return this.httpClient.delete<void>('link').toPromise();//adresse backend
    this.tab=this.tab.filter(item=> item.id!=id);
    return new Promise(resolve => resolve())

  }
  getAllMember():Promise<member[]>
    {
      return new Promise(resolve => resolve(this.tab))
    }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MemberService} from '../../services/member.service';




@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private memberService:MemberService, private router:Router,private activatedRoute:ActivatedRoute)
  {

  }
CurrentItemId:any;
form:any;
ngOnInit():void
{
  //1.Récuperer route active
   //2.extraction de id dans la route
  this.CurrentItemId=this.activatedRoute.snapshot.params ["id"];
  console.log(this.CurrentItemId);
 
  //3.si id n'a pas de valeur  
  //4.je suis dans create => appeler initForm
  if (!!this.CurrentItemId) // si exixte et a une valeur (!!)
  {
    //je suis dans edit
    this.memberService.getMemberById(this.CurrentItemId).then((item1)=>{this.initform1(item1)});
  }else 
  {
    //je suis dans create
    this.initform();
  }
  //5.else je suis dans edit => appeler initForm(Member)


  //creer la fonction initform1(item1)
  //creer la service getMemberById(this.CurrentItemId)
}
initform():void
{
  this.form=new FormGroup({
    cin:new FormControl(null, Validators.required),
    name:new FormControl(null, Validators.required),
    cv:new FormControl(null, Validators.required),
    type:new FormControl(null, Validators.required)
  });

}

onsub():void
{
//Récuperation et affichage du formulaire dans la console 
console.log( this.form.value);
//Appeler la fonction du service saveMember(input:form.value)
const ObjectToSubmit=this.form.value;
this.memberService.saveMember(ObjectToSubmit).then(()=>{this.router.navigate(['/members'])}) //
}




}

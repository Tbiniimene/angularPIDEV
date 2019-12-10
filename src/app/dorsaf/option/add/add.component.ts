import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { getHostElement } from '@angular/core/src/render3';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute,private api: RestApiService) { }
  deps = [{id:1,nameDep:"info"},{id:2,nameDep:"twin"}];
  departement: any=null;
  optionForm = new FormGroup({
    label: new FormControl('', Validators.required),
    responsibleName: new FormControl('', Validators.required),
    responsibleEmail: new FormControl('', [Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z]{4}.[a-zA-Z]+"),Validators.required]),
    responsibleTel: new FormControl('', Validators.required),
    
  });

  get label(){
    return this.optionForm.get('label');
  }
  get responsibleName(){
    return this.optionForm.get('responsibleName');

  }

  get responsibleEmail(){
    return this.optionForm.get('responsibleEmail');
    
  }
  get responsibleTel(){
    return this.optionForm.get('responsibleTel');
    
  }




all:any=[]
idDep:any
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    return this.api.getAllDepartment().subscribe((data: {}) => {
      this.all = data;
    })
  }
  
  
   onSubmit(id) {
    
    console.log(id);
    this.api.createOption(this.optionForm.value,id).subscribe();
    this.optionForm.reset();
    this.router.navigate(['option/all']);
  }
  
 
}

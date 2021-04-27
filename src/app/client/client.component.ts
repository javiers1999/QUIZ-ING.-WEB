import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})


export class CLIENTComponent implements OnInit {
  semaforo:FormGroup;
  titulo:any;
  estado:any;

  lista:Array<String>=[];


  constructor(public fb:FormBuilder) {
      this.semaforo=this.fb.group({
        titulo:['',Validators.required],
        estado:['']
      });
   }

  ngOnInit(): void {
    this.titulo=this.semaforo.get("titulo") as FormGroup;
    this.estado=this.semaforo.get("estado") as FormGroup;
  }

  crear(){
   this.lista.push(this.titulo.value + " " +this.estado.value);
    console.log(this.lista);
  }

  Eliminar(){
    this.lista.forEach((item,index)=>{
      if(this.titulo.value==item) this.lista.splice(index,1);
    });
  }
}

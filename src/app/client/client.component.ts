import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class CLIENTComponent implements OnInit {

  editValue:any = "";
  editValueList = "";
  semaforo:FormGroup;
  titulo:any;
  estado:any;
  id:any;
  idN:any = -1;

  lista:Array<String>=[];
  lista2:Array<String>=[];
  lista3:Array<String>=[];

  constructor(public fb:FormBuilder) {
      this.semaforo=this.fb.group({
        titulo:['',Validators.required],
        estado:['',Validators.required],
        i:[''],
        id:[],
      });
   }

  ngOnInit(): void {
    this.titulo=this.semaforo.get("titulo") as FormGroup;
    this.estado=this.semaforo.get("estado") as FormGroup;
    this.id=this.semaforo.get("id") as FormGroup;
  }

  crear(idN:number){ 
    if(idN == -1){
      if(this.estado.value == "Iniciada"){
        this.lista.push(this.titulo.value);
      }else if(this.estado.value == "EnProceso"){
        this.lista2.push(this.titulo.value);
      }else if(this.estado.value == "Terminada"){
        this.lista3.push(this.titulo.value);
      }
    }else{
      this.lista[idN] = this.titulo.value;
    }
    this.semaforo.reset();
  }

  Eliminar(){
    if(this.estado.value == "Iniciada"){
      this.lista.forEach((item,index)=>{
        if(this.titulo.value==item) this.lista.splice(index,1);
      });
    }
  }

  valor(){
    return this.editValue;
  }

  valorLista(){
    return this.editValueList;
  }

  edit(i:any, j:any){
    this.editValue = i;
    this.editValueList = j;
  }

  obtenerT(){
    if (this.lista[this.editValue] == null){
      return "";
    }
    return this.lista[this.editValue];
  }
}

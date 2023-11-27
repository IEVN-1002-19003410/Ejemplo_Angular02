import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

    imageWidth:number=50;
    imageMargin:number=2;
    muestraImg:boolean=true;
    listFilter:string='';
    alumnoTitle!:string;
    dataSource:any={};
  
    showImage():void{
      this.muestraImg=! this.muestraImg;
    }

    alumnosIric:AlumnosUtl[]=[
      {
      matricula:1234,
      nombre:'Pedro',
      aPaterno:'Lopez',
      aMaterno:'Muñoz',
      correo:'pedro@gmail.com',
      }

    ]  
    
    ngOnInit(): void{
      this.dataSource=this.alumnosIric
    }
  

}

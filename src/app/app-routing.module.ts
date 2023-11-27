import  {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AgregarComponent } from "./utl/agregar/agregar.component";
import { AlumnosComponent } from "./utl/alumnos/alumnos.component";

const routes: Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'Agregar', component: AgregarComponent},
    {path:'VerAlumnos',component: AlumnosComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
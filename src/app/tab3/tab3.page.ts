import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tio } from '../../app/models/tio';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  login: Observable<Tio[]> | undefined;
  tio: Tio;
  nombre = '';
  email = '';
  password = '';
  registerForm: FormGroup;
	milista = [];
  constructor(
    //private tioService: TioService, 
    private fb: FormBuilder, 
    public navCtrl: NavController) {
      this.tio = new Tio("", "", "");
    this.registerForm = this.fb.group({ 
        id:0,
        nombre: ['', Validators.required], 
        email: ['', Validators.maxLength(32)],
        password: ['', Validators.required]
    }); 
  }


  openNavDetailsPage(item:any) {
    //this.navCtrl.push(NavigationDetailsPage, { item: item });
    //this.navCtrl.push(MasinfoPage, { item: item });
  }
  
  async onCreate() {
    if(!this.registerForm.valid){
      alert('debe llenar el formulario')
      console.log('debe llenar el formulario')
      return;
    }
    this.tio = new Tio(this.nombre, this.email, this.password);
    /*
    var response = await this.tioService.registrar(this.tio);
    if(response.status==200){
      const data = response.data;
      const usuario = data[0];
      this.store.dispatch(new TaskActions.RegistroUsuario({
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }) )
      this.router.navigate(['/']);
      
    }else{
      console.log('ocurrio un error')
    }
    */
  }
}

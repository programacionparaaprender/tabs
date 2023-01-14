import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector, NgModule } from "@angular/core";
import { Tab3Page } from './tab3.page';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from '../../app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

describe('Tab3Page', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Tab3Page,
      ],
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
      ],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('Debe retornar usuario valido', () => {
    const comp = TestBed.createComponent(Tab3Page);
    const nombre = comp.componentInstance.registerForm.controls['nombre'];
    const email = comp.componentInstance.registerForm.controls['email'];
    const password = comp.componentInstance.registerForm.controls['password'];
    nombre.setValue('ejemplo123');
    email.setValue('ejemplo123@prueba.com.pe');
    password.setValue('123456');
    expect(comp.componentInstance.registerForm.valid).toEqual(true);
    });
});

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ContactoService } from './contacto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef | undefined;
  public correo = {
    email: '',
    nombre: '',
    apellido: '',
    asunto: '',
    mensaje: '',
  };
  public isDisabled = false;

  constructor(
    private contactoService: ContactoService
  ){}

  ngOnInit(): void {}

  sendMail(): void {
    this.isDisabled = true;
    this.contactoService.sendMail(this.correo.email, this.correo.nombre, this.correo.apellido, this.correo.asunto, this.correo.mensaje)
    .subscribe(
      (response) => {
        Swal.fire({
          title: 'Mensaje Enviado!',
          text: 'Tu mensaje fue enviado correctamente, en breve nos comunicaremos con usted.',
          icon: 'success'
        });
        this.isDisabled = false;
        this.closeBtn?.nativeElement.click();
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: `${error.error.message}`,
          icon: 'error'
        });
      },
    );
  }

  clear(): void {
    this.correo = {
      email: '',
      nombre: '',
      apellido: '',
      asunto: '',
      mensaje: '',
    };
  }
}

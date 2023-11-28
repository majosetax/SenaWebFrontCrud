
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TareaModel } from '@models/tarea.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {

  @Input() tarea: TareaModel;
  @Output() store: EventEmitter<TareaModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formTarea: UntypedFormGroup;
  constructor
  (
    private formBuilder: UntypedFormBuilder,
    
    ){
      this.tarea = {
        id: null,
        descripcion: '',
        fecha: new Date()
      };
      this.buildForm();
    }
  
  
    get descripcion() {
      return this.formTarea.get('descripcion');
    }
  
    get fecha() {
      return this.formTarea.get('fecha');
    }
  
    setTarea() {
      if (this.tarea) {
        this.formTarea.patchValue({
          descripcion: this.tarea.descripcion,
          fecha: this.tarea.fecha
        })
      }
    }
  
    private buildForm() {
      this.formTarea = this.formBuilder.group({
        id: [0],
        name: ['', [Validators.required]],
        idCompany: ['', [Validators.required]],
      });
  
      this.formTarea.valueChanges
        .pipe(
          debounceTime(350),
        )
        .subscribe(data => {
        });
    }
  
    guardarTarea() {
      this.store.emit(this.getRol());
    }
  
    closeModal() {
      this.cancel.emit();
    }
  
    private getControl(name: string) {
      return this.formTarea.controls[name];
    }
  
    getRol(): TareaModel {
      return {
        id: this.tarea?.id,
        descripcion: this.getControl('descripcion').value,
        fecha: this.getControl('fecha').value
      }
    }
}

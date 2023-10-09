import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'demo-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title: string = '';
  message: string = '';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { 
      this.title = this.data.title ? this.data.title : 'Titulo';
      this.message = this.data.message ? this.data.message : 'Mensaje'; 
    }

  ngOnInit(): void {
  }

  OnClickAceptar() {
    this.dialogRef.close({ ok: true });
  }

}

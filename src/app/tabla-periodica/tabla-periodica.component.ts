import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../shared/models/periodic-element.interface';
import { ElementType } from '../shared/models/periodic-element-type.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'demo-tabla-periodica',
  templateUrl: './tabla-periodica.component.html',
  styleUrls: ['./tabla-periodica.component.scss']
})
export class TablaPeriodicaComponent implements OnInit, AfterViewInit {
  initElements: PeriodicElement[] = [
    { selected: false, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', type: ElementType.Gas },
    { selected: false, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', type: ElementType.Gas },
    { selected: false, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', type: ElementType.Metal },
    { selected: false, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', type: ElementType.Metal },
    { selected: false, position: 5, name: 'Boron', weight: 10.811, symbol: 'B', type: ElementType.NonMetal },
    { selected: false, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', type: ElementType.NonMetal },
    { selected: false, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', type: ElementType.Gas },
    { selected: false, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', type: ElementType.Gas },
    { selected: false, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', type: ElementType.Gas },
    { selected: false, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', type: ElementType.Gas },
    { selected: false, position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', type: ElementType.Metal },
    { selected: false, position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', type: ElementType.Metal },
    { selected: false, position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', type: ElementType.Metal },
    { selected: false, position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', type: ElementType.NonMetal },
    { selected: false, position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', type: ElementType.NonMetal },
    { selected: false, position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', type: ElementType.NonMetal },
    { selected: false, position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', type: ElementType.Gas },
    { selected: false, position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', type: ElementType.Gas },
    { selected: false, position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', type: ElementType.Metal },
    { selected: false, position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', type: ElementType.Metal },
  ];

  lstElements: PeriodicElement[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [];
  
  dataSource = new MatTableDataSource<PeriodicElement>(this.lstElements);

  selectedRow: PeriodicElement | null;
  rowSeleccionado: boolean = false;

  constructor(public dialog: MatDialog) {
    const strElementos: string = localStorage.getItem('elementos');
    if (!strElementos)
      localStorage.setItem('elementos', JSON.stringify(this.initElements));
  }

  ngOnInit(): void {
    this.displayedColumns = [ 'selected', 'buttons', 'position', 'name', 'weight', 'symbol' ];
    const strElementos: string = localStorage.getItem('elementos');
    this.lstElements = strElementos ? JSON.parse(strElementos) : [];
    this.refreshDatasource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onClickRow(row: PeriodicElement) {
    console.log(row);
    if(this.selectedRow !== row)
      this.rowSeleccionado = false;

    this.rowSeleccionado = !this.rowSeleccionado;
    this.selectedRow = this.rowSeleccionado ? row : null;
  }

  onChangeSelectAll(checked: boolean) {
    this.lstElements.forEach(item => item.selected = checked);
    this.refreshDatasource();
  }

  refreshDatasource() {
    this.dataSource.data = this.lstElements;
  }

  isAllSelected() {
    const selected = this.lstElements.filter(i => i.selected);
    return selected.length === this.lstElements.length;
  }

  onChangeSeleccionado(checked: boolean, row: PeriodicElement) {
    row.selected = checked;
    const index = this.lstElements.indexOf(row);
    this.lstElements[index] = row;
  }

  onDelete(row: PeriodicElement) {
    this.dialog.open(ConfirmDialogComponent, {
      data : {
        title: 'Confirmar',
        message: `¿Desea eliminar el Elemento [${row.name}]?`
      },
      width: '30%',
      disableClose: true
    }).afterClosed().subscribe((result: any) => {
      // console.log(result);
      if(result?.ok)
        this.delete(row);
      else 
        return;
    })
  }

  delete(row: PeriodicElement) {
    const index = this.lstElements.indexOf(row);
    if(index >= 0)
      this.lstElements.splice(index, 1);

    localStorage.setItem('elementos', JSON.stringify(this.lstElements));

    this.refreshDatasource();
  }

}

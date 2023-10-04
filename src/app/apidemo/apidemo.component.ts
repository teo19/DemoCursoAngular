import { Component, OnInit } from '@angular/core';
import { ApidemoService } from '../apidemo.service';

@Component({
  selector: 'demo-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.scss']
})
export class ApidemoComponent implements OnInit {

  img: string;
  statusImg: number;

  constructor(private apiDemoService: ApidemoService) { }

  ngOnInit(): void {
    // this.apiDemoService.validaUsuario();
  }

  getCatStatus() {
    if(!this.statusImg || this.statusImg <= 0)
      return;
    
    this.apiDemoService.getCatStatus(this.statusImg).subscribe(res => {
      const reader = new FileReader();
      reader.readAsDataURL(res);
      reader.onloadend = () => {
        this.img = reader.result.toString();
      };
    });
  }
}

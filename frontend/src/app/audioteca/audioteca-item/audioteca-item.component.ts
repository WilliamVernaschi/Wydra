import { Component, Input, OnInit } from '@angular/core';
import { AudiotecaItem } from 'src/app/models/AudiotecaItem';
import { AudiotecaService } from 'src/app/services/audioteca.service';
import { DominantColorService } from 'src/app/services/dominant-color.service';

@Component({
  selector: 'app-audioteca-item',
  templateUrl: './audioteca-item.component.html',
  styleUrls: ['./audioteca-item.component.scss'],
})
export class AudiotecaItemComponent implements OnInit  {

  constructor(private audiotecaService : AudiotecaService, private dcService : DominantColorService) { }

  dominante: string = "#ffffff";

  @Input({required: true}) audiotecaItem! : AudiotecaItem;

  async ngOnInit() {
    
    this.dominante = await this.dcService.corDominante(this.audiotecaItem.albumCoverPath);
  }

    


}

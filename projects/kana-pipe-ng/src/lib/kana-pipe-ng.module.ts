import { NgModule } from '@angular/core';
import { RomajiToKanaPipe } from './romaji-to-kana.pipe';


@NgModule({
  declarations: [RomajiToKanaPipe],
  imports: [
  ],
  exports: [RomajiToKanaPipe]
})
export class KanaPipeNgModule { }

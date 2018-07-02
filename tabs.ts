import { Component } from '@angular/core';
import { NewpagePage } from '../newpage/newpage';
import { ListPage } from '../list/list';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',

})
export class TabsPage {
	
  newPage = NewpagePage;
  listPage = ListPage;
  constructor() {
     }

}

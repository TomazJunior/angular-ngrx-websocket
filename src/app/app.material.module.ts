import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [ BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatToolbarModule ],
  exports: [ BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatToolbarModule ],
})

export class MaterialModule { }

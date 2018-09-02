import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
@NgModule({
  imports: [ ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule ],
  exports: [ ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule ],
})

export class MaterialModule { }

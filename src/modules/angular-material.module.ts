import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule
    ],
    exports: [
        MatTabsModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule
    ]
})

export class AngularMaterialModule { }

import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatAutocompleteModule
    ],
    exports: [
        MatTabsModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatAutocompleteModule
    ]
})

export class AngularMaterialModule { }

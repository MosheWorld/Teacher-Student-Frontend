import { NgModule } from '@angular/core';
import { TeachesAtPipe } from './teaches-at/teaches-at';
import { TeachesInstitutionsPipe } from './teaches-institutions/teaches-institutions';
@NgModule({
	declarations: [TeachesAtPipe,
    TeachesInstitutionsPipe],
	imports: [],
	exports: [TeachesAtPipe,
    TeachesInstitutionsPipe]
})
export class PipesModule {}

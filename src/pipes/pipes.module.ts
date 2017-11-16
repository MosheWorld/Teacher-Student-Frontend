import { NgModule } from '@angular/core';
import { TeachesSubjectsPipe } from './teaches-subjects/teaches-subjects';

//import { GenderPipe } from './gender/gender';
// import { TeachesAtPipe } from './teaches-at/teaches-at';
// import { TeachesInstitutionsPipe } from './teaches-institutions/teaches-institutions';

@NgModule({
	declarations: [TeachesSubjectsPipe
		//GenderPipe
		//TeachesAtPipe,
		//TeachesInstitutionsPipe
	],
	imports: [],
	exports: [TeachesSubjectsPipe
		//GenderPipe
		//TeachesAtPipe,
		//TeachesInstitutionsPipe
	]
})
export class PipesModule { }

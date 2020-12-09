import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './login.service';



@NgModule({
    imports: [ HttpClientModule ],
    providers: [ LoginService ]
})
export class CoreModule {}

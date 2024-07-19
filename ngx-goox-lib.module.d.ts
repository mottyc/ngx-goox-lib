/// <reference path="ngx-goox-lib.module.ngtypecheck.d.ts" />
import { ModuleWithProviders } from '@angular/core';
import { GooxConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export declare class NgxGooxLibModule {
    static forRoot(config: GooxConfig): ModuleWithProviders<NgxGooxLibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGooxLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxGooxLibModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxGooxLibModule>;
}

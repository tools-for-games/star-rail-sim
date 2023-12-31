import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { EquipmentService } from '@shared/services/equipment.service';

export const appConfig: ApplicationConfig = {
  providers: [
    CharacterBuildService,
    EquipmentService,
    provideRouter(routes),
    provideAnimations(),
    provideNzI18n(en_US)
  ]
};

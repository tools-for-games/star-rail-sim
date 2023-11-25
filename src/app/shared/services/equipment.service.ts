import { Injectable } from '@angular/core';
import { RelicInfo } from '@shared/core/relic-info';
import { PLANETARY_ORNAMENTS, RELICS } from '@shared/core/constants/relics';
import { LightConeInfo } from '@shared/core/light-cone-info';
import { LIGHT_CONES } from '@shared/core/constants/lightcone';

@Injectable()
export class EquipmentService {
    getRelics(): RelicInfo[] {
        return RELICS;
    }

    getPlanetaryOrnaments(): RelicInfo[] {
        return PLANETARY_ORNAMENTS;
    }

    getLightCones(): LightConeInfo[] {
        return LIGHT_CONES;
    }
}

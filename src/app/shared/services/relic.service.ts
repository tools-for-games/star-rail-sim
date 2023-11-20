import { Injectable } from '@angular/core';
import { RelicInfo } from '@shared/core/relic-info';
import { ALL_PLANETARY_ORNAMENTS, ALL_RELICS } from '@shared/core/constants';

@Injectable({
    providedIn: 'root',
})
export class RelicService {
    getRelics(): RelicInfo[] {
        return ALL_RELICS;
    }

    getPlanetaryOrnaments(): RelicInfo[] {
        return ALL_PLANETARY_ORNAMENTS;
    }
}

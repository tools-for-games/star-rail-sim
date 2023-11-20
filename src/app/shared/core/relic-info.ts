export enum RelicType {
    PlanetaryOrnamentSet = 'PlanetaryOrnamentSet',
    RelicSet = 'RelicSet'
}

export interface RelicInfo {
    name: string;
    type: RelicType;
    effect: string[];
    icon: string;
}
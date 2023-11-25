export enum RelicType {
    PlanetaryOrnamentSet = 'PlanetaryOrnamentSet',
    RelicSet = 'RelicSet'
}

export interface RelicInfo {
    id: string,
    name: string;
    type: RelicType;
    effect: string[];
    icon: string;
}
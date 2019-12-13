import { INavData } from '@coreui/angular';

export enum Loaders {
    Navigation
}

export interface State {
    isProduction: boolean;
    navigation: INavData[];
    loaders: { [id in Loaders]: boolean };
    error: any;
    errorStack: any[];
}

export const initialState: State = {
    isProduction: false,
    navigation: [],
    loaders: {
        [Loaders.Navigation]: false
    },
    error: null,
    errorStack: []
};

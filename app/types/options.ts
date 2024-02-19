export enum OptionsAction {
    Buy = 'buy',
    Sell = 'sell'
}

export enum OptionsActionType {
    Call = 'call',
    Put = 'put'
}

export interface OptionsTransaction {
    action: OptionsAction;
    type: OptionsActionType;
}
export enum Network {
    Stellar = 'Stellar'
}

export interface Wallet {
    Network(): string;
}
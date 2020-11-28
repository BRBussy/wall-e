import {Wallet, Network} from 'wall-e/Wallet';

export default class StellarWallet implements Wallet {
    Network() {
        return Network.Stellar
    }
}
import {Wallet, Network} from 'wallE/Wallet';

export default class StellarWallet implements Wallet {
    Network() {
        return Network.Stellar
    }
}
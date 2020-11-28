import {Wallet} from 'wallE/Wallet';

export default class Core {
    private wallets: Wallet[] = [];

    constructor(core?: Core) {
        if (!core) {
            return;
        }
    }
}
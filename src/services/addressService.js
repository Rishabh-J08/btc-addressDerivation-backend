const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');
const BIP32Factory = require('bip32').BIP32Factory;

const bip32 = BIP32Factory(ecc);

function deriveAddresses(xpub, derivationPath, numberOfAddresses, xpubType) {
    const node = bip32.fromBase58(xpub);
    const addresses = [];

    let paymentFunction;
    if (xpubType === 'p2pkh') {
        paymentFunction = bitcoin.payments.p2pkh;
    } else if (xpubType === 'p2wpkh') {
        paymentFunction = bitcoin.payments.p2wpkh; 
    } else if (xpubType === 'p2sh-p2wpkh') {
        paymentFunction = (params) => bitcoin.payments.p2sh({
            redeem: bitcoin.payments.p2wpkh(params)
        }); 
    } else {
        throw new Error('Unsupported xpub type');
    }

    for (let i = 0; i < numberOfAddresses; i++) {
        const fullPath = `${derivationPath}/${i}`;
        const child = node.derivePath(fullPath);

        const { address } = paymentFunction({ pubkey: child.publicKey });
        addresses.push({ index: i, address, path: fullPath });
    }

    return addresses;
}

module.exports = { deriveAddresses };

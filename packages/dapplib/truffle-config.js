require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember social give argue sure typical'; 
let testAccounts = [
"0x1b1a18c399d02f4a4b9ebcd99143726bf0203020367c3f7241a7db473e4834fd",
"0x6edabb30de08795be50a89c3f055e54689ad62704fa7b7fa17e4230400814f07",
"0x18e71b7fd07930fb36dbaaa4e0b171f5c67856c6d722145af1f212da31914f3a",
"0x217ecabaee2d9c37fce5d20eb2666f80e5fb3e323664d75bf1a622e3ecbbcc9f",
"0x81ea80859835dc49817f135ffca984cc0ecb4ce29118395bc92a8d87d0e46fb7",
"0x5f940f81af3d4697d2cdbffa2b4a1ed5b4262bc3119b846c4c7a82d16927953b",
"0xefc20700fa41649b8d19d4268ed8c4d2e174ab3540c0d77a85a5691c486177fe",
"0x9f3df3384b031a0f23e1be52d0ed36e8ae364a5ecec5274195fd78a4624ed77b",
"0x64c9eb87c206970e8dc76b134de2066dd7bb064e4b971ae5ae4aae7d650fd07f",
"0x25c274731ca33a0f398977969b99115af69dadf2ee31d33e5ff1777233375245"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


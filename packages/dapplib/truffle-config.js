require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind huge hockey clinic flush sketch'; 
let testAccounts = [
"0x6df6b7e24f3a09947fddb53a1a2b59b493d2492ed34d239f3b792fc186666611",
"0x3db35d0fdee9e463751d0adec294c9e72101053c9157bccb81d0d12e9771a690",
"0x04aafa79f5aa975d33cd22be26ada2c74230e24bfdca1b0383cec6396b3239c8",
"0xc2fbeaefbe310888bed178a9779d07db5aeed799eb1fc9dfdfe1bfd5d17ca39a",
"0x2771d6844d9b8ae9763faf74e6010b3b4ec02012e91a646853ace051f260ccde",
"0x5d359d5c7879b8ffd431585fd227c76203d5268b08ca9aed39d2bb3e126564bf",
"0xca6e64825ab0b4365ba75439138118fe596c4be1d30d7eeff22f2e5cc25d2561",
"0x1e64731fc7df6854b40c6eb654a5d73651e188dda955c2a2b608ec840e6c51c5",
"0x8abe975fc7f91b200fb898ea0240884293fedf2cd31e80bcc0eb3ae75c0bdbfd",
"0x61b34dfaac20d621e2e5764c9c7f6754e82fb72986fc03616aed7d1f23f1439c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

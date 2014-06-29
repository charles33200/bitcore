var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x3F,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000001328CA4BABAA49F1DA4AD93486DC3CAC63B2CEEC532CBA19AD6FC475DC4'),
    merkle_root: hex('7FFE639EA1B20943A0AFB6DA51AEC7AD20167CF98B480C230F583CA6C8FAD74F'),
    height: 0,
    nonce: 281729,
    version: 2,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1398645614,
    bits: 504365055,
  },
  dnsSeeds: [],
  defaultClientPort: 19717
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [],
  defaultClientPort: 18333
};

import { ChainId } from './chains'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xdad44c139a476c7a17fc8141e6db680e9abc9f56fe249a105094c44382c2fd',
  [ChainId.GOERLI]: '0x262744f8cea943dadc8823c318eaf24d0110dee2ee8026298f49a3bc58ed74a'
}

export const PAIR_CLASS_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2b39bc3f4c1fd5bef8b7d21504c44e0da59cf27b350551b13d913da52e40d3b',
  [ChainId.GOERLI]: '0x2b39bc3f4c1fd5bef8b7d21504c44e0da59cf27b350551b13d913da52e40d3b'
}

export const PAIR_PROXY_CLASS_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7b5cd6a6949cc1730f89d795f2442f6ab431ea6c9a5be00685d50f97433c5eb',
  [ChainId.GOERLI]: '0x7b5cd6a6949cc1730f89d795f2442f6ab431ea6c9a5be00685d50f97433c5eb'
}

export const FEE_TO_SETTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410',
  [ChainId.GOERLI]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410'
}

import { getAddress } from '@ethersproject/address'
import { validateChecksumAddress } from 'starknet'

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export function validateAndParseAddress(address: string): string {
  try {
    return getAddress(address)
  } catch (error) {
    throw new Error(`${address} is not a valid address.`)
  }
}

/**
 * Checks if an address is valid by checking 0x prefix, length === 42 and hex encoding.
 * @param address the unchecksummed hex address
 */
export function checkValidAddress(address: string): string {
  if (validateChecksumAddress(address)) {
    return address
  }

  throw new Error(`${address} is not a valid address.`)
}

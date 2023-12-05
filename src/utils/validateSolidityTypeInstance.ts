import invariant from 'tiny-invariant'
import JSBI from 'jsbi'

import { ZERO, SolidityType, SOLIDITY_TYPE_MAXIMA } from '../constants'

export function validateSolidityTypeInstance(value: JSBI, solidityType: SolidityType): void {
  invariant(JSBI.greaterThanOrEqual(value, ZERO), `${value} is not a ${solidityType}.`)
  invariant(JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]), `${value} is not a ${solidityType}.`)
}

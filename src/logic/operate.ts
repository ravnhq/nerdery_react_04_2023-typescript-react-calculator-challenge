import Big from 'big.js'

export default function operate(
  numberOne: string | null,
  numberTwo: string | null,
  operation: string | null,
) {
  const one = Big(numberOne ?? '')
  const two = Big(
    numberTwo ?? (operation === '÷' || operation === 'x' ? '1' : '0'),
  )
  if (operation === '+') {
    return one.plus(two).toString()
  }
  if (operation === '-') {
    return one.minus(two).toString()
  }
  if (operation === 'x') {
    return one.times(two).toString()
  }
  if (operation === '÷') {
    if (two === Big('0')) {
      alert('Divide by 0 error')
      return '0'
    } else {
      return one.div(two).toString()
    }
  }
  throw Error(`Unknown operation '${operation ?? ''}'`)
}

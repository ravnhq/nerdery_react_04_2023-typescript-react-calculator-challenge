declare module 'react-dom'

type Operation = {
  total?: string | null | undefined
  next?: string | null | undefined
  operation?: string | null
}

type CalculatorDisplayProps = {
  value: string
}

type ButtonProps = {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: (name: string) => void
}

type ButtonPanelProps = {
  clickHandler: (buttonName: string) => void
}

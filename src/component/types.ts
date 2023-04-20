export interface AppState {
  total: string | null
  next: string | null
  operation: string | null
}

export type PartialAppState = {
  total?: string
  next?: string
  operation?: string
}

export interface DisplayProps {
  value: string
}

export interface clickHandlerFunction {
  (buttonName: string): void
}

export interface ButtonPanelProps {
  clickHandler: clickHandlerFunction
}

export interface ButtonProps {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: clickHandlerFunction
}

export interface AppState {
  total: string | null
  next: string | null
  operation: string | null
}

export type PartialAppState = Partial<AppState>

export interface DisplayProps {
  value: string
}

export interface ClickHandlerFunction {
  (buttonName: string): void
}

export interface ButtonPanelProps {
  clickHandler: ClickHandlerFunction
}

export interface ButtonProps {
  name: string
  orange?: boolean
  wide?: boolean
  clickHandler: ClickHandlerFunction
}

type ElementIds = Partial<{
  root: string
  item(value: string): string
  content(value: string): string
  trigger(value: string): string
}>

export type Props = {
  /**
   * The unique identifier of the machine.
   */
  id: string
  /**
   * A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron.
   */
  getRootNode?: () => ShadowRoot | Document | Node
  /**
   * The ids of the elements in the accordion. Useful for composition.
   */
  ids?: ElementIds
  /**
   * Whether multple accordion items can be open at the same time.
   * @default false
   */
  multiple?: boolean
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean
  /**
   * The `id` of the accordion item that is currently being opened.
   */
  value?: string[]
  /**
   * Whether the accordion items are disabled
   */
  disabled?: boolean
  /**
   * The document's text/writing direction.
   * @default "ltr"
   */
  dir?: 'ltr' | 'rtl'
}

export type ValueChangeDetails = {
  value: string[]
}

export type FocusChangeDetails = {
  value: string | null
}

export type Events = {
  onValueChange: [details: ValueChangeDetails]
  onFocusChange: [details: FocusChangeDetails]
}

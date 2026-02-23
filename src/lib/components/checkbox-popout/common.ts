import { type CheckboxGroupProps } from '../checkbox/common'
import { defaultConfig } from '../config'
import { type TransitionHookEmits } from '../popup/common'
import { type FormPopoutProps } from '../../use/useFormPopout'

export interface CheckboxPopoutProps
  extends FormPopoutProps,
    CheckboxGroupProps {
  searchable?: boolean
  filterPlaceholder?: string
  showCheckAll?: boolean
  iconPosition?: 'left' | 'right'
}

export const defaultCheckboxPopoutProps = () => ({
  ...defaultConfig.checkboxPopout,
  options: () => [],
})

export interface CheckboxPopoutSlots {
  default?(props: Record<string, never>): any
}

export interface CheckboxPopoutEmits extends TransitionHookEmits {
  (e: 'update:visible', visible: boolean): void
  (e: 'update:model-value', value: any): void
  (e: 'change', value: any): void
  (e: 'confirm'): void
}

export interface CheckboxPopoutExpose {}

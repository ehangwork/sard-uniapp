import { defaultConfig } from '../config'
import {
  defaultSelectProps,
  type SelectSlots,
  type SelectProps,
} from '../select/common'
import { type TransitionHookEmits } from '../popup/common'
import { type FormPopoutProps } from '../../use/useFormPopout'

export interface SelectPopoutProps extends FormPopoutProps, SelectProps {}

export const defaultSelectPopoutProps = () => ({
  ...defaultSelectProps(),
  ...defaultConfig.selectPopout,
})

export interface SelectPopoutSlots extends SelectSlots {}

export interface SelectPopoutEmits extends TransitionHookEmits {
  (e: 'update:visible', visible: boolean): void
  (e: 'update:model-value', value: any): void
  (e: 'change', value: any): void
  (e: 'confirm'): void
}

export interface SelectPopoutExpose {}

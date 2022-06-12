import {
  useFormikContext
} from 'formik';

import {SubmitButtonType} from './SubmitButton.type'

function TextField(props: SubmitButtonType) {
  const { label, ...rest } = props
  const { isSubmitting } = useFormikContext();
  return (
    <button type="submit" {...rest} disabled={isSubmitting}>{label}</button>
  )
}

export default TextField
import React from 'react';
import {
  Field,
  ErrorMessage
} from 'formik';

import {TextFieldType} from './TextField.type'

function TextField(props: TextFieldType) {
  const { name, label, placeholder, type, ...rest } = props
  return (
    <div className="mb-6">
      {label && <div className="md:w-1/3">
              <label htmlFor={name} className="inline-block text-gray-700 text-sm font-bold mt-3">{label}</label></div>}
      <div>
        <Field
          className="form-control inline-block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || ""} 
          {...rest}
        />
        <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
      </div>
    </div>
  )
}

export default TextField
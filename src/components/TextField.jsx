import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form__textfield">
      <label  className="form__label" htmlFor={field.name}>{label}</label>
      <div className="form__label__wrapper">
        <input
            className={`form__input ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off"
          />
          <ErrorMessage component="div" name={field.name} className="form__error" />
      </div>
    </div>
  )
}
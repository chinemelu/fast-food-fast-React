import React from 'react';
import propTypes from 'prop-types';

const TextFieldGroup = ({
  field,
  value,
  error,
  type,
  className,
  onChange,
  onBlur,
  labelValue,
  labelClass,
  labelFor,
  id,
  inputContainerClass,
  placeholder,
  onInput,
  feedbackClass,
  disabled
}) => {
  let errorClass;
  if (error) errorClass = feedbackClass;
  else errorClass = null;
  return (
    <div className={inputContainerClass}>
      <input
        type={type}
        name={field}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onInput={onInput}
        disabled={disabled}
      />
      <label
        className={labelClass}
        htmlFor={labelFor}
      >
        {labelValue}
      </label>
      <p
        className={errorClass}
      >
        {error}
      </p>
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: propTypes.string.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
  error: propTypes.string,
  labelClass: propTypes.string,
  labelValue: propTypes.string.isRequired,
  type: propTypes.string,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  onBlur: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text',
  error: '',
  id: null,
  onBlur: null,
  placeholder: '',
  className: '',
  disabled: null
};

export default TextFieldGroup;

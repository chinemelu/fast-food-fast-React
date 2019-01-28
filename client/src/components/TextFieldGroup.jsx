import React from 'react';
import propTypes from 'prop-types';

const TextFieldGroup = ({
  field,
  value,
  error,
  errorId,
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
  errorFeedbackClass,
  validFeedbackClass,
}) => {
  let checkValidity;
  let feedbackClass;
  if (error) feedbackClass = `${errorFeedbackClass} invalid-feedback`;
  else feedbackClass = `${validFeedbackClass}  valid-feedback`;
  if (error) checkValidity = 'is-invalid';
  else if (value && !error) checkValidity = 'is-valid';
  return (
    <div className={inputContainerClass}>
      <input
        type={type}
        type={type}
        name={field}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label
        className={labelClass}
        for={labelFor}>
        {labelValue}
      </label>
      <p
        className={feedbackClass}
        id={errorId}
      ></p>
    </div>
  )
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
  onInput: propTypes.func,
  id: propTypes.string,
  onBlur: propTypes.func,
  placeholder: propTypes.string,
  errorFeedbackClass: propTypes.string,
  validFeedbackClass: propTypes.string,
  className: propTypes.string,
  customFormDivClass: propTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text',
  error: '',
  id: null,
  errorFeedbackClass: null,
  validFeedbackClass: null,
  onInput: null,
  onBlur: null,
  placeholder: '',
  className: '',
};

export default TextFieldGroup;

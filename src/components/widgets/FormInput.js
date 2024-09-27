import React from "react";
import PropTypes from "prop-types";
import "../../css/forminput.css";

const FormInput = ({
  title,
  id,
  value,
  name,
  placeholder,
  type,
  invalid,
  disabled,
  required,
  InvalidText,
  onChange,
  className,
  icon,
  pattern,
}) => {
  const inputClasses = `form_input`;

  return (
    <div className="form_input_container">
      {title && <label className="form_input_label">{title}</label>}
      <input
        className={inputClasses}
        id={id}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        pattern={pattern}
      />
    </div>
  );
};

FormInput.propTypes = {
  title: PropTypes.string,
  InvalidText: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  pattern: PropTypes.string,
  icon: PropTypes.element,
};

export default FormInput;

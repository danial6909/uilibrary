// src/components/Select/Select.jsx
import React from "react";
import "./Select.css";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  ...props
}) => {
  return (
    <div className="select-container">
      <select
        className="custom-select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      >
        {!value && ( // اگر هیچ مقداری انتخاب نشده باشد، placeholder را نمایش بده
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {disabled && <div className="select-overlay"></div>}{" "}
      {/* برای حالت disabled */}
    </div>
  );
};

export default Select;

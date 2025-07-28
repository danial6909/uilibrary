// src/components/Button/Button.jsx
import React from "react";
import "./Button.css"; // استایل‌های دکمه رو ایمپورت می‌کنیم

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className, // 👈 کلاس نیم رو از props استخراج کن
  ...props // بقیه props ها رو اینجا می‌ذاریم
}) => {
  // 👈 اینجاست که ترکیب کلاس‌ها اتفاق میفته
  // کلاس‌های پیش‌فرض رو با classNameی که از بیرون میاد ترکیب می‌کنیم
  const allClassNames = `button button-${variant} button-${size} ${className || ""}`;

  return (
    <button
      className={allClassNames} // 👈 حالا تمام کلاس‌ها رو به تگ button اعمال کن
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

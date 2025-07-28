// src/components/Button/Button.stories.jsx
import React from "react";
import Button from "./Button"; // کامپوننت دکمه را ایمپورت می‌کنیم

// تنظیمات اصلی برای Storybook
export default {
  title: "Components/Button", // مسیری که در Storybook نمایش داده می‌شود (مثل Components/Button)
  component: Button, // کامپوننت اصلی
  parameters: {
    layout: "centered", // کامپوننت را در مرکز فریم Storybook نمایش می‌دهد
  },
  tags: ["autodocs"], // Storybook می‌تواند داکیومنت اولیه را به صورت خودکار بسازد
  argTypes: {
    // تعریف propsهای کامپوننت برای کنترل‌های تعاملی در Storybook UI
    children: {
      control: "text", // نوع ورودی برای محتوای دکمه
      description: "The content displayed inside the button.",
    },
    onClick: {
      action: "clicked", // برای ثبت رویداد کلیک در پنل Actions
      description: "Callback function triggered when the button is clicked.",
    },
    variant: {
      control: { type: "select" }, // یک dropdown برای انتخاب نوع دکمه
      options: ["primary", "secondary", "outline", "text"],
      description: "Visual style of the button.",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" }, // یک dropdown برای انتخاب اندازه دکمه
      options: ["small", "medium", "large"],
      description: "Size of the button.",
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean", // یک سوئیچ true/false برای غیرفعال کردن دکمه
      description: "If true, the button will be disabled and non-interactive.",
      defaultValue: false,
    },
  },
};

// یک Template (الگو) برای ساخت استوری‌های مختلف از یک کامپوننت.
// این کار باعث می‌شود کد تکراری کمتری بنویسید.
const Template = (args) => <Button {...args} />;

// --- حالا استوری‌های مختلف کامپوننت Button را تعریف می‌کنیم ---

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "medium",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline Button",
  variant: "outline",
  size: "medium",
};

export const Text = Template.bind({});
Text.args = {
  children: "Text Button",
  variant: "text",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "small",
  variant: "primary",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  size: "large",
  variant: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
  variant: "primary",
  size: "medium",
};
export const dd = Template.bind({});
dd.args = {
  children: "Button",
  variant: "dd",
  size: "medium",
};

// یک استوری برای نمایش همه انواع دکمه‌ها در کنار هم
export const AllVariants = () => (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
    <Button size="small">Small</Button>
    <Button size="large">Large</Button>
    <Button disabled>Disabled</Button>
  </div>
);

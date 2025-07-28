// src/components/Select/Select.stories.jsx
import React, { useState } from "react";
import Select from "./Select";

// تعریف یک لیست از گزینه‌ها برای استفاده در استوری‌ها
const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object", // برای نمایش و تغییر آرایه options
      description: "An array of objects with `value` and `label` properties.",
    },
    value: {
      control: "text", // مقدار انتخاب شده
      description: "The currently selected value.",
    },
    onChange: {
      action: "selected", // برای ثبت رویداد تغییر
      description: "Callback function triggered when the select value changes.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no option is selected.",
    },
    disabled: {
      control: "boolean",
      description: "If true, the select box will be disabled.",
      defaultValue: false,
    },
  },
};

// یک Template با استفاده از useState برای مدیریت حالت value
const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value || "");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    args.onChange(e); // برای نمایش در پنل Actions Storybook
  };

  return <Select {...args} value={selectedValue} onChange={handleChange} />;
};

// --- استوری‌های مختلف کامپوننت Select ---

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
  placeholder: "Choose an item",
  value: "", // در ابتدا هیچی انتخاب نشده
};

export const Preselected = Template.bind({});
Preselected.args = {
  options: defaultOptions,
  value: "option2", // از قبل "Option 2" انتخاب شده
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: defaultOptions,
  placeholder: "This is disabled",
  disabled: true,
  value: "",
};

export const WithManyOptions = Template.bind({});
WithManyOptions.args = {
  options: Array.from({ length: 20 }, (_, i) => ({
    value: `value${i + 1}`,
    label: `Long Option ${i + 1}`,
  })),
  placeholder: "Select from many",
  value: "",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  options: defaultOptions,
  placeholder: "Please make a selection...",
  value: "",
};

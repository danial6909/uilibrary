// src/components/Card/Card.stories.jsx
import React from "react";
import Card from "./Card";
import Button from "../Button/Button"; // از کامپوننت Button که قبلا ساختیم استفاده می‌کنیم

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
      description: "Content for the card header.",
    },
    children: {
      control: "text",
      description: "Main content for the card body.",
    },
    footer: {
      control: "text",
      description: "Content for the card footer.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for custom styling.",
    },
  },
};

const Template = (args) => <Card {...args} />;

// --- استوری‌های مختلف کامپوننت Card ---

export const BasicCard = Template.bind({});
BasicCard.args = {
  header: "Card Title",
  children:
    "This is the main content of the card. You can put any text or elements here.",
  footer: "Card Footer Text",
};

export const CardWithoutHeader = Template.bind({});
CardWithoutHeader.args = {
  children: "This card has no header, only body content.",
  footer: "Footer content here.",
};

export const CardWithoutFooter = Template.bind({});
CardWithoutFooter.args = {
  header: "Title Only",
  children: "This card has a header and body, but no footer.",
};

export const CardWithComplexContent = Template.bind({});
CardWithComplexContent.args = {
  header: <h3>Product Details</h3>,
  children: (
    <div>
      <p>
        <strong>Product Name:</strong> Awesome Gadget
      </p>
      <p>
        <strong>Price:</strong> €49.99
      </p>
      <p>
        <strong>Description:</strong> A fantastic gadget to enhance your daily
        life.
      </p>
    </div>
  ),
  footer: <Button size="small">View Details</Button>,
};

export const PrimaryBackgroundCard = Template.bind({});
PrimaryBackgroundCard.args = {
  header: "Primary Styled Card",
  children:
    "This card demonstrates a custom background color for its header and footer using an additional class.",
  footer: "Styled Footer",
  className: "card-primary-bg", // کلاسی که در CSS تعریف کردیم
};

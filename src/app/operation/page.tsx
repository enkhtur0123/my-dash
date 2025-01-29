"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InputField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

// input fields
const inputFields: InputField[] = [
  {
    name: "name",
    label: "Business name",
    type: "text",
    required: true,
  },
  {
    name: "address",
    label: "Business address",
    type: "text",
    required: true,
  },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "website", label: "Website", type: "url" },
  {
    name: "hours",
    label: "Hours",
    type: "text",
  },
  {
    name: "abn",
    label: "ABN",
    type: "number",
  },
];

export default function AddOperationPage() {
  const handleChange = () => {
    //
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with values:");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div
        className="flex flex-col lg:w-1/2 p-4 lg:order-last lg:flex
lg:justify-center lg:items-center overflow-y-auto"
      >
        preview
      </div>
      <div
        className="flex flex-col lg:w-1/2 p-4 lg:order-first lg:flex
lg:justify-center lg:items-start overflow-y-auto"
      >
        <h1>
          List your business for free and reach out to millions of customers
        </h1>
        {inputFields.map((item, index) => (
          <div key={index} className="my-2 w-full">
            <label className="text-xs">{item.label}</label>
            <Input
              name={item.name}
              type={item.type}
              required={item.required}
              onChange={handleChange}
              //   value={business[item.name as keyof BusinessState] || ""}
            />
          </div>
        ))}
        <Button onClick={handleSubmit} type="submit" className="my-5">
          Submit
        </Button>
      </div>
    </div>
  );
}

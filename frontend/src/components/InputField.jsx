import React from 'react';

function InputField({ id, type = "text", placeholder, label, onChange }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <input id={id} type={type} placeholder={placeholder} onChange={onChange} className="block w-full border border-gray-300 rounded-md p-2" />
    </div>
  );
}

export default InputField;

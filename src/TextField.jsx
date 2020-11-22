import React from 'react';

export default function TextField({
  label,
  type = 'text',
  name,
  value,
  onChange,
}) {
  const id = `text-field-${name}`;

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

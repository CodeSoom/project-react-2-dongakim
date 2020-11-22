import React from 'react';

import TextField from './TextField';

export default function HabitForm({
  fields,
  onChange,
  onSubmit,
}) {
  const {
    anchor,
    tinyBehavior,
    celebration,
  } = fields;

  return (
    <>
      <TextField
        label="앵커"
        name="anchor"
        value={anchor}
        onChange={onChange}
      />
      <TextField
        label="작은 행동"
        name="tinyBehavior"
        value={tinyBehavior}
        onChange={onChange}
      />
      <TextField
        label="축하"
        name="celebration"
        value={celebration}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        습관 등록하기
      </button>
    </>
  );
}

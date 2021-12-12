import React from 'react';
import {Section} from "./styles";

export default function Input({ labelName, password, placeholder, value, readOnly, size }) {
  return (
    <Section size={size}>
      {labelName&& <label>{labelName}</label>}
      <input type={password? "password" : "text"} placeholder={placeholder} value={value} readOnly={readOnly}/>
    </Section>
  );
}
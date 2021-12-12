import React from 'react';
import {DynamicButton} from "./styles";

export default function Button({ buttonName, size }) {
  return (
    <DynamicButton size={size}>{buttonName}</DynamicButton>
  );
}
import React from 'react';
import {SearchSection} from "./styles";
import Input from "../input";

export default function Search({placeholder, size}) {
  return (
    <SearchSection>
        <Input placeholder={placeholder} size={size}/> 
        {/* TODO <Icon src={SearchIcon} /> */}
    </SearchSection>
  );
}
import React from 'react';
import {SearchSection} from "./styles";
import Input from "../input";

export default function Search({placeholder}) {
  return (
    <SearchSection>
        <Input placeholder={placeholder} size="60%"/> 
        {/* <Icon src={SearchIcon} /> */}
    </SearchSection>
  );
}
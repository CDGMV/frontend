import React from 'react';
// import {Input} from 'semantic-ui-react';
import {Section} from "./styles";

// export default function InputField({ labelName, password, placeholder, value, readOnly, size, icon}) {
//   return (
//     <Section size={size}>
//       {labelName&& <label>{labelName}</label>}
//       <Input type={password? "password" : "text"} placeholder={placeholder} value={value} readOnly={readOnly} icon={icon}/>
//     </Section>
//   );
// }
export default function Input({ labelName, password, placeholder, value, readOnly, size, icon}) {
  return (
    <Section size={size}>
      {labelName&& <label>{labelName}</label>}
      <input type={password? "password" : "text"} placeholder={placeholder} value={value} readOnly={readOnly} icon={icon}/>
    </Section>
  );
}
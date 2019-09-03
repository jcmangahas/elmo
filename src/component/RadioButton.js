import React from "react";

const RadioButton = ({name, placeholder, values, required, handleChange}) => (
    <tr>
        
        <td><label>{placeholder}</label></td>
        <td>
        {values.map(value => 
            <label>
                <input type="radio" name={name} value={value} onChange = {handleChange}/>
                     {value}
            </label>
        )}
        </td>
    </tr>
);

export default RadioButton;
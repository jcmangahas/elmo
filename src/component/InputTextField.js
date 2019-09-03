import React from "react";

const InputTextField = ({name, placeholder, required, handleChange}) => (
    <tr>
        
        <td><label>{placeholder}</label></td>
        <td>
        <input
            type = "text"
            name = {name}
            required = {required}
            autoComplete = "off"
            placeholder = {placeholder}
            onChange = {handleChange}   
        />
        </td>
    </tr>
);

export default InputTextField;
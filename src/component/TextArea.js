import React from "react";

const TextArea = ({name, placeholder, required, handleChange}) => (
    <tr>
        
        <td><label>{placeholder}</label></td>
        <td>
        <textarea
            type = "text"
            name = {name} 
            required = {required}
            style = {{
                height: "200px",
                width: "250px"
            }}
            autoComplete = "off"
            placeholder = {placeholder}   
            onChange = {handleChange}
        />
        </td>
    </tr>
);

export default TextArea;
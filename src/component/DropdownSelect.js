import React from "react";

const DropdownSelect = ({name, placeholder, required, values, handleChange}) => (
    <tr>
        <td><label>{placeholder}</label></td>
        <td>
        <select name={name} required={required} onChange={handleChange}>
            {values.map(value => 
                   <option value={value} key={value}>{value}</option>
            )}
        </select>
        </td>

    </tr>
);

export default DropdownSelect;
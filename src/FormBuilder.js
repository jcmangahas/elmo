import React, {Component} from 'react';
import './FormBuilder.css';
import InputTextField from './component/InputTextField';
import DropdownSelect from './component/DropdownSelect';
import RadioButton from './component/RadioButton';
import TextArea from './component/TextArea';
import Data from './Data.json'
import RandomData from './RandomData.json'

class FormBuilder extends Component{
  // load from mocking data
  state = Data;
  inputTextData = RandomData.inputtext;
  dropdownData = RandomData.dropdown;
  radioButtonData = RandomData.radiobutton;
  textAreaData = RandomData.textarea;

  onNewClick = () => {
    this.setState({
      fields: []
    });
  };

  onLoadClick = () => {
    this.setState(Data);
  };

  onInputTextClick = () => {
    let fields = this.state.fields;
    let inputText =this.inputTextData.length > 0 ? this.inputTextData.pop(): this.state.fields[0];
    fields.push(inputText)
    this.setState({fields : fields});
  };

  onDropdownClick = () => {
    let fields = this.state.fields;
    let dropdown = this.dropdownData.length > 0 ?  this.dropdownData.pop(): this.state.fields[4];
    fields.push(dropdown)
    this.setState({fields : fields});
  };

  onRadioButtonClick = () => {
    let fields = this.state.fields;
    let radioButton= this.radioButtonData.length > 0 ? this.radioButtonData.pop() : this.state.fields[2];
    fields.push(radioButton)
    this.setState({fields : fields});
  };

  onTextAreaClick = () => {
    let fields = this.state.fields;
    let textArea= this.textAreaData.length > 0 ? this.textAreaData.pop() : this.state.fields[3];
    fields.push(textArea)
    this.setState({fields : fields});
  };

  handleChange = event => {
    let form = this.state.form || {};
    form[event.target.name] = event.target.value;
    this.setState({form : form});
}

  onSaveFormClick = event => {
    // save form structure to DB
    console.log("onSaveFormClick() Submit Form Structure" + JSON.stringify(this.state.fields));
    event.preventDefault();
  }

  onSubmitFormClick = event => {
    // save form data to DB 
    event.preventDefault();
    const data = this.state.form;
    console.log("onSubmitFormClick() Submit Form Data" + JSON.stringify(data));
  }

  render(){
    const {fields} = this.state;
    return(
      <form onSubmit={this.onSubmitFormClick}>
          <div className="document">
          <tbody>
            <tr >
              <td className="buttonArea" colSpan="2">
                <button onClick={this.onNewClick} className="primarybutton">New Form</button>
                <button onClick={this.onLoadClick}>Load Existing Form</button>
                <button onClick={this.onSaveFormClick}>Save Form</button>
                <button onClick={this.onInputTextClick}>Input Text</button>
                <button onClick={this.onDropdownClick}>Dropdown</button>
                <button onClick={this.onRadioButtonClick}>Radio Button</button>
                <button onClick={this.onTextAreaClick}>Text Area</button>
              </td>
            </tr>
            {fields.map(field => {
              switch(field.input_type){
                case "text":
                  return <InputTextField 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  key = {field.placeholder}
                  />
                break; 

                case "dropdown":
                  return <DropdownSelect 
                  name =  {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  values = {field.values}
                  key = {field.placeholder}
                />
                break;

                case "radiobutton":
                  return <RadioButton 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  values = {field.values}
                  key = {field.placeholder}
                />
                break;

                case "textarea":
                return <TextArea 
                    name = {field.name}
                    placeholder = {field.placeholder}
                    required = {field.required}
                    key = {field.placeholder}
                  />
                break;
              }
            })}
            </tbody>
            </div>

            <div className="document">
            <tbody>
            <tr >
              <td className="buttonArea" colSpan="2">
                <button type="submit" value="Submit" className="primarybutton">Submit Form</button>
              </td>
            </tr>
            {fields.map(field => {
              switch(field.input_type){
                case "text":
                  return <InputTextField 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  key = {field.placeholder}
                  handleChange = {this.handleChange}
                  />
                break; 

                case "dropdown":
                  return <DropdownSelect 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  values = {field.values}
                  key = {field.placeholder}
                  handleChange = {this.handleChange}
                />
                break;

                case "radiobutton":
                  return <RadioButton 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  values = {field.values}
                  key = {field.placeholder}
                  handleChange = {this.handleChange}
                />
                break;

                case "textarea":
                return <TextArea 
                  name = {field.name}
                  placeholder = {field.placeholder}
                  required = {field.required}
                  key = {field.placeholder}
                  handleChange = {this.handleChange}
                />
              break;
              }
            })}
          </tbody>
        </div>
      </form>      
    )
  }
}


export default FormBuilder;


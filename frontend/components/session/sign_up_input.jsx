import React from 'react';

class SignUpInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      [this.props.fieldName]: this.props.fieldValue,
      error: false,
      help: false,
      modified: false
    }
    this.validate = this.validate.bind(this)
  }

  validate() {
    return (e) => {
      if ( e.type === "blur" && e.target.value.trim() === "" ) {
        this.setState({ error: true, help: false, first_name: e.target.value.trim(), modified: true })
      } else if ( e.type === "focus" && e.target.value === "" && this.state.modified ) {
        this.setState({ help: true , error: false });
      } else {
        this.setState({ error: false, help: false, first_name: e.target.value, modified: true },
          () => this.props.changeProperty(this.props.fieldName)
        )
      }
    }

  }

  render() {
    const cssClass = this.props.fieldName.replace("_", "-");
    const iconClass = this.state.error ? "fas fa-exclamation-circle"
      : "fas fa-exclamation-circle hidden";
    const inputClass = this.state.error ? "invalid" : "";
    const helpClass = this.state.help ? "help-message" : "help-message hidden";

    return (
      <div className={ `${cssClass} field-set` }>
        <div className={ helpClass }>
          { this.props.fieldHelpText }
        </div>
        <input
          type="text"
          className={ inputClass }
          onChange={ this.validate() }
          onBlur={ this.validate() }
          onFocus={ this.validate() }
          value={ this.state.fieldValue }
          placeholder={ this.props.fieldPlaceHolder }
          />
        <i className={ iconClass }></i>
      </div>
    );
  }
}

export default SignUpInput;

import React from 'react';

class SignUpInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldValue: this.props.fieldValue,
      error: false,
      help: false
    }
    this.validate = this.validate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.sessionErrors.includes( this.props.fieldName ) ) {
      this.setState({ error: true });
    }
  }

  validate() {
    return (e) => {
      if ( e.type === "blur" && e.target.value.trim() === "" ) {
        this.setState({ error: true, help: false, fieldValue: e.target.value.trim(), modified: true })
      } else if ( e.type === "focus" && this.state.error ) {
        this.setState({ help: true , error: false });
      } else {
        this.setState(
          { error: false, help: false, fieldValue: e.target.value, modified: true },
          () => {
            this.props.update(this.props.fieldName, this.state.fieldValue)
          }
        );
      }
    }
  }

  render() {
    const cssClass = this.props.fieldName.replace("_", "-");
    const iconClass = this.state.error ? "" : " hidden";
    const inputClass = this.state.error ? " invalid" : "";
    const helpClass = this.state.help ? "" : " hidden";

    return (
      <div className={ `${cssClass} field-set` }>
        <div className={ "help-message" + helpClass }>
          { this.props.fieldHelpText }
        </div>
        <input
          type={ this.props.fieldType }
          className={ inputClass }
          onChange={ this.validate() }
          onBlur={ this.validate() }
          onFocus={ this.validate() }
          value={ this.state.fieldValue }
          placeholder={ this.props.fieldPlaceHolder }
          />
        <i className={ "fas fa-exclamation-circle" +  iconClass }></i>
      </div>
    );
  }
}

export default SignUpInput;

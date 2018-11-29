import React from 'react';
import * as DateUtil from '../../util/date_util';

class BirthDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: this.props.year,
      month: this.props.month,
      day: this.props.day,
      error: false,
      help: false
    }
    this.validate = this.validate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.sessionErrors.includes(this.props.fieldName) ) {
      this.setState({ error: true });
    }
  }

  removeSessionErrors() {
    const sessionErrors = this.props.sessionErrors.filter( error =>
      error !== this.props.fieldName
    );
    this.props.update( "sessionErrors", sessionErrors );
  }

  validate() {
    return (e) => {
      const [fieldName, fieldValue] = [ e.target.id, e.target.value ];
      const { year, month, day } = this.state;
      const invalid = (year === "" || month === "" || day === "");
      if ( e.type === "blur" ) {
        if ( invalid ) {
          this.setState({ error: true, help: false });
        } else {
          this.setState({error: false, help: false});
        }
      } else if ( e.type === "focus" &&  this.state.error ) {
        this.setState({ error: false, help: true });
      } else {
        this.setState (
          { error: false, help: false, [fieldName]: fieldValue },
          () => {
            this.props.update( fieldName, fieldValue );
            this.removeSessionErrors();
          }
        );
      }
    }
  }

  render() {
    const iconClass = this.state.error ? "" : " hidden";
    const inputClass = this.state.error ? " invalid" : "";
    const helpClass = this.state.help ? "" : " hidden";

    const today = new Date();
    return (
      <div className="field-set" onBlur={ this.validate() } onFocus={ this.validate() }>
        <div className={ "help-message" + helpClass }>
          Select your birthday. You can change who can see this later.
        </div>
        <select id="month" className={ inputClass }
            onChange={ this.validate() }
            value={ this.state.month }>
          <option value="">Month</option>
          { Object.keys(DateUtil.MONTHS).map( month => (
            <option key={month} value={month}>{ DateUtil.MONTHS[month] }</option>
          ))}
        </select>
        <select id="day" className={ inputClass }
            onChange={ this.validate() }
            value={ this.state.day } >
          <option value="">Day</option>
          { DateUtil.DAYS().map( day => (
            <option key={day} value={day}>{ day }</option>
          ))}
        </select>
        <select id="year" className={ inputClass }
            onChange={ this.validate() }
            value={ this.state.year }>
          <option value="">Year</option>
          { DateUtil.YEARS().map( year => (
            <option key={year} value={year}>{ year }</option>
          ))}
        </select>
        <a href="/wip" title="Click for more information">
          Why do I need to provide my birthday?
        </a>
        <i className={ "fas fa-exclamation-circle" +  iconClass }></i>
      </div>
    )
  }
}

export default BirthDate;

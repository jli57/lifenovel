import React from 'react';
import * as DateUtil from '../../util/date_util';

class BirthDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: "",
      month: "",
      day: "",
    }
  }

  changeProperty(prop) {
    return (e) => {
      e.preventDefault();
      const val = e.target.value;
      this.setState(
        { [prop]: val },
        () => {
          this.props.update(prop, val)
        }
      );
    };
  }

  render() {
    return (
      <div id="birthday">
        <div id="birthday-header">Birthday</div>
        <div>
          <select id="month" onChange={ this.changeProperty("month")}>
            <option value="" defaultValue>Month</option>
            { Object.keys(DateUtil.MONTHS).map( month => (
              <option key={month} value={month}>
                { DateUtil.MONTHS[month] }
              </option>
            ))}
          </select>
          <select id="day" onChange={ this.changeProperty("day")} >
            <option value="" defaultValue>Day</option>
            { DateUtil.DAYS().map( day => (
              <option key={day} value={day}>
                { day }
              </option>
            ))}
          </select>
          <select id="year" onChange={ this.changeProperty("year")} >
            <option value="" defaultValue>Year</option>
            { DateUtil.YEARS().map( year => (
              <option key={year} value={year}>
                { year }
              </option>
            ))}
          </select>
          <div id="birthday-help">
            <a className="f12"
              href="#"
              title="Click for more information"
            >Why do I need to provide my birthday?</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BirthDate;

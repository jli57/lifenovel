import React from 'react';

class LogOut extends React.Component {

  constructor(props) {
    super(props);
    this.state =
  }
  render() {
    return (
      <div>
        <button className="header-btn" onClick={ this.props.logout }>Logout</button>
      </div>
    );
  }

};

export default LogOut;

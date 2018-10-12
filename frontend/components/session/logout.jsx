import React from 'react';

class LogOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: true;
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then( this.props.history.push("/") );
  }

  render() {
    return (
      <div>
        <button className="header-btn" onClick={ this.handleLogout }>Logout</button>
      </div>
    );
  }

};

export default LogOut;

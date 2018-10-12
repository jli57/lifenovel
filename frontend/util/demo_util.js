export const EMAIL = "demo-user@gmail.com";
export const PASSWORD = "password";

export const fillProperty = function( field, prop, interval, callback ) {
  let i = 0;
  const intervalId = setInterval( () => {
    if ( i < field.length ) {
      const value = ( i === 0 ? "" : this.state[prop] ) + field[i];
      this.setState({ [prop]: value });
      i++;
    } else {
      clearInterval(intervalId);
      callback();
    }
  }, interval );
};

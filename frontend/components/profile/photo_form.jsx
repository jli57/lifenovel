import React from 'react'; 

class PhotoForm extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      photoFile:  null , 
      id: this.props.currentUser.id 
    } 
    this.handleSubmit = this.handleSubmit.bind(this);   
    this.handleFile = this.handleFile.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault(); 

    const formData = new FormData(); 

    formData.append('user[profile_photo]', this.state.photoFile); 


    this.props.updateUser(formData, this.state.id )
      .then( 
        () => { console.log("success")}, 

        () => { console.log("failure")}

      ); 

  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]}); 
  }

  render() {
    return (
      <form className="photo-form" onSubmit={ this.handleSubmit } >
        <input type="file" onChange={this.handleFile} />
        <input type="submit" value="Add Photo" />
      </form>
    ); 
  }
}

export default PhotoForm; 
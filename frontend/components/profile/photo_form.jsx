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

    switch( this.props.formType ) {
      case "profile":
        formData.append('user[profile_photo]', this.state.photoFile); 
        break; 
      case "post": 
        formData.append('post[photo]', this.state.photoFile); 
        break; 
      default: 
    }
    this.props.submitAction(formData, this.state.id)
      .then( () =>  this.props.closeForm() ); 
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img className="preview" src={this.state.photoUrl} /> 
      : <div className="preview-box"><i className="fas fa-plus"></i>Choose Photo</div>;

    return (
      <form className="photo-form" onSubmit={ this.handleSubmit } >

        <label htmlFor="profile-photo-upload" className="profile-photo-upload">
          <input type="file" id="profile-photo-upload" onChange={this.handleFile} />
          { preview }
        </label>
        <div className="form-buttons">
          <button onClick={ () => this.props.closeForm() }>Cancel</button> 
          <input type="submit" value="Save Photo" />
        </div>
      </form>
    ); 
  }
}

export default PhotoForm; 
import React from 'react';

class PostPhotoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoFiles:  [],
      photoUrls: [],
      id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    const photoFiles = this.state.photoFiles;

    for (var key in this.props.post ) {
      formData.append( `post[${key}]`, this.props.post[key]);
    }
    for(let i = 0; i < photoFiles.length; i++) {
      formData.append('post[photos][]', photoFiles[i]);
    }
    this.props.submitAction(formData);
  }

  handleFile(e) {
    const photoFiles = this.state.photoFiles;
    this.setState({ photoFiles: [...photoFiles, ...e.currentTarget.files]});

    for ( let i = 0; i < e.currentTarget.files.length; i ++ ) {
      const file = e.currentTarget.files[i];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        let photoUrls = this.state.photoUrls.slice();
        photoUrls.push(fileReader.result);
        this.setState({ photoUrls });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      }
    }
  }

  render() {
    window.urls = this.state.photoUrls;
    const addPhoto = (text) => (
      <label htmlFor="profile-photo-upload" className="profile-photo-upload">
        <input type="file" id="profile-photo-upload" onChange={this.handleFile} multiple/>
        <div className="preview-box"><i className="fas fa-plus"></i>{text}</div>
      </label>
    );

    return (
      <form className="photo-form" onSubmit={ this.handleSubmit } >
        { this.state.photoUrls.length == 0 ? addPhoto("Choose Photo(s)") : null }
        <div className="previews">
          { this.state.photoUrls.map( (url, i) => (
              <img key={i} src={url} />
          )) }
          { this.state.photoUrls.length > 0 ? addPhoto("Add more") : null }
        </div>
        <div className="form-buttons">
          <button onClick={ () => this.props.closeForm() }>Cancel</button>
          <input type="submit" value="Save" />
        </div>
      </form>
    );
  }
}

export default PostPhotoForm;
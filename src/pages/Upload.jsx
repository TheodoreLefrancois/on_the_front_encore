/* eslint-disable import/newline-after-import */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
import React from 'react';
const axios = require('axios');

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post('/upload', formData, config)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        alert('The file is successfully uploaded');
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {});
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="myImage" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default ReactUploadImage;

import React, { Component } from 'react';
import ImagePathForm from './Forms/ImagePathform';
import SubtitleForm from './Forms/Subtitleform';
import TitleForm from './Forms/Titleform';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleForm
          titleValue={ title }
          titleOnChange={ this.textInputHandler }
        />
        <SubtitleForm
          subtitleValue={ subtitle }
          subtitleOnChange={ this.textInputHandler }
        />
        <ImagePathForm 
          imagePathValue={ imagePath }
          imagePathOnChange={ this.textInputHandler }
        />
      </form>
    );
  }
}

export default AddMovie;

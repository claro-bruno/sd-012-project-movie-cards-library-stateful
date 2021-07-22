import React, { Component } from 'react';
import TitleInput from './inputsAddMovie/TitleImput';
import SubtitleInput from './inputsAddMovie/SubtitleImput';
import ImageImput from './inputsAddMovie/ImageImput';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
        <ImageImput value={ imagePath } handleChange={ this.handleChange } />
      </form>
    );
  }
}

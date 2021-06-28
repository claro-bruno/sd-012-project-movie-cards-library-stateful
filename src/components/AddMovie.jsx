// implement AddMovie component here
import React, { Component } from 'react';
import InputTitulo from './InputTitulo';
import InputText from './InputText';
import InputImg from './InputImg';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      //     storyline: '',
      //     rating: 0,
      //     genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitulo title={ title } />
        <InputText onChange={ subtitle } />
        <InputImg onChange={ imagePath } />
      </form>
    );
  }
}

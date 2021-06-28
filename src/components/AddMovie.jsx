// implement AddMovie component here
import React, { Component } from 'react';
import InputTitulo from './InputTitulo';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      //     subtitle: '',
      title: '',
      //     imagePath: '',
      //     storyline: '',
      //     rating: 0,
      //     genre: 'action',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitulo title={ title } />
      </form>
    );
  }
}

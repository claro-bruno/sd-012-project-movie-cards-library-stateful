// implement AddMovie component here
import React, { Component } from 'react';
import InputTitulo from './InputTitulo';
import InputText from './InputText';
import InputImg from './InputImg';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import Select from './Select';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitulo title={ title } />
        <InputText subtitle={ subtitle } />
        <InputImg imagePath={ imagePath } />
        <Textarea storyline={ storyline } />
        <InputNumber rating={ rating } />
        <Select />
      </form>
    );
  }
}

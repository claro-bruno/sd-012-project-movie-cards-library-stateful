// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitulo from './InputTitulo';
import InputText from './InputText';
import InputImg from './InputImg';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import Select from './Select';
import Button from './Button';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitulo title={ title } handleChange={ this.handleChange } />
        <InputText subtitle={ subtitle } handleChange={ this.handleChange } />
        <InputImg imagePath={ imagePath } handleChange={ this.handleChange } />
        <Textarea storyline={ storyline } handleChange={ this.handleChange } />
        <InputNumber rating={ rating } handleChange={ this.handleChange } />
        <Select genre={ genre } handleChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

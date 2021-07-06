import React, { Component } from 'react';
import Select from './Select';
import TextArea from './TextArea';
import ImagePath from './ImagePath';
import RatingInput from './RatingInput';
import SubtitleInput from './SubtitleInput';

class AddMovie extends Component {
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
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    const { onClick } = this.props;
    const { state } = this.state;
    onClick(state);
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <TextArea storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <Select genre={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          onClick={ this.resetState }
          type="reset"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

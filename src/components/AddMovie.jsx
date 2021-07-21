import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import NumberInput from './NumberInput';
import Select from './Select';
import InputTotal from './InputTotal';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick({ ...this.state });
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
      <div>
        <form data-testid="add-movie-form">
          <InputTotal
            handleChange={ this.handleChange }
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
          />
          <TextArea
            labelText="Sinopse"
            dataTestId="storyline-input"
            valueText={ storyline }
            onTextChange={ this.handleChange }
            name="storyline"
          />
          <NumberInput
            labelText="Avaliação"
            dataTestId="rating-input"
            valueText={ rating }
            onTextChange={ this.handleChange }
            name="rating"
          />
          <Select
            name="genre"
            dataTestId="genre-input"
            labelText="Gênero"
            valueSelect={ genre }
            selectChange={ this.handleChange }
            dataTestIdOptions="genre-option"
            options={ [
              { value: 'action', text: 'Ação' },
              { value: 'comedy', text: 'Comédia' },
              { value: 'thriller', text: 'Suspense' },
            ] }
          />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.addMovie }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

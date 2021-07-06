import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genre from './Genre';
import ButtonAdd from './ButtonAdd';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.changeHandler = this.changeHandler.bind(this);

    this.buttonState = this.buttonState.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { changeHandler, buttonState } = this;

    return (
      <div>
        <form data-testid="add-movie-form">
          <section>

            <Title
              value={ title }
              onChange={ changeHandler }
            />

            <Subtitle
              value={ subtitle }
              onChange={ changeHandler }
            />

            <Image
              value={ imagePath }
              onChange={ changeHandler }
            />

            <Sinopse
              value={ storyline }
              onChange={ changeHandler }
            />

            <Avaliacao
              value={ rating }
              onChange={ changeHandler }
            />

            <Genre
              value={ genre }
              onChange={ changeHandler }
            />
          </section>
          <ButtonAdd
            onClick={ buttonState }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;

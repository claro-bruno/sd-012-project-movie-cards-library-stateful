import React from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import GenreSelect from './GenreSelect';
import TextArea from './TextArea';
import Button from './Button';

class AddMovie extends React.Component {
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
    this.hC = this.hC.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
    onClick();
    let newState = this.state;
    newState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState(newState);
  }

  hC(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputForm
          name="title"
          v={ title }
          id="title-input"
          oC={ this.hC }
          lS="Título"
          type="text"
        />
        <InputForm
          name="subtitle"
          v={ subtitle }
          id="subtitle-input"
          oC={ this.hC }
          lS="Subtítulo"
          type="text"
        />
        <InputForm
          name="imagePath"
          v={ imagePath }
          id="image-input"
          oC={ this.hC }
          lS="Imagem"
          type="text"
        />

        <InputForm
          name="rating"
          v={ rating }
          id="rating-input"
          oC={ this.hC }
          lS="Avaliação"
          type="number"
        />
        <TextArea storyline={ storyline } hC={ this.hC } />
        <GenreSelect genre={ genre } hC={ this.hC } />
        <Button onClick={ this.onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

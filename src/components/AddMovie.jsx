import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.sendMovieData = this.sendMovieData.bind(this);
  }

  sendMovieData() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelDescription="Título"
          inputId="title-input"
          value={ title }
          onChange={ ({ target }) => this.setState({ title: target.value }) }
        />
        <InputText
          labelDescription="Subtítulo"
          inputId="subtitle-input"
          value={ subtitle }
          onChange={ ({ target }) => this.setState({ subtitle: target.value }) }
        />
        <InputText
          labelDescription="Imagem"
          inputId="image-input"
          value={ imagePath }
          onChange={ ({ target }) => this.setState({ imagePath: target.value }) }
        />
        <Textarea
          labelDescription="Sinopse"
          inputId="storyline-input"
          value={ storyline }
          onChange={ ({ target }) => this.setState({ storyline: target.value }) }
        />
        <InputNumber
          labelDescription="Avaliação"
          inputId="rating-input"
          value={ rating }
          onChange={ ({ target }) => this.setState({ rating: target.value }) }
        />
        <InputSelect
          labelDescription="Gênero"
          inputId="genre-input"
          value={ genre }
          onChange={ ({ target }) => this.setState({ genre: target.value }) }
        />
        <Button
          dataTestId="send-button"
          onClick={ this.sendMovieData }
          innerText="Adicionar filme"
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

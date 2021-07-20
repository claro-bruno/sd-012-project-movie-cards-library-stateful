import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

class AddMovie extends React.Component {
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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleTitleClick() {
    const { callback } = this.props;
    const { title } = this.state;
    callback(title);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const addMovieSelect = [
      { value: 'action', content: 'Ação' },
      { value: 'comedy', content: 'Comédia' },
      { value: 'thriller', content: 'Suspense' },
    ];
    return (
      <form data-testid="add-movie-form">
        <Input
          name="title-input"
          testid="title-input"
          inputText={ title }
          labelText="Título"
          inputType="text"
          callback={ (event) => this.handleChange(event, 'title') }
        />
        <br />
        <Input
          name="subtitle-input"
          testid="subtitle-input"
          inputText={ subtitle }
          labelText="Subtítulo"
          inputType="text"
          callback={ (event) => this.handleChange(event, 'subtitle') }
        />
        <br />
        <Input
          name="image-input"
          testid="image-input"
          inputText={ imagePath }
          labelText="Imagem"
          inputType="text"
          callback={ (event) => this.handleChange(event, 'imagePath') }
        />
        <br />
        <TextArea
          name="storyline-input"
          testid="storyline-input"
          inputText={ storyline }
          labelText="Sinopse"
          callback={ (event) => this.handleChange(event, 'storyline') }
        />
        <br />
        <Input
          name="rating-input"
          testid="rating-input"
          inputText={ rating }
          labelText="Avaliação"
          inputType="number"
          callback={ (event) => this.handleChange(event, 'rating') }
        />
        <Select
          name="genre-input"
          testid="genre-input"
          optionId="genre-option"
          labelText="Gênero"
          selectedGenre={ genre }
          onSelectedGenreChange={ (event) => this.handleChange(event, 'genre') }
          optionList={ addMovieSelect }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;

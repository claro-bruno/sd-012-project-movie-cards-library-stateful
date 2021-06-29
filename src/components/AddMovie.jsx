import React from 'react';
import PropTypes from 'prop-types';
import GenInput from './GenInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import GenButton from './GenButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
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
    const inputsProps = [
      {
        name: 'title',
        value: title,
        labelName: 'Título',
        id: 'title',
      },
      {
        name: 'subtitle',
        value: subtitle,
        labelName: 'Subtítulo',
        id: 'subtitle',
      },
      {
        name: 'image',
        value: imagePath,
        labelName: 'Imagem',
        id: 'imagePath',
      },
      {
        name: 'storyline',
        value: storyline,
        labelName: 'Sinopse',
        id: 'storyline',
      },
    ];
    return (
      <form data-testid="add-movie-form">
        { inputsProps.map((input) => (<GenInput
          name={ input.name }
          value={ input.value }
          labelName={ input.labelName }
          id={ input.id }
          key={ input.id }
          onChange={ this.handleChange }
        />)) }
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <GenreInput value={ genre } onChange={ this.handleChange } />
        <GenButton onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

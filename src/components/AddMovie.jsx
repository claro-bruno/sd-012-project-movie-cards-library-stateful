// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingAdd from './RatingAdd';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <RatingAdd value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.initialState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;

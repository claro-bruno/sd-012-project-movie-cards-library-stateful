import React from 'react';
import PropTypes from 'prop-types';
import InputImg from './InputImg';
import InputRating from './InputRating';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle';
import SelectGenre from './SelectGenre';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClickSubmit(event) {
    event.preventDefault();
    const { addNewMovie } = this.props;
    addNewMovie(this.state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleClick={ this.handleClick } />
        <InputSubtitle value={ subtitle } handleClick={ this.handleClick } />
        <InputImg value={ imagePath } handleClick={ this.handleClick } />
        <TextArea value={ storyline } handleClick={ this.handleClick } />
        <InputRating value={ rating } handleClick={ this.handleClick } />
        <SelectGenre value={ genre } handleClick={ this.handleClick } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.onClickSubmit(event) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  addNewMovie: undefined,
};

AddMovie.propTypes = {
  addNewMovie: PropTypes.func,
};

export default AddMovie;

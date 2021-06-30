import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './MyComponents/LabelInput';
import AddMovieF1 from './MyComponents/AddMovieF1';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('alguma coisa');
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    const { storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieF1 state={ this.state } handleChange={ this.handleChange } />
        <LabelInput
          id="input-textarea"
          dataTestidLabel="storyline-input-label"
          textLabel="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          dataTestidInput="storyline-input"
        />
        { onclick }
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
// Links
// Esse post me ajudou com a resolução do conteúdo
// https://pt.stackoverflow.com/questions/425673/pegar-valor-de-um-input-type-text-react

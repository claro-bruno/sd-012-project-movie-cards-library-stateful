// implement AddMovie component here ;)
import React from 'react';
import InputSelect from './inputs/InputSelect';
import InputTextarea from './inputs/InputTextarea';
import InputTitle from './inputs/InputTitle';
import InputSubtitle from './inputs/InputSubtitle';
import InputImage from './inputs/InputImage';
import InputRating from './inputs/InputRating';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // handleChange(e) {
  //   const { name } = e.target;
  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  clickSubmit(e) {
    e.preventDefault();
    this.setState(defaultState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle
            value={ title }
            onChange={ this.handleChange }
          />
          <InputSubtitle
            value={ subtitle }
            onChange={ this.handleChange }
          />
          <InputImage
            value={ imagePath }
            onChange={ this.handleChange }
          />
          <InputTextarea
            value={ storyline }
            onChange={ this.handleChange }
          />
          <InputRating
            value={ rating }
            onChange={ this.handleChange }
          />
          <InputSelect
            value={ genre }
            onChange={ this.handleChange }
          />
        </form>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.clickSubmit }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}

export default AddMovie;

import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagePath from './InputImagePath';
import TextAreaStoryLine from './TextAreaStoryline';
import InputRating from './InputRating';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle
            title={ title }
            handleChange={ this.handleChange }
          />

          <InputSubtitle
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />

          <InputImagePath
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />

          <TextAreaStoryLine
            storyline={ storyline }
            handleChange={ this.handleChange }
          />

          <InputRating
            rating={ rating }
            handleChange={ this.handleChange }
          />
        </form>
      </section>
    );
  }
}

export default AddMovie;

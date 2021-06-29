import React from 'react';
import PropTypes from 'prop-types';
import MovieFormTitleSubtitleImage from './MovieFormTitleSubtitleImage';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    console.log(onClick, rating, genre);
    return (
      <section>
        <form data-testid="add-movie-form">
          <MovieFormTitleSubtitleImage
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <label htmlFor="sinopse_" data-testid="storyline-input-label">
            Sinopse
            <input
              name="storyline"
              id="sinopse_"
              type="textarea"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

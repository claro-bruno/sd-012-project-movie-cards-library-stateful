import React from 'react';
import PropTypes from 'prop-types';

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
    console.log(onClick);
    console.log(subtitle, imagePath, storyline, rating, genre);
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title__input" data-testid="title-input-label">
            Título
            <input
              name="title"
              id="title__input"
              type="text"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="subtitle__input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              id="title__input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

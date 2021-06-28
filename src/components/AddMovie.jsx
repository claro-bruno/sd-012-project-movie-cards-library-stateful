import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChange() {
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { onClick() }
        <input type="text" id="find-subtitle" />
        <input type="text" id="find-title" />
        <input type="text" id="find-image-path" />
        <input type="text" id="find-story-line" />
        <input type="text" id="find-rating" />
        <input type="text" id="find-genre" />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

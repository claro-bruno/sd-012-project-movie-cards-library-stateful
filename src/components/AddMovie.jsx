import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form>
        Bora passar no lint com:
        { onClick }
        { subtitle }
        { title }
        { imagePath }
        { storyLine }
        { rating }
        { genre }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

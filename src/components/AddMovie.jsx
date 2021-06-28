import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 5,
      genre: 'action',
    }
  }
  render() {
    const { props } = this;
    const { onClick } = props;

  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;

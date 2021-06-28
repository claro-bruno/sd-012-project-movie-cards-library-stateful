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

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { onClick } = this.props;
    return (
      'xablau'
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// AddMovie.defaultProps = {
//   onClick: { },
// };

export default AddMovie;

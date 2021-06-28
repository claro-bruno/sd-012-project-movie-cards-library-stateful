import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

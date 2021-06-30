// implement AddMovie component here
import React from 'react';
import PropType from 'prop-types';

class AddMovie extends React.Component {
  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;

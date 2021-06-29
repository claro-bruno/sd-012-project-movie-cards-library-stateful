import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    // const {  } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="teste"
        >
          <input type="text" name="teste" />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
// };

export default AddMovie;

// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text">
          <input type="text" />
        </label>
      </form>
    );
  }
}

export default AddMovie;

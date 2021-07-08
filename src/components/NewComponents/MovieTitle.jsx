import React from 'react';

class MovieTitle extends React.Component {
  render() {
    return (
      <label htmlFor="MovieTitle" data-testid="title-input-label">
        Título
        <input data-testid="title-input" type="text" name="title" />

      </label>
    );
  }
}

export default MovieTitle;

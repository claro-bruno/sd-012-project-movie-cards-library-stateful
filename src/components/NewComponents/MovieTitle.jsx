import React from 'react';

class MovieTitle extends React.Component {
  render() {
    const { title, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieTitle" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChangeFunction }
        />

      </label>
    );
  }
}

export default MovieTitle;

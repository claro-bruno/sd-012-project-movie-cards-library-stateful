import React from 'react';

class AddMovieTitle extends React.Component {
  render() {
    const { value, onChange} = this.props;
    return (

      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title-input"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />

      </label>

    );
  }
}
export default AddMovieTitle;

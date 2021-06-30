import React from 'react';

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (

      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />

      </label>

    );
  }
}
export default AddMovieSubtitle;

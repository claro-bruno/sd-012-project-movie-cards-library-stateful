import React from 'react';

class MovieSubtitle extends React.Component {
  render() {
    const { subtitle, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChangeFunction }

        />
      </label>
    );
  }
}

export default MovieSubtitle;

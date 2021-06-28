import React from 'react';
import propTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="txtarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="txtarea"
          cols="30"
          rows="10"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleAddMovies }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: propTypes.string,
  handleAddMovies: propTypes.func,
};

Sinopse.defaultProps = {
  value: '',
  handleAddMovies: () => {},
};

export default Sinopse;

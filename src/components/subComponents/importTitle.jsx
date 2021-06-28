import React from 'react';
import PropTypes from 'prop-types';

class ImportTitle extends React.Component {
  render() {
    const { handleChange, importMovieTitle } = this.props;
    return (
      <label htmlFor="importMovieTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="importMovieTitle"
          value={ importMovieTitle }
          id="importMovieTitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importMovieTitle: PropTypes.string.isRequired,
};

export default ImportTitle;

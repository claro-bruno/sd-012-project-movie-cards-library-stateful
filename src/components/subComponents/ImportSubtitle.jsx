import React from 'react';
import PropTypes from 'prop-types';

class ImportSubtitle extends React.Component {
  render() {
    const { handleChange, importMovieSubtitle } = this.props;
    return (
      <label htmlFor="importMovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="importMovieSubtitle"
          value={ importMovieSubtitle }
          id="importMovieSubtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importMovieSubtitle: PropTypes.string.isRequired,
};

export default ImportSubtitle;

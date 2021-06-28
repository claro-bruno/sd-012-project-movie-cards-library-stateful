import React from 'react';
import PropTypes from 'prop-types';

class ImportTitle extends React.Component {
  render() {
    const { handleChange, importTitle } = this.props;
    return (
      <label htmlFor="importTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="importTitle"
          value={ importTitle }
          id="importTitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importTitle: PropTypes.string.isRequired,
};

export default ImportTitle;

import React from 'react';
import PropTypes from 'prop-types';

class ImportSubtitle extends React.Component {
  render() {
    const { handleChange, importSubtitle } = this.props;
    return (
      <label htmlFor="importSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="importSubtitle"
          value={ importSubtitle }
          id="importSubtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importSubtitle: PropTypes.string.isRequired,
};

export default ImportSubtitle;

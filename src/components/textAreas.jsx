import React from 'react';
import PropTypes from 'prop-types';

class TextAreas extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    const labelData = 'storyline-input-label';
    const inputData = 'storyline-input';

    return (
      <label data-testid={ labelData } htmlFor={ inputData }>
        Sinopse
        <textarea
          data-testid={ inputData }
          name={ name }
          value={ value }
          id={ inputData }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextAreas.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextAreas;

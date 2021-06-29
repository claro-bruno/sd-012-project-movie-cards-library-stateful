import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { initialValue, onChange } = this.props;
    return (
      <label htmlFor="inputsubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="inputsubtitle"
          type="text"
          data-testid="subtitle-input"
          value={ initialValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  initialValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;

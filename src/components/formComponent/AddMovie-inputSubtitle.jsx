import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="add-subtitle"
          data-testid="subtitle-input"
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Subtitle;

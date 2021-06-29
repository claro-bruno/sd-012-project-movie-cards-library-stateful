import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;

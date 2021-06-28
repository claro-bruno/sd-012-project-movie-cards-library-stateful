import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { handleArea, valueTextArea } = this.props;
    return (
      <p>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ handleArea }
            name="storyline"
            value={ valueTextArea }
          />
        </label>
      </p>
    );
  }
}

Storyline.propTypes = {
  valueTextArea: PropTypes.string.isRequired,
  handleArea: PropTypes.func.isRequired,
};

export default Storyline;

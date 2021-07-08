import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange2 } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange2 }
          name="storyline"
          id={ storyline }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default Storyline;

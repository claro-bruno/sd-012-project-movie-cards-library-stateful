import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { changeHandler, storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ changeHandler }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
};

Storyline.defaultProps = {
  storyline: 'undefined',
};

export default Storyline;

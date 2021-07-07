import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { changeHandler, storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
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
  changeHandler: PropTypes.func.isRequired,
  storyline: PropTypes.string,
};

Storyline.defaultProps = {
  storyline: 'undefined',
};

export default Storyline;

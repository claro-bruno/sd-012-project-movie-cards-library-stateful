import React from 'react';
import propTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.string,
};

Storyline.defaultProps = {
  handleChange: () => {},
  value: '',
};

export default Storyline;

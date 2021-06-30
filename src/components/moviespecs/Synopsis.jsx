import React from 'react';
import PropTypes from 'prop-types';

class Synopsis extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <textarea
          value={ value }
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Synopsis.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Synopsis;

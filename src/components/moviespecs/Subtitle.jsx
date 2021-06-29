import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="sutitle-input"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
Subtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default Subtitle;

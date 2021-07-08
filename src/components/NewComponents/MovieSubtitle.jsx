import React from 'react';
import PropTypes from 'prop-types';

class MovieSubtitle extends React.Component {
  render() {
    const { subtitle, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChangeFunction }

        />
      </label>
    );
  }
}

MovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChangeFunction: PropTypes.func.isRequired,
};

export default MovieSubtitle;

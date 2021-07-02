import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends React.Component {
  render() {
    const { subtitle, func } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ func }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = ({
  subtitle: PropTypes.string,
  func: PropTypes.func,
}).isRequired;

import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTextarea extends React.Component {
  render() {
    const { storyLine, func } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          value={ storyLine }
          onChange={ func }
        />
      </label>
    );
  }
}

AddMovieTextarea.propTypes = ({
  storyLine: PropTypes.string,
  func: PropTypes.func,
}).isRequired;

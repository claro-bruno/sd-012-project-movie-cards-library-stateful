import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends React.Component {
  render() {
    const { title, func } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ func }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = ({
  title: PropTypes.string,
  func: PropTypes.func,
}).isRequired;

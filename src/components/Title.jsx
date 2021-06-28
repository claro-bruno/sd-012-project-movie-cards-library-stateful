import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { props } = this;
    const { title, newCard } = props;

    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ newCard }
          data-testid="title-input"
          id="title"
        />
      </label>);
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  newCard: PropTypes.func.isRequired,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { changeHandler, title } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          name="title"
          value={ title }
          onChange={ changeHandler }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'undefined',
};

export default Title;

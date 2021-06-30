import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Title;

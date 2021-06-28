import React from 'react';

class Title extends React.Component {
  render() {
    const { title, handleChange, name } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name={ name }
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
export default Title;

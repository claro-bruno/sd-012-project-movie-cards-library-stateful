import React from 'react';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
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

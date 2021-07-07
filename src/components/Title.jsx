import React from 'react';

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

export default Title;

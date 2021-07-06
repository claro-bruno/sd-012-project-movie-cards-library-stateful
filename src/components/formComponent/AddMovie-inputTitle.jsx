import React from 'react';

class Title extends React.Component {
  render() {
    const {
      name,
      value,
      onChange
    } = this.props;

    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          id="add-title"
          data-testid="title-input"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Title;
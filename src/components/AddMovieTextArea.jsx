import React, { Component } from 'react';

export default class AddStory extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor={ name }>
        Sinopse
        <textarea
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
          name={ name }
        />
      </label>
    );
  }
}
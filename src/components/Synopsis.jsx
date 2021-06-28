import React from 'react';

class Synopsis extends React.Component {
  render() {
    const { storyline, name, handleChange } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <textarea
          value={ storyline }
          name={ name }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
export default Synopsis;

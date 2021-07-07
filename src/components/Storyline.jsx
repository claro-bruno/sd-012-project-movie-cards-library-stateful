import React from 'react';

class Storyline extends React.Component {
  render() {
    const { changeHandler, storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ changeHandler }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default Storyline;

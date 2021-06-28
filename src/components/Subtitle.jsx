import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="sutitle-input"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={ handleChange }
            value={ subtitle }
          />
        </label>
      </div>
    );
  }
}
export default Subtitle;

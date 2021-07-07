import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { changeHandler, subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ changeHandler }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default Subtitle;

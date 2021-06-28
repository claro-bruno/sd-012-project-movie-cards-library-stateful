import React from 'react';

class Button extends React.Component {
  render() {
    const { buttonTitle, dataTestid, click,  } = this.props;
    return (
      <section>
        <button type="button" data-testid={ dataTestid } onClick={ click }>{ buttonTitle }</button>
      </section>
    );
  }
}

export default Button;

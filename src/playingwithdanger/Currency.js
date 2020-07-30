import React from 'react';

class Currency extends React.Component {
  const money = new Intl
      .NumberFormat(this.props.locale,
          {
            style: 'currency',
            currency: this.props.currency
          })
      .format(this.props.value);
render() {
  return (
    <div className="currency">
      { money }
    </div>
  )
}
}


export default Currency;
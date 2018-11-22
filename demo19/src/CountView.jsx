import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

@observer
class CountView extends React.Component {
  render() {
    return(
      <div>
        <ButtonView symbol={true} count={this.props.count} />
        <span style={{ padding: '50px' }}>{this.props.count.number}</span>
        <ButtonView symbol={false} count={this.props.count}  />
      </div>
    )
  }
}

const ButtonView = observer(({count, symbol}) => {
  const handleClick = action(() => {
    count.number = symbol ? count.number + 1 : count.number - 1;
  });
  return(
    <button style={{ padding: '20px' }} onClick={handleClick}>
      {symbol ? '+' : '-'}
    </button>
  )
});

export default CountView;

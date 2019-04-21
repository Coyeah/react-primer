import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEmojisTotal } from '../actions';

class Emojis extends React.Component {
  render() {
    const {actions: {fetchEmojisTotal}, emojis} = this.props;
    let list = !!emojis ? Object.keys(emojis).splice(0, 15) : [];
    // let list = Object.keys(emojis);
    return (
      <div>
        <button onClick={fetchEmojisTotal}>emojis</button>
        <span style={{fontSize: 12, marginLeft: 20}}>点击获取 emojis 图标十个</span>
        <div style={{marginTop: 20}}>
          {list.map(value =>
            <img style={{width: 30, height: 30}} key={value} src={emojis[value]} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  emojis: state.fetchEmojis.emojis,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({fetchEmojisTotal}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Emojis);

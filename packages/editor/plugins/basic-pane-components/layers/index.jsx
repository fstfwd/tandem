import './index.scss';
import React from 'react';
import Node from 'common/node';
import LayerComponent from './layer.jsx';

class LayersPaneComponent extends React.Component {
  render() {
    return <LayerComponent node={this.props.app.currentSymbol} />;
  }
}

export default LayersPaneComponent;
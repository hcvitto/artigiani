import React, { Component } from 'react';
import * as routes from '../../config/routes.js';

import { getArtigiani } from '../../services/';

import Card from '../../components/common/card';

export default class Artigiani extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artigiani: [] 
    }
  }

  componentDidMount() {
    const a = getArtigiani()
    this.setState({
      artigiani: a
    })
  }

  componentWillUnmount() {

  }

  render() {
    const { artigiani } = this.state
    const lista = artigiani.map(d => <Card details={d} key={d.id} link={routes.ARTIGIANO + '/' + d.slug + '/' + d.id} /> )
    return (
      <div className="card-list">
        {lista}
      </div>
    )
  }
}


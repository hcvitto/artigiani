import React, { Component } from 'react';

import SocialBadge from '../../components/common/socialBadge';

import { getArtigiano } from '../../services/';

export default class Artigiano extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artigiano: {} 
    }
  }

  componentDidMount() {
    const a = getArtigiano(this.props.match.params.id)
    this.setState({
      artigiano: a
    })
  }

  componentWillUnmount() {

  }

  render() {
    const { artigiano } = this.state
    const social =  artigiano.socialLinks 
      ? artigiano.socialLinks.filter(s => {
          return s.url !== null
        }).map(s => <SocialBadge name={s.name} url={s.url} key={s.url} />)
      : null
    return (
      artigiano 
      ? <div className="scheda">
          <div className="img" style={{backgroundImage: "url(" + artigiano.img + ")"}}>
            <h1>{artigiano.name}</h1>
          </div>
          <div className="social-buttons">
            {social}
          </div>
          <div className="description">
            {artigiano.description}
          </div>
        </div>
      : 'Questa bottega non esiste'
    )
  }
}


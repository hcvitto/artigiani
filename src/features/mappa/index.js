import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { GOOGLE_MAPS_KEY } from '../../config/maps';

import * as routes from '../../config/routes';

import { getArtigiani } from '../../services/artigiani';

const MappaIn = withScriptjs(withGoogleMap((props) => 
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
  >
    {
      props.artigiani.map(a => {
        const onClick = props.onClick.bind(this, a)
        return (
          <Marker position={a.geo} key={a.id} onClick={onClick}>
            {
              props.openMarker === a &&
              <InfoWindow>
                <h3><Link to={routes.ARTIGIANO + '/' + a.slug + '/' + a.id}>{a.name}</Link></h3>
              </InfoWindow>
            }
          </Marker>
        )
      })
    }
  </GoogleMap>
))

export default class Mappa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlace: {
        name: 'milano'
      },
      center: {
        lat: 45.464211,
        lng: 9.191383
      },
      artigiani: [],
      openMarker: false
    }
    this.openMarker = this.openMarker.bind(this)
  }

  componentDidMount() {
    this.setState({
      artigiani: getArtigiani()
    })
  }

  openMarker(marker) {
    this.setState({
      openMarker: marker
    })
  }



  render() {
    return <MappaIn
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      center={this.state.center}
      artigiani={this.state.artigiani}
      onClick={this.openMarker}
      openMarker={this.state.openMarker}
    />
  }
}
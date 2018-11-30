import React from 'react';

export default function SocialBadge(props) {
  return <a className={'icon-' + props.name} href={props.url} target="blank">{props.name}</a>
}
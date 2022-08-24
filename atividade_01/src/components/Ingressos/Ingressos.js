import React from 'react';
import './Ingressos.css'

export default function Evento({
  title,
  camaroteOpen,
  camarote,
  frontStage,
  pista
}) {
  //const {name} = props;
  return (
      <div>
      <h1>{title}</h1>
          <ul>
              <li>Camarote: (openBar): {camaroteOpen }</li>
              <li>Camarote: {camarote }</li>
              <li>Front-stage: {frontStage }</li>
              <li>Pista: {pista}</li>
          </ul>
    </div>
  )
}
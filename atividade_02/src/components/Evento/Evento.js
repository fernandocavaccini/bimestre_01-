import React from 'react';
import './Evento.css'

export default function Evento({
  name,
  data,
  horario,
  local,
  cidade,
  genero
}) {
  //const {name} = props;
  return (
    <div>
      <h1>{name}</h1>
      <p><b>Data:</b> {data }</p>
      <p><b>Horário:</b> {horario }</p>
      <p><b>Local:</b> {local }</p>
      <p><b>Cidade:</b> {cidade }</p>
      <p><b>Gênero:</b> {genero}</p>
    </div>
  )
}
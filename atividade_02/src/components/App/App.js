import './App.css';
import data from './data';
import Evento from '../Evento/Evento';
import Ingressos from '../Ingressos/Ingressos';
import dataTicket from './dataTicket';

function App() {
  return (
    <div className="container">
    <>
      <div className="wrapper">
      {data.map(evento => (
        <Evento
          key={evento.name}
          name={evento.name}
          data={evento.data}
          horario={evento.horario}
          local={evento.local}
          cidade={evento.cidade}
          genero={evento.genero} />
      ))}
    </div>
    <div className="wrapper">
      {dataTicket.map(ingressos => (
        <Ingressos
          key={ingressos.title}
          title={ingressos.title}
          camarote={ingressos.camarote}
          camaroteOpen={ingressos.camaroteOpen}
          frontStage={ingressos.frontStage}
          pista={ingressos.pista} />
      ))}
        </div></>
      </div>
  );
   
}

export default App;

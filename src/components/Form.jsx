import { useState } from "react";

export default function Form() {
  const [nombre, setNombre] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      setEnviado(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {enviado && <p>Gracias, {nombre}!</p>}
    </form>
  );
}

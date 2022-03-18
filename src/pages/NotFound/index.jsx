import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const history = useNavigate();
  return (
    <div>
      <h1>Ops, você entrou em uma url que não existe :/</h1>
      <button type="button" onClick={history.goBack}>VOLTAR</button>
    </div>
  );
}

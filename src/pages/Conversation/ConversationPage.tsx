import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ConversationPage = () => {
  const { id } = useParams();

  const groupName = "Nom du groupe"; // a dynamiser

  return (
    <div className="conversation-page">
      <div className="header">
        <h2>{groupName}</h2>
        <Link to="/">Retour</Link>
      </div>
      <div className="central">
        {/* Composant pour afficher les messages */}
      </div>
      <div className="footer">
        {/* Barre de saisie de texte */}
      </div>
    </div>
  );
}

export default ConversationPage;

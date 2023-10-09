import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import styles from './Detail.module.css';
import Rectangle from '../components/Rectangle'; // Importez le composant Rectangle

function Detail() {
  // Obtenez l'ID à partir des paramètres d'URL
  const { id } = useParams();

  // Recherchez le logement avec l'ID correspondant dans les données
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      {/* Carrousel d'images */}
      <div className={styles.carousel}>
        {/* Affichez images ici */}
      </div>

      {/* Titre */}
      <h1>{logement.title}</h1>

      {/* Host */}
      <div className={styles.host}>
        <img src={logement.host.picture} alt={logement.host.name} />
        <p>{logement.host.name}</p>
      </div>

      {/* Location */}
      <p>{logement.location}</p>

      {/* Tags */}
      <div className={styles.tags}>
        {logement.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Deux rectangles sur la même ligne */}
      <div className={styles.rectangles}>
        {/* Premier rectangle avec une largeur différente */}
        <Rectangle
          title="Rectangle 1"
          isExpanded={false} // Vous pouvez définir ici si le rectangle doit être étendu par défaut
          grayText="Contenu du Rectangle 1"
        />

        {/* Deuxième rectangle avec une autre largeur */}
        <Rectangle
          title="Rectangle 2"
          isExpanded={false} // Vous pouvez définir ici si le rectangle doit être étendu par défaut
          grayText="Contenu du Rectangle 2"
        />
      </div>
    </div>
  );
}

export default Detail;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import styles from './Detail.module.css';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import Carousel from '../components/Carousel';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find((logement) => logement.id === id);
    if (!foundLogement) {
      // Redirection vers la page d'erreur si l'ID n'est pas trouvé
      navigate('/error');
    } else {
      // Mise à jour de l'état du composant avec le logement trouvé
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  if (!logement) {
    return null;
  }
  const rectanglesData = [
    { title: 'Fiabilité', grayText: ' Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', grayText: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locatairen cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' },
  ];
  return (
    <div>
      <div className={styles.detailPage}>

        <Carousel images={logement.pictures} />
        <div className={styles.title_photo}>
        <div className={styles.title}>{logement.title}</div>
          <div className={styles.host}>
          <div className={styles.host_name}>{logement.host.name}</div>
            <img src={logement.host.picture} alt={logement.host.name} />

          </div>
        </div>
        <div className={styles.location}>{logement.location}</div>

        <div className={styles.tag_rating}>
          <div className={styles.tags}>
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
          <div className={styles.rating}>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className={styles.rectangles}>
          <div className="container">
            <Collapse
              key={1}
              title="Description"
              grayText={logement.description}
              width="580px"
            />
          </div>
          <div className="container">
            <Collapse
              key={2}
              title="Équipement"
              grayText={logement.equipments.map((equipment) => (
                <span key={equipment}>
                  {equipment}
                  <br />
                </span>
              ))}
              width="580px"
            />
          </div>

        </div>



      </div>
    </div>
  );
}

export default Detail;

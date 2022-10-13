import Popup from './Popup';

export default function ImagePopup({ card, onClose }) {
  return (
    <Popup isOpen={Object.keys(card).length} onClose={onClose}>
        <figure className="card-image__box">
          <img className="card-image__img" src={card.link} alt={card.name} />
          <figcaption className="card-image__caption">{card.name}</figcaption>
        </figure>
    </Popup>
  );
}

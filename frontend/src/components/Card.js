import { useContext } from 'react';
import { CurrentUserInfo } from '../contexts/CurrentUserContext';

export default function Card({ data, onCardClick, onCardLike, onCardDelete }) {
  const user = useContext(CurrentUserInfo);
  const isOwn = data.owner._id === user._id;
  const isLiked = data.likes.some(like => like._id === user._id);

  const handleClick = () => {
    onCardClick(data);
  };

  const handleLikeClick = () => {
    onCardLike(data);
  };

  const handleCardDelete = () => {
    onCardDelete(data);
  };

  return (
    <article className="card">
      <img
        src={data.link}
        alt={data.name}
        className="card__img"
        onClick={handleClick}
      />
      <h2 className="card__title">{data.name}</h2>
      <div className="card__like-box">
        <button
          className={`card__like ${isLiked && 'card__like_active'}`}
          type="button"
          aria-label="Нравится."
          onClick={handleLikeClick}
        ></button>
        <span className="card__like-number">{data.likes.length}</span>
      </div>
      {isOwn && (
        <button
          className="card__del"
          type="button"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      )}
    </article>
  );
}

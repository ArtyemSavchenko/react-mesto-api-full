import { useContext } from 'react';
import Card from './Card';
import { CurrentUserInfo } from '../contexts/CurrentUserContext';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards
}) {
  const user = useContext(CurrentUserInfo);

  return (
    <main className="page__content">
      <section className="profile page__section">
        <div className="profile__user-pic-box" onClick={onEditAvatar}>
          <img
            className="profile__user-pic"
            src={user.avatar}
            alt="Картинка профиля."
          />
        </div>

        <div className="profile__user-info-box">
          <h1 className="profile__name">{user.name}</h1>
          <button
            className="profile__edit-btn"
            type="button"
            onClick={onEditProfile}
            aria-label="Рекдатировать профиль."
          ></button>

          <p className="profile__about">{user.about}</p>
        </div>
        <button
          className="profile__add-card"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить карточку."
        ></button>
      </section>

      <section className="cards page__section" aria-label="Места.">
        {cards.map(data => (
          <Card
            key={data._id}
            data={data}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

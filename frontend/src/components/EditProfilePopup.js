import { useState, useContext, useEffect } from 'react';
import { CurrentUserInfo } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading
}) {
  const currentUser = useContext(CurrentUserInfo);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  };

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      btnText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="text"
        id="user-name-input"
        className="popup__input popup__input_type_name"
        name="input-user-name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <span className="popup__input-error user-name-input-error"></span>
      <input
        type="text"
        id="user-about-input"
        className="popup__input popup__input_type_about"
        name="input-user-about"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <span className="popup__input-error user-about-input-error"></span>
    </PopupWithForm>
  );
}

import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading
}) {
  const [avatarUrl, setAvatarUrl] = useState('qwe');

  useEffect(() => {
    if (isOpen) {
      setAvatarUrl('');
    }
  }, [isOpen])

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(avatarUrl);
  };

  return (
    <PopupWithForm
      name="user-pic-update"
      title="Обновить аватар"
      btnText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="url"
        id="user-pic-url-input"
        className="popup__input popup__input_type_user-pic-url"
        name="input-user-pic-url"
        placeholder="Ссылка на картинку"
        required
        value={avatarUrl}
        onChange={e => setAvatarUrl(e.target.value)}
      />
      <span className="popup__input-error user-pic-url-input-error"></span>
    </PopupWithForm>
  );
}

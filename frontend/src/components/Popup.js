import { useCallback, useEffect } from 'react';

export default function Popup({ isOpen, onClose, children, window }) {
  const handlerOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePressEsc = useCallback(e => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keyup', handlePressEsc);
    } else {
      document.removeEventListener('keyup', handlePressEsc);
    }
  }, [isOpen]);

  return (
    <div
      className={`popup${isOpen ? ' popup_active' : ''}`}
      onMouseDown={handlerOverlayClick}
    >
      <div className={window ? 'popup__window' : 'popup__content-box'}>
        {children}
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть форму."
          onClick={onClose}
        />
      </div>
    </div>
  );
}

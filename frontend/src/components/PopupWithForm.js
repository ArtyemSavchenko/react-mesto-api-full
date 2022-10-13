import Popup from './Popup';

export default function PopupWithForm({
  name,
  title,
  children,
  btnText,
  onSubmit,
  isLoading,
  ...restProps
}) {
  return (
    <Popup window {...restProps}>
      <h3 className="popup__title">{title}</h3>
      <form
        className="popup__form"
        name={name}
        autoComplete="off"
        // noValidate
        onSubmit={onSubmit}
      >
        {children}
        <button
          className="popup__submit-btn"
          type="submit"
          disabled={isLoading}
        >
          {btnText}
        </button>
      </form>
    </Popup>
  );
}

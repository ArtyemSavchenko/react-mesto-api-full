import Popup from './Popup';
import successIcon from '../images/icon-success.svg';
import failureIcon from '../images/icon-failure.svg';

export default function InfoTooltip({ isOpen, onClose }) {
  return (
    <Popup window isOpen={isOpen.isOpened} onClose={onClose}>
      {isOpen.successStatus ? (
        <div className="reg-info">
          <img className="reg-info__img" src={successIcon} alt="Иконка с галочкой." />
          <p className="reg-info__text">Вы успешно зарегистрировались!</p>
        </div>
      ) : (
        <div className="reg-info">
          <img className="reg-info__img" src={failureIcon} alt="Иконка с крестиком." />
          <p className="reg-info__text">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        </div>
      )}
    </Popup>
  );
}

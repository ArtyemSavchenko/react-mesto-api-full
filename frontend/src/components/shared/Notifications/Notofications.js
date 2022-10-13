import Notification from './Notification';
import styles from './Notofications.module.css';

const Notofications = ({ notifications, delayClose }) => {
  return (
    <div className={styles.notifications}>
      {notifications.list.map(item => (
        <Notification
          {...item}
          key={item.id}
          onClose={notifications.closeNotification}
          delayClose={(item.delayClose || item.delayClose === 0) ? item.delayClose : delayClose }
        />
      ))}
    </div>
  );
};

export default Notofications;

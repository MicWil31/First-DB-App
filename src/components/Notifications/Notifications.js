import React, { useState } from "react";
import styles from "./Notifications.module.scss";

const Notifications = () => {
  let [notifications, setNotification] = useState([]);

  return (
    <section className={styles.NotificationsWrapper}>
      <h2 className={styles.HeaderCopy}>Notifications</h2>
      <hr />

      {notifications.length === 0 && (
        <p className={styles.NoNotification}>No notifications</p>
      )}
    </section>
  );
};

export default Notifications;

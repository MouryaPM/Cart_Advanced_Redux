import styles from "./Notification.module.css";
const Notification = (props) => {
  let cssClasses = "";
  if (props.status === "error") {
    cssClasses = styles.error;
  }
  if (props.status === "success") {
    cssClasses = styles.success;
  }
  const notificationCss = `${styles.notification} ${cssClasses}`;

  return (
    <section className={notificationCss}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
export default Notification;

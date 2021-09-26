// import Toast from "./Toast";
import classes from "./UserCard.module.css";
function UserCard(props) {
  // var toastMsg = "";
  function removeUser() {
    if (window.confirm("Remove this user?" + props.userEmail)) {
      fetch(
        "http://3.6.93.159:7883/machstatz/delete_existing_user?email=" +
          props.userEmail,
        { method: "DELETE" }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          // toastMsg = "deleted";
        })
        .catch((error) => console.log(error));
      console.log(props.userName);
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button onClick={removeUser} className={classes.deleteBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
            <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
          </svg>
        </button>
      </div>
      <div className={classes.userDetails}>
        <div className={classes.nameBubble}>{props.userName[0]}</div>
        <div classes={classes.userName}>{props.userName}</div>
        {/* <Toast msg={toastMsg} /> */}
      </div>
    </div>
  );
}

export default UserCard;

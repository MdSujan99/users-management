import UserCard from "./UserCard";
import { useEffect } from "react";
import { useState } from "react";

import classes from "./UsersView.module.css";
function UsersView(props) {
  const [isLoading, setIsLoaded] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const myAPI = location.protocol + "//3.6.93.159:7883/machstatz/get_all_users";

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(myAPI)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(false);
        // console.log(data);
        setLoadedData(data);
      })
      .catch((error) => {
        console.log("Error in fetch:", error);
      });
  }, []);
  // without useEffect:-
  // fetch(myAPI)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setIsLoaded(false);
  //     // console.log(data);
  //     setLoadedData(data);
  //   })
  //   .catch((error) => {
  //     console.log("Error in fetch:", error);
  //   });

  if (isLoading) {
    return (
      <div>
        <h3>Loading Data</h3>
      </div>
    );
  }
  const users = loadedData.length;
  var rows = [];
  for (var i = 0; i < users; i++) {
    rows.push(
      <UserCard
        key={loadedData[i]._id.$oid}
        userEmail={loadedData[i].email}
        userName={loadedData[i].username || "n/a"}
      />
    );
    // console.log(loadedData[i]._id.$oid);
  }
  return (
    <div className={classes.container}>
      <h1>Users In the Database:-</h1>
      <div className={classes.cards}>{rows}</div>
    </div>
  );
}

export default UsersView;

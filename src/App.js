import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ListOfUser from "./Component/ListOfUser";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result.data);
      setUsers(result.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <ListOfUser users={users} />
    </div>
  );
};

export default App;

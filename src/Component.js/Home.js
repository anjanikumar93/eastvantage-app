import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => setData(response.data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main_container">
      <table className="name_table">
        <tr>
          <th className="full_name">Full Name</th>
          <th className="email_text">Email</th>
        </tr>

        {data.map((item) => (
          <tr key={item.id}>
            <td className="full_name">
              {item.name.title} {item.name.first} {item.name.last}
            </td>
            <td className="email_text">{item.email}</td>
          </tr>
        ))}
      </table>
      <button className="btn_change" onClick={fetchData}>Change Name</button>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";

const F8 = () => {
  const [dataDoctor, setDataDoctor] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://tc-covid-json-server.herokuapp.com/doctors/")
        .then((response) => {
          let data = response && response.data ? response.data : [];
          setDataDoctor(data);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return (
    <div>
      {dataDoctor &&
        dataDoctor.length > 0 &&
        dataDoctor.map((item, index) => {
          return (
            <div key={item._id}>
              <div>{item.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default F8;

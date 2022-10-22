import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState(false);
  useEffect(() => {
    try {
      axios
        .get(
          url
        )
        .then((response) => {
          let data = response && response.data ? response.data.reverse() : [];
          setData(data);
          setLoading(true);
          setMessageError(false);
        })
        .catch((error) => {});
    } catch (e) {
      setMessageError(true);
      console.log(e.message);
    }
  }, []);

  return {data, loading, messageError};
};

export default useFetch;

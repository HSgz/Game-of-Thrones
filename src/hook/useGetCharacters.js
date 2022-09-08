import { useEffect, useState } from "react";
import axios from "axios";

const useGetCharacters = (URL) => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(URL);
      setPerson(response.data);
    }
    fetchData();
  }, []);
  return person;
};

export default useGetCharacters;

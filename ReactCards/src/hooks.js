import { useState } from "react";
import axios from "axios";

// Custom hook for flipping cards
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped((flipState) => !flipState);
  };

  return [isFlipped, toggleFlip];
}

// Custom hook for making AJAX requests using axios
function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  // Function to add data by calling an API
  const addData = async (urlSuffix = "") => {
    const response = await axios.get(`${baseUrl}${urlSuffix}`);
    setData((data) => [...data, { ...response.data }]);
  };

  return [data, addData];
}

export { useFlip, useAxios }; // Export both functions

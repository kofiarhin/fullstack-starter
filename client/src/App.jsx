import { useEffect } from "react";
import { BASE_URL } from "./constants/constants";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(BASE_URL);
      if (res.ok) {
        console.log("connected to server");
      }
    };

    getData();
  }, []);
  return <div>App</div>;
};

export default App;

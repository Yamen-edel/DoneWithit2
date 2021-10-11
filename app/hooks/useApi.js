import { useState } from "react";

//instead of writing this repetitive code inside the component everytime when calling the server/ making an API call- simply using hooks we can encapsulate some state and logic around that state inside this reusable function
export default function UserApi (apiFunc)  {
  const [data, setData] = useState([]); // to store data/listings that we get from server
  const [error, setError] = useState(false);
  // call the api when this component is rendered, async function cannot get passed within useEffect so we put them in a seperate function
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);
    console.log("loading stopped");
    if (!response.ok) {
      console.log("response is not ok");
      setData(response.data);
      console.log(data);
      return setError(true);

    }
    setError(false);
    console.log("it's workkkkkkkking");
    setData(response.data);
  };
  return { data, error, loading, request };
};

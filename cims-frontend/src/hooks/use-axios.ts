import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const useAxios = (
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options",
  body: any = null,
  headers: any = null
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios[method](
          url,
          JSON.parse(headers),
          JSON.parse(body)
        );
        setResponse(res.data);
      } catch (err: any) {
        setError(`${err}`);
      } finally {
        setloading(false);
      }
    }
    fetchData();
  }, [url, method, body, headers]);

  return { response, error, loading };
};

export default useAxios;

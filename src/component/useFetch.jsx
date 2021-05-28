import { useState, useEffect } from "react";

const useFetch = ( url ) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abourtControler = new AbortController();

    setTimeout(() => {
      fetch( url, { signal : abourtControler.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resources");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIspending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === "AbortError"){
            console.log("fetch Abourted");
          }else{
            setError(err.message);
            setIspending(false);
          }
         
        });
    }, 1000);
    return (()=> abourtControler.abort());
  }, [url]);
  return { data, isPending , error } 
};
export default useFetch;

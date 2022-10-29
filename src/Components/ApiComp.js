import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/customHooks";

const ApiComp = () => {
  const [category, setCategory] = useState("posts");
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     await fetch(`https://jsonplaceholder.typicode.com/${category}`)
  //       .then((response) => response.json())
  //       .then((json) => setApiData(json));
  //   })();
  // }, [category]);


  // onPrintHandler = () => {
        // switch(type): 
        // case posts: 
        // return {apiData.map((data) => (
        //   <div>
        //     <pre>{data.userID}</pre>
        //     <pre>{data.body ?? data.title}</pre>
        //   </div>
        // ))}
  // }
  
  const {apiData} = useFetch(`https://jsonplaceholder.typicode.com`, category)

  return (
    <div>
      <div>
        <button onClick={() => setCategory("posts")}>Posts</button>
        <button onClick={() => setCategory("todos")}>Todos</button>
        <button onClick={() => setCategory("comments")}>Comments</button>
      </div>
      <div>
        {apiData.map((data) => (
          <div>
            <pre>{data.id}</pre>
            <pre>{data.body ?? data.title}</pre>
          </div>
        ))}
        {/* {onPrintHandler()} */}
      </div>
    </div>
  );
};

export default ApiComp;

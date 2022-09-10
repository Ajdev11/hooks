import React, { useState, useEffect } from "react";
import axios from "axios";
//fetching individul post
function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("There is an error with this posts");
      });
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h2>{post.title}</h2>
    </div>
  );
}

export default DataFetching2;

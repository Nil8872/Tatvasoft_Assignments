import React, { useEffect, useState } from "react";
import axios from "axios";

function PostDetail() {
  const [id, setId] = useState(1);
  const [data, setData] = useState("");
  const [changeIdOnClick, setChangeIdOnClick] = useState(id);

  const changeHandler = (e) => {
    setId(e.target.value);
  };
  const url = "https://jsonplaceholder.typicode.com/posts/";
  useEffect(() => {
    axios
      .get(`${url}${changeIdOnClick}`)
      .then((response) => {
        setData(response.data.title);
      })
      .catch(() => {
        console.log("Some error occur in Data fetching...");
      });
  }, [changeIdOnClick]);

  const onClickHandler = () =>{
    setChangeIdOnClick(id);
  }

  return (
    <div>
      <input
        className="input"
        style={{ width: "350px" }}
        value={id}
        type="number"
        onChange={changeHandler}
      />
      <div>
        <button className="btn" onClick={onClickHandler}>Click Me</button>
      </div>
      <div className="container" style={{ width: "500px" }}>
        <h1>{data}</h1>
      </div>
    </div>
  );
}

export default PostDetail;

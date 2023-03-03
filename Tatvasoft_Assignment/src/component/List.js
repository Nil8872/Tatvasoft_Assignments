import React from "react";

function List() {

    // Day - 6 here Creating array
  const articles = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet",
      description:
        "  debitis in soluta blanditiis, consectetur adipisicing elit.Omnis maxime",
    },
    {
      id: 2,
      title: "ipsum dolor sit amet",
      description:
        "consectetur adipisicing elit.Omnis maxime Lorem ipsum dolor sit amet consectetur ",
    },
    {
      id: 3,
      title: "dolor sit amet",
      description:
        "consectetur adipisicing elit.Omnis maxime Quibusdam, aliquam! Cumque nisi omnis ",
    },
    {
      id: 4,
      title: "sit amet",
      description:
        "consectetur adipisicing elit.Omnis maxime Omnis maxime velit earum.",
    },
    {
      id: 5,
      title: "sit amet",
      description:
        "consectetur adipisicing elit.Omnis maxime Omnis maxime velit earum.",
    },
    {
      id: 6,
      title: "sit amet",
      description:
        "consectetur adipisicing elit.Omnis maxime Omnis maxime velit earum.",
    },
  ];

  return (
    <>
      <div className="main-Box">
        {/* map method */}
        {articles.map((item) => {
          return (
            <div className="box" key={item.id}>
              <h1 className="title">{item.title}</h1>
              <div className="desc">{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;

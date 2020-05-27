import React from "react";

export default function StartUpCard({ id, image, name, description }) {
  // default image fallback for broken links
  const addDefaultSrc = (e) => {
    e.target.src =
      "https://res.cloudinary.com/webweavers/image/upload/v1589062565/default_mdgavw.jpg";
  };

  return (
    <div className="row px-5" key={id}>
      <div className="col">
        <img
          style={{ height: "80px", width: "100px" }}
          className="mb-5 ml-5"
          src={image}
          onError={addDefaultSrc}
          alt="startup image"
        />
      </div>
      <div className="col">
        <div className="d-flex flex-column">
          <p className="text-dark" style={{ color: "black" }}>
            <strong>{name}</strong>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

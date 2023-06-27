import React from "react";
import Chip from "@mui/material/Chip";
import { ReactComponent as Img } from "../../assets/xyz.svg";
import "./Card.css";

const Card = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { image, follows, title, slug, songs } = data;
      return (
        <div className="card">
          <img
            className="album-img"
            src={image}
            alt="album"
            width="200px"
            height="200px"
          />
          <div className="banner">
            <Chip className="chip" label={`${follows} Follows`} />
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
      );
    }
    case "song": {
    }
    default: {
    }
  }
};

export default Card;

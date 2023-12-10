import React from "react";
import shari from "./shari.jpeg";
const NewsItem = (props) => {
  return (
    <div className="my-2">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {props.source} </span>
        </div>
        <img
          src={!props.imageUrl ? shari : props.imageUrl}
          className="card-img-top img-fluid"
          alt="Not Available"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}... </h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

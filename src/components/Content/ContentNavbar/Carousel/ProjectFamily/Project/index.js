import React, { useState } from "react";
import "./Project.scss";
import Loader from "./Loader"
import axios from "axios"

const Project = props => {
  const [loading, setLoading] = useState(false)
  const redirectToURL = (link) => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      axios.get(link).then(resp => {
        return resp
      }).catch(err => {
        resolve(link)
        console.clear();
        setLoading(false)
      })
    })
  }
  return (
    <div className="project">
      {loading ? <Loader /> :
        <><div className="img-box">
          <img src={props.imgSrc}>{ }</img>
        </div>
          <div className="desc-box">
            <div className="desc">
              <p>{props.description}</p>
            </div>
            <button onClick={() => {
              redirectToURL(props.link).then(res => {
                window.open(res, "_blank")
              })
            }}>VIEW DEMO</button>
            <button >VIEW REPO</button>
          </div>
        </>
      }
    </div>
  );
};

Project.propTypes = {};

export default Project;


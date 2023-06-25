import "./stack.css";
import aws from "./images/aws.svg"
import cloud from "./images/cloud.svg"
import angular from "./images/angular.svg"
import css from "./images/css.svg"
import html from "./images/html.svg"
import js from "./images/javascript.svg"
import php from "./images/php.svg"
import phyton from "./images/phyton.svg"
import react from "./images/react.svg"
import ruby from "./images/ruby.svg"
import leaf from "./images/leaf.svg"
import mysql from "./images/mysql.svg"
import postsql from "./images/post-sql.svg"
import sqlserver from "./images/sql-server.svg"

function Stack() {
  return (
    <div className="stack-container">
      <div className="stack-grid">
        <img src={aws} />
        <img src={cloud} />
        <img src={angular} />
        <img src={css} />
        <img src={html} />
        <img src={js} />
        <img src={php} />
        <img src={phyton} />
        <img src={react} />
        <img src={ruby} />
        <img src={leaf} />
        <img src={mysql} />
        <img src={postsql} />
        <img src={sqlserver} />
      </div>
    </div>
  );
}

export default Stack;

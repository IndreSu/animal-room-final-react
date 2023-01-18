import { useState, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="Menu">
      <Link to="/">Animal list</Link>
      &nbsp;|&nbsp;
      <Link to="/create">Create new animal</Link>
    </div>
  );
}

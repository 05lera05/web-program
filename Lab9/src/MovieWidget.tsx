import React from "react";
import ReactDOM from "react-dom/client";
import MovieDetails from "./MovieDetails";

class MovieWidget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    ReactDOM.createRoot(mountPoint).render(
      <React.StrictMode>
        <MovieDetails />
      </React.StrictMode>
    );
  }
}

customElements.define("movie-details-widget", MovieWidget);

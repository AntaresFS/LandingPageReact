import React from "react";

//Componente Jumbotron

const Jumbotron = () => {
  return (
    <div className="p-5">
      <div className="bg-light p-5 rounded border">
        <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
      </div>
    </div>

  );
};

export default Jumbotron;
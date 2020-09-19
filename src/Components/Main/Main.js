import React from 'react';

const Main = (props) =>{
  return (
    <section className="container">
        <h1 className="main__title">Привет <span>{props.text}</span></h1>
    </section>
  );
}

export default Main;
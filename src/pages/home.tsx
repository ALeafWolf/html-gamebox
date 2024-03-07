import React from "react";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `Game Box - Home`;
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome to Home Page</h1>
    <img src={process.env.PUBLIC_URL + '/左然装修.png'} alt="working" />
    </div>
  );
};

export default HomePage;

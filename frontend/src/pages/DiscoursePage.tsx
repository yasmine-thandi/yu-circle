import React from "react";

import Header from "../components/Header";

const DiscoursePage: React.FC = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col items-center">

      <p className="text-red text-3xl p-8 m-8 border b-red rounded-full">
        Hello, from discourse page
      </p>
    </main>
    </>
  );
};

export default DiscoursePage;
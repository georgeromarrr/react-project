import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto my-4 text-sm px-3 text-black text-center">
      © 2022 Space X. All Rights Reserved | Handfully created by{" "}
      <a href="https://github.com/georgeromarrr">
        <span className="font-semibold">georgeromarrr</span>
      </a>
    </div>
  );
};

export default Footer;

import React from "react";
import Link from "next/Link";
const navbar = () => {
  const styles = {
    display: "flex",
    background: "#000",
    justifyContent: "space-between",
    padding: "1rem",
    color: "#fff",
  };

  return (
    <nav style={styles}>
      <Link href="/">
        <a>Index Page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact us</a>
      </Link>
    </nav>
  );
};

export default navbar;

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
      <Link href="/">Index Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact us</Link>
    </nav>
  );
};

export default navbar;

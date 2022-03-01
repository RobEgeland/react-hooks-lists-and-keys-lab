import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((nav) => {
    console.log(nav)
    let ar = ['#', nav]
    return <a key={nav} href={ar.join('')}>{nav}</a>
  })


  return <nav>{linkElements}</nav>;
}

export default NavBar;

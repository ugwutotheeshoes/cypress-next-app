import Link from "next/link";
import { useState } from "react";

export default function Home() {
//   const [toggle, setToggle] = useState(false)
//  const toggleButton = () =>{
//    setToggle(!toggle)
//  }
  return (
    <nav>
      <Link href="/about">
        <a className="btn-primary" >Click here to go to the About page</a>
      </Link>
    </nav>
  );
}

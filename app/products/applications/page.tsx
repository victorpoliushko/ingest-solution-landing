import Link from "next/link";
import React from "react";

function Application() {
  return (
    <div className="">
      <h1>Our apps</h1>
      <ul>
        <li>
          <Link href="applications/1">Invapp</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="applications/2">Giraffe</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="applications/3">Cat app</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="applications/4">Education for everyone</Link>
        </li>
      </ul>
    </div>
  );
}

export default Application;

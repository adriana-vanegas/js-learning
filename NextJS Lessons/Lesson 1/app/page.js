import { useState } from "react";

function Header(props) {
  return;
  <h1>{props.title ? props.title : "Hello!"}</h1>;
}

function HomePage() {
  const names = ["Adri", "Mami", "Paco"];
  const [like, setLikes] = useState(0);

  function handleClick() {
    console.log("increment like count");
    setLikes(like + 1);
  }
  return (
    <div>
      <header title="Hey" />
      <header />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <button onClick="{handleClick}">Like ({like})</button>
    </div>
  );
}

export default function HomePage() {}

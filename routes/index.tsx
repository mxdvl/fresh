/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <h1>Working out performance</h1>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>This is a small project to analyse Browser performance</p>

      <Counter start={3} />

      <ul>
        {["Chris", "Max"].map((name) => (
          <li>
            <a href={`/${name}`}>Hello {name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

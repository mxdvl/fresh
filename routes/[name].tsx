/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet({ params }: PageProps) {
  return <div>Hello {params.name}</div>;
}

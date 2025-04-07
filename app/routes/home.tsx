import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import BadgeReveal from "../components/hex";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
  {/* <Welcome /> */}
  <h1>Testing</h1>
  <BadgeReveal progress={100} />
  </>;
}

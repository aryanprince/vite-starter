import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl">About page</h1>
      <Link to={"/"} className="underline underline-offset-4">
        Go to homepage
      </Link>
    </>
  );
}

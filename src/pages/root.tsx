import { Link } from "react-router-dom";

export default function RootPage() {
  return (
    <>
      <h1 className="text-3xl">Root page</h1>
      <Link to={"/about"} className="underline underline-offset-4">
        Go to About
      </Link>
    </>
  );
}

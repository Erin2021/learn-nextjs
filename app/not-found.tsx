import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Not Found',
}
const notfound = () => {
  return (
    <div>
      <h1>Not Fount</h1>
    </div>
  );
}
export default notfound
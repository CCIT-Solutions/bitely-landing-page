import { Metadata } from "next";
import dynamic from "next/dynamic";
const Support = dynamic(() => import("@/modules/support"));

export const metadata: Metadata = {
  title: "Bitely - Support",
};

function page() {
  return <Support />;
}
export default page;

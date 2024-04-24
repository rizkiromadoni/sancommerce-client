import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(`${url}`);

  return res.json();
}

export default getBillboards;
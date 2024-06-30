import Adminui from "./admin";
import getDataResult from "./getData";

export default async function Admin({ searchParams: { sort } }) {
  const data = await getDataResult(sort);

  if (data.success === false) return <>Error: {data.message}</>;

  return <Adminui data={data.data} />;
}

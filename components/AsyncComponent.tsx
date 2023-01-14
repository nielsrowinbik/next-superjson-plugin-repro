import { ServerComponent } from "@/components/ServerComponent";
import { fetchData } from "@/lib/data";

export async function AsyncComponent() {
  const data = await fetchData();

  return <ServerComponent data={data} />;
}

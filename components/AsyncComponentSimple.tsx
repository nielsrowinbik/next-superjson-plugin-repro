import { ClientComponent } from "@/components/ClientComponent";
import { fetchData } from "@/lib/data";

export async function AsyncComponentSimple() {
  const data = await fetchData();

  return <ClientComponent data={data} data-superjson />;
}

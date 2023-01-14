import { ClientComponent } from "./ClientComponent";
import { ServerComponentWithChildren } from "./ServerComponentWithChildren";
import { fetchData } from "@/lib/data";

export async function DataComponent() {
  const data = await fetchData();

  return (
    <ServerComponentWithChildren>
      <ClientComponent data={data} data-superjson />
    </ServerComponentWithChildren>
  );
}

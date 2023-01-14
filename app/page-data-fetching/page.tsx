import { ServerComponent } from "@/components/ServerComponent";
import { fetchData } from "@/lib/data";

export default async function Page() {
  const data = await fetchData();

  return (
    <main>
      <p>
        This page <u>fetches</u> data, and passes it as a prop to a Server
        Component, which in turn passes the data as a prop to a Client
        Component, which then renders the type of a field. It should render
        &quot;object&quot;, not &quot;string&quot;.
      </p>
      <ServerComponent data={data} />
    </main>
  );
}

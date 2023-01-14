import { ClientComponent } from "@/components/ClientComponent";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <p>
        This page <u>imports</u> data, and passes it as a prop to a Client
        Component, which then renders the type of a field. It should render
        &quot;object&quot;, not &quot;string&quot; (which it does correctly).
      </p>
      <ClientComponent data={data} data-superjson />
    </main>
  );
}

import { ClientComponent } from "@/components/ClientComponent";
import { DataComponent } from "@/components/DataComponent";
import { ServerComponent } from "@/components/ServerComponent";
import { ServerComponentWithChildren } from "@/components/ServerComponentWithChildren";
import { Suspense } from "react";
import { fetchData } from "@/lib/data";

export default async function Home() {
  const data = await fetchData();

  return (
    <main>
      <h2>Server Component</h2>
      <p>Expecting &quot;object&quot;</p>
      <ServerComponent data={data} />
      <p>👍🏻</p>
      <h2>Client Component (without data-superjson)</h2>
      <p>Expecting &quot;string&quot; and Next.js warning in log</p>
      <ClientComponent data={data} />
      <p>👍🏻</p>
      <h2>Client Component (with data-superjson)</h2>
      <p>Expecting &quot;object&quot;</p>
      <ClientComponent data={data} data-superjson />
      <p>👍🏻</p>
      <h2>
        Server Component with nested Client Component (without data-superjson)
      </h2>
      <p>Expecting &quot;string&quot;</p>
      <ServerComponentWithChildren>
        <ClientComponent data={data} />
      </ServerComponentWithChildren>
      <p>👍🏻</p>
      <h2>
        Server Component with nested Client Component (with data-superjson)
      </h2>
      <p>Expecting &quot;object&quot;</p>
      <ServerComponentWithChildren>
        <ClientComponent data={data} data-superjson />
      </ServerComponentWithChildren>
      <p>👍🏻</p>
      <h2>
        Suspense Component with nested Client Component (with data-superjson)
      </h2>
      <p>Expecting &quot;object&quot;</p>
      <Suspense fallback={null}>
        {/* @ts-expect-error */}
        <DataComponent />
      </Suspense>
      <p>👎🏻</p>
    </main>
  );
}

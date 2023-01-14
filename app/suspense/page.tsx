import { AsyncComponent } from "@/components/AsyncComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <p>
        This page fetches no data, but renders an async Component via Suspense
        that does. It passes the data as a prop to a Server Component, which
        passes the data as a prop to a Client Component, which then renders the
        type of a field within the data. It should render &quot;object&quot;,
        not &quot;string&quot;.
      </p>
      <Suspense fallback={<pre>loading...</pre>}>
        {/* @ts-expect-error */}
        <AsyncComponent />
      </Suspense>
    </main>
  );
}

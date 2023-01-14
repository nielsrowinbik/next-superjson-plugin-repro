import { AsyncComponent } from "@/components/AsyncComponent";
import { AsyncComponentSimple } from "@/components/AsyncComponentSimple";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <h1>Reproduction</h1>
      <p>
        {
          "Suspense > Async Component > Server Component > Client Component (with data-json attribute), renders 'string' instead of the expected 'object':"
        }
      </p>
      <Suspense fallback={<pre>loading...</pre>}>
        {/* @ts-expect-error */}
        <AsyncComponent />
      </Suspense>
      <p>If we take out the Server Component the same happens:</p>
      <p>
        {
          "Suspense > Async Component > Client Component (with data-json attribute) still renders 'string' instead of the expected 'object':"
        }
      </p>
      <Suspense fallback={<pre>loading...</pre>}>
        {/* @ts-expect-error */}
        <AsyncComponentSimple />
      </Suspense>
    </main>
  );
}

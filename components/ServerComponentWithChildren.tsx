import type { ReactNode } from "react";

type ServerComponentWithChildren = {
  children: ReactNode;
};

export function ServerComponentWithChildren({
  children,
}: ServerComponentWithChildren) {
  return <div>{children}</div>;
}

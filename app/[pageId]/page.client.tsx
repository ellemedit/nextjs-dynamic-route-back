"use client";

import { useRouter } from "next/navigation";
import { ComponentProps, ReactNode, startTransition } from "react";

export function Form({
  nextUrl,
  action,
  children,
}: ComponentProps<"form"> & {
  nextUrl: string;
  action: () => Promise<unknown>;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <form
      action={() => {
        startTransition(async () => {
          await action();
          router.replace(nextUrl);
        });
      }}
    >
      {children}
    </form>
  );
}

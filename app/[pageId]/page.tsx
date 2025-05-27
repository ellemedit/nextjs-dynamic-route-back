import Link from "next/link";
import { Form } from "./page.client";
import { actionWithoutReturn } from "./actions";

export default async function Page({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const { pageId = "1" } = await params;
  const nextId = Number(pageId) + 1;

  return (
    <div className="grid gap-4 p-4">
      <h1>Dynamic Page</h1>
      <p>id: {pageId}</p>
      <Link href={`/${nextId}`}>go to next page by link</Link>
      <Form nextUrl={`/${nextId}`} action={actionWithoutReturn}>
        <button type="submit">
          go to next page with server action and router in client component
        </button>
      </Form>
    </div>
  );
}

"use server";

import { setTimeout } from "node:timers/promises";

export async function actionWithoutReturn() {
  await setTimeout(300);
}

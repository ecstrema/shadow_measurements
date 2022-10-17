import type Scene from "./Scene";
import { TimeProvider } from "./Providers/Time";
import { Constructions } from "./Constructions";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function main(scene: Scene) {
  TimeProvider.play = false;
  TimeProvider.time = new Date(2022, 0, 1, 15, 0).getTime();
  while (TimeProvider.time < new Date(2023, 0, 1, 15, 0).getTime()) {
    TimeProvider.time += 5 * 86_400_000;

    const targets = [4, 6];
    for (const nbdetage of targets) {
      Constructions.nbdetages = nbdetage as 4 | 6;
      scene.updateConstructions();
      scene.takeScreenShot();
      await sleep(300);
    }
  }
}

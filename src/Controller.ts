import Scene from "./Scene";
import { TimeProvider } from "./Providers/Time";
import { Constructions } from "./Constructions";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function main(scene: Scene) {
  while (TimeProvider.time < new Date(2023, 0, 1, 15, 40).getTime()) {
    TimeProvider.addOneDay();

    for (let nbdetage of [4, 5, 6]) {
      Constructions.nbdetages = nbdetage;
      scene.updateConstructions();
      scene.takeScreenShot();
      await sleep(100);
    }
  }
}

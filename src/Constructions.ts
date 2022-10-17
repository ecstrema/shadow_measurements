import * as THREE from "three";
import { createExtrudedPolygon } from "./extrudedPolygon";

export class Constructions extends THREE.Group {
  static heights = {
    // Les hauteurs proviennent du document Plans4.pdf, page 10
    6: 18.4 + 1.88,
    5: 15.2 + 1.88,
    4: 12.3 + 1.88,
    3: 9.4 + 1.88,
  };

  static nbdetages: keyof typeof Constructions.heights = 6;

  private uni: THREE.Mesh;
  // Ce ratio provient du dessin svg
  private static ratio = 31 / 14.4;
  constructor() {
    super();
    // Les 14.4 de distance deviennent 31
    /** Terrain maison */
    const dTerrain = "M -181.06303,168.32097 L -175.39989,86.992054 L -99.419491,85.261653 L -100.20604,94.228284 L -92.65519,101.80342 L -46.878179,103.19491 L -50.968219,158.88241 Z";
    const terrain = createExtrudedPolygon(dTerrain, 0x52BE53, 0.5);
    // terrain.translateY(0.4);
    terrain.receiveShadow = true;

    const dSol = "M -500,350 l 600,0 l 0,-600 l -600,0 Z";
    const sol = createExtrudedPolygon(dSol, 0x808080, 0.1);
    sol.receiveShadow = true;

    /** Batiment maison */
    const dBatiment = "m -137.59706,98.776225 h 18.13122 v 11.012215 h 9.78864 v 10.67851 h 11.234678 v 14.46048 h -7.452708 v 14.68295 h -21.69073 v -15.35036 h 7.56395 v -13.12566 h -17.35258 z";
    const batiment = createExtrudedPolygon(dBatiment, 0xABABAB, 3 * Constructions.ratio);
    batiment.castShadow = true;
    batiment.receiveShadow = true;

    /** Batiment universitaire */
    const dUni = "M -300.2865,87.430307 H -287.87487 V 82.091053 L -280.3109,82.758459 L -282.31314,86.762901 L -263.12518,98.275671 L -260.78926,102.28011 L -261.12296,123.74837 L -270.74473,140.15545 L -278.3087,144.27113 L -265.62796,165.85062 L -235.87273,166.40679 L -224.02626,173.5258 L -211.01182,151.16767 L -229.58798,118.79843 V 113.79288 L -218.687,94.994253 L -209.89948,89.988701 L -214.01515,82.980928 L -210.90059,80.645004 L -216.12861,71.857478 L -222.13527,72.191183 L -222.02404,66.073286 L -257.17413,65.405878 L -261.95722,62.625017 L -272.96943,44.16009 L -272.41325,34.48269 L -281.20078,34.92763 L -280.97832,30.255781 L -293.32533,30.033312 L -293.2141,34.816393 L -300.2865,34.48269 Z";

    this.uni = createExtrudedPolygon(dUni, 0xF08885, 1);
    this.uni.castShadow = true;
    this.update();

    this.add(batiment, terrain, sol, this.uni);
    this.position.set(50, 0, -200);
    this.rotation.y = 1.01;
  }

  update() {
    this.uni.scale.z = Constructions.heights[Constructions.nbdetages] * Constructions.ratio;
    // The +1 is for the initial height.
    this.uni.position.y = Constructions.heights[Constructions.nbdetages] * Constructions.ratio + 1;
  }
}

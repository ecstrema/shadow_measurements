import * as THREE from "three";

export class Compass extends THREE.Group {
  private static distance = 500;
  constructor() {
    super();
    const arrows = [
      { position: new THREE.Vector3(Compass.distance, 0, 0), name: "E" },
      { position: new THREE.Vector3(-Compass.distance, 0, 0), name: "W" },
      { position: new THREE.Vector3(0, 0, -Compass.distance), name: "N" },
      { position: new THREE.Vector3(0, 0, Compass.distance), name: "S" },
    ];
    arrows.forEach((arrow) => {
      this.add(new THREE.ArrowHelper(arrow.position, arrow.position, 100, arrow.name === "N" ? 0xFF00FF : 0x00FFFF, 30, 30));
    });

    const gridHelper = new THREE.PolarGridHelper(450);
    this.add(gridHelper);
  }
}

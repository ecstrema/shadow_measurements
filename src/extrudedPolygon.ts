import * as THREE from "three";
import { transformSVGPath } from "./d33d";

export function createExtrudedPolygon(pathStr: string, color: number, extrudeDepth: number, mesh?: THREE.Mesh) {
  const path = transformSVGPath(pathStr);
  const material = new THREE.MeshLambertMaterial({ color });
  const simpleShapes = path.toShapes(true);

  for (let j = 0; j < simpleShapes.length; j++) {
    const simpleShape = simpleShapes[j];
    const shape3d = new THREE.ExtrudeGeometry(simpleShape, {
      depth: extrudeDepth,
      bevelEnabled: false,
    });

    if (!mesh) { mesh = new THREE.Mesh(shape3d, material); }
    else {
      mesh.geometry = shape3d;
      mesh.material = material;
    }
    mesh.rotation.x = Math.PI / 2;
    mesh.translateZ(-extrudeDepth - 1);
  }
  return mesh as THREE.Mesh;
}

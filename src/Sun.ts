import * as THREE from "three";
import { SunPositionProvider } from "./Providers/SunPosition";

class SunLight extends THREE.PointLight {
  constructor() {
    super(0xFFFFFF, 1, 10000);
    this.decay = 0;
    this.castShadow = true;
  }

  setNightMode(nightMode: boolean) {
    this.intensity = nightMode ? 0.1 : 1;
  }
}

class SunSphere extends THREE.Mesh {
  private static nightColor = 0x888800;
  private static dayColor = 0xFFFF00;

  constructor() {
    const geometry = new THREE.SphereGeometry(10, 16, 8);
    const material = new THREE.MeshBasicMaterial({ color: SunSphere.dayColor });
    super(geometry, material);
  }

  setNightMode(nightMode: boolean) {
    this.material = new THREE.MeshBasicMaterial({ color: nightMode ? SunSphere.nightColor : SunSphere.dayColor });
  }
}

export class Sun extends THREE.Group {
  private light: SunLight;
  private sphere: SunSphere;

  private isNight = false;

  constructor() {
    super();
    this.light = new SunLight();
    this.add(this.light);

    this.sphere = new SunSphere();
    this.add(this.sphere);

    this.updatePosition();
  }

  updatePosition() {
    const pos = SunPositionProvider.getPosition();
    // const pos = {
    //   azimuth: Math.PI / 4,
    //   altitude: 0
    // }
    pos.azimuth += Math.PI / 2;
    pos.altitude += Math.PI / 2;
    // x=ρsinφcosθ,y=ρsinφsinθ, and z=ρcosφ
    // where ρ is the radius, φ is the azimuthal angle, and θ is the altitude angle.
    const r = 450;
    const rs = r * Math.sin(pos.altitude);
    const x = rs * Math.cos(pos.azimuth);
    const y = rs * Math.sin(pos.azimuth);
    const z = r * Math.cos(pos.altitude);
    this.position.set(x, -z, y);

    const isNowNight = this.position.y < 0;
    if (isNowNight !== this.isNight) {
      this.sphere.setNightMode(isNowNight);
      this.light.setNightMode(isNowNight);
      this.isNight = isNowNight;
    }
  }
}

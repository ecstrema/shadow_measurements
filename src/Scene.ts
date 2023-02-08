import * as THREE from "three";
import GUI from "lil-gui";
import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Constructions } from "./Constructions";
import { Sun } from "./Sun";
import { CurrentTime } from "./CurrentTime";
import { TimeProvider } from "./Providers/Time";
import { Compass } from "./Compass";

export default class Scene {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private stats: any;

  private sun!: Sun;
  private constructions!: Constructions;
  private currentTime!: CurrentTime;

  constructor() {
    this.initScene();
    this.initStats();
    this.initListeners();
  }

  initStats() {
    this.stats = new (Stats as any)();
    document.body.appendChild(this.stats.dom);
  }

  initScene() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    this.camera.position.setFromSphericalCoords(600, Math.PI / 4, 0);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xFFFFFF, 1);

    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xAAAAAA);
    this.scene.add(ambientLight);

    this.sun = new Sun();
    this.scene.add(this.sun);

    this.constructions = new Constructions();
    this.scene.add(this.constructions);

    this.currentTime = new CurrentTime();

    this.scene.add(new Compass());

    this.initGui();

    // Init animation
    this.animate(1);
  }

  initGui() {
    const gui = new GUI();

    const timeFolder = gui.addFolder("Time");
    timeFolder.add(TimeProvider, "play").listen();
    timeFolder.add(TimeProvider, "timeSpeedMultiplier", 0, 100_000);

    const constructionFolder = gui.addFolder("Constructions");
    constructionFolder.add(Constructions, "nbdetages", 3, 6, 1).onChange(() => {
      this.updateConstructions();
    });
    timeFolder.add(TimeProvider, "addOneMinute");
    timeFolder.add(TimeProvider, "removeOneMinute");
    timeFolder.add(TimeProvider, "addTenMinutes");
    timeFolder.add(TimeProvider, "removeTenMinutes");
    timeFolder.add(TimeProvider, "addOneHour");
    timeFolder.add(TimeProvider, "removeOneHour");
    timeFolder.add(TimeProvider, "addOneDay");
    timeFolder.add(TimeProvider, "removeOneDay");
    timeFolder.add(TimeProvider, "addTenDays");
    timeFolder.add(TimeProvider, "removeTenDays");
    timeFolder.add(TimeProvider, "addOneMonth");
    timeFolder.add(TimeProvider, "removeOneMonth");
  }

  initListeners() {
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
    window.addEventListener("keypress", (event) => {
      const { key } = event;

      switch (key) {
        case "e":
          this.takeScreenShot();
          event.preventDefault();
          event.stopPropagation();
          break;

        case " ":
          TimeProvider.play = !TimeProvider.play;
          event.preventDefault();
          event.stopPropagation();
          break;

        case "ArrowDown":
          Constructions.nbdetages -= 1;
          event.preventDefault();
          event.stopPropagation();
          break;

        case "ArrowUp":
          Constructions.nbdetages += 1;
          event.preventDefault();
          event.stopPropagation();
          break;

        case "ArrowRight":
          TimeProvider.addOneMinute();
          event.preventDefault();
          event.stopPropagation();
          break;

        case "ArrowLeft":
          TimeProvider.removeOneMinute();
          event.preventDefault();
          event.stopPropagation();
          break;

        case "h":
          if (event.shiftKey)
            TimeProvider.removeOneHour();
          else
            TimeProvider.addOneHour();
          event.preventDefault();
          event.stopPropagation();
          break;

        case "d":
          if (event.shiftKey)
            TimeProvider.removeOneDay();
          else
            TimeProvider.addOneDay();
          event.preventDefault();
          event.stopPropagation();
          break;

        case "m":
          if (event.shiftKey)
            TimeProvider.removeOneMonth();
          else
            TimeProvider.addOneMonth();
          event.preventDefault();
          event.stopPropagation();
          break;

        default:
          break;
      }
    });
  }

  /** Press 'e' to take a screenshot and open the image in a new tab */
  takeScreenShot() {
    const { domElement } = this.renderer;

    // Makse sure scene is rendered.
    this.renderer.render(this.scene, this.camera);

    const src = domElement.toDataURL();
    this.download(src, `${new Date(TimeProvider.time).toISOString()}-${Constructions.nbdetages}etages.png`);
  }

  private download(dataurl: string, filename: string) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(delta: number) {
    requestAnimationFrame((time) => {
      this.animate(time);
    });

    TimeProvider.update(delta);

    this.update();

    this.renderer.render(this.scene, this.camera);
  }

  updateConstructions() {
    this.constructions.update();
  }

  update() {
    this.stats?.update();
    this.controls?.update();
    this.currentTime.update();

    this.sun.updatePosition();
  }
}

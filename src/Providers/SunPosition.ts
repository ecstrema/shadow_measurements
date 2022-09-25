import { getPosition } from "suncalc";
import { TimeProvider } from "./Time";

export class SunPositionProvider {
  private static lat = 46.089064115568284;
  private static long = 6.107614109077571;

  static getPosition() {
    return getPosition(new Date(TimeProvider.time), SunPositionProvider.lat, SunPositionProvider.long);
  }
}

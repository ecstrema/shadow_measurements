export class TimeProvider {
  private static lastUpdateDelta = 0;

  static timeSpeedMultiplier = 5_000;
  static play = true;
  static time = new Date(2022, 0, 1, 1).getTime();

  static update(delta: number) {
    if (TimeProvider.play)
      TimeProvider.time += (delta - TimeProvider.lastUpdateDelta) * TimeProvider.timeSpeedMultiplier;

    TimeProvider.lastUpdateDelta = delta;
  }

  static addOneMinute() {
    TimeProvider.time += 60_000;
  }

  static removeOneMinute() {
    TimeProvider.time -= 60_000;
  }

  static addTenMinutes() {
    TimeProvider.time += 600_000;
  }

  static removeTenMinutes() {
    TimeProvider.time -= 600_000;
  }

  static addOneHour() {
    TimeProvider.time += 3_600_000;
  }

  static removeOneHour() {
    TimeProvider.time -= 3_600_000;
  }

  static addOneDay() {
    TimeProvider.time += 86_400_000;
  }

  static removeOneDay() {
    TimeProvider.time -= 86_400_000;
  }

  static addTenDays() {
    TimeProvider.time += 864_000_000;
  }

  static removeTenDays() {
    TimeProvider.time -= 864_000_000;
  }

  static addOneMonth() {
    TimeProvider.time += 2_592_000_000;
  }

  static removeOneMonth() {
    TimeProvider.time -= 2_592_000_000;
  }
}

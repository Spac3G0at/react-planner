import generateSchedules from "./../data/generateSchedules";
import weekDay from "./../@types/weekday";

class datesService {
  static weekLength = 7;

  static daysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  static getMonthShortName(month: number) {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString([], { month: "short" });
  }

  static getDayName(date: Date) {
    return date.toLocaleDateString([], { weekday: "long" });
  }

  static getDateProperties(targetDate: Date): weekDay {
    const month = targetDate.getMonth();
    const year = targetDate.getFullYear();
    const day = targetDate.getDay();
    const dayLabel = this.getDayName(targetDate);
    const monthLabel = this.getMonthShortName(month);
    const date = targetDate.getDate();

    return {
      month,
      year,
      day,
      date,
      dayLabel,
      monthLabel,
      schedules: [],
      ts: targetDate.getTime()
    };
  }

  static getNextWeek(currentDate: Date): Date {
    return new Date(
      new Date(currentDate).setDate(currentDate.getDate() + this.weekLength)
    );
  }

  static getPreviousWeek(currentDate: Date) {
    return new Date(
      new Date(currentDate).setDate(currentDate.getDate() - this.weekLength)
    );
  }

  static getWeek(_year: number, _month: number, _date: number) {
    const targetDate = new Date(_year, _month, _date);

    const week: weekDay[] = [];
    for (let i = 0; i < this.weekLength; i++) {
      const td = new Date(_year, _month, _date);
      const d = new Date(td.setDate(targetDate.getDate() + i));
      week.push(this.getDateProperties(d));
    }

    const weekWithSchedule = generateSchedules(week);

    return weekWithSchedule;
  }

  static getWeekFromDate(targetDate: Date) {
    const { year, month, date } = this.getDateProperties(targetDate);
    return this.getWeek(year, month, date);
  }

  static getValuesFromSchedule = (schedule: string) => {
    const splittedSchedule = schedule.split(":").map((e) => Number(e));
    return { hours: splittedSchedule[0], minutes: splittedSchedule[1] };
  };
}

export default datesService;

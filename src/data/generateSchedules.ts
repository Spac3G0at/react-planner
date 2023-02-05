import weekDay from "../@types/weekday";
import getMaxSchedules from "./getMaxSchedules";

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomSchedules = (timestamp: number) => {
  const schedules: string[] = [];

  const hoursAvailable = [9, 10, 11, 12, 14, 15, 16, 17];
  const minutesAvailable = [0, 15, 30, 45];

  const times = getRandomInt(0, 6);

  for (let i = 0; i < times; i++) {
    const hourIndex = Math.floor(Math.random() * hoursAvailable.length);
    const hour = hoursAvailable[hourIndex];
    hoursAvailable.splice(hourIndex, 1);
    const minutesIndex = Math.floor(Math.random() * minutesAvailable.length);
    const minutes = minutesAvailable[minutesIndex];

    const scheduleDate = new Date(timestamp);
    scheduleDate.setHours(hour);
    scheduleDate.setMinutes(minutes);

    if (Date.now() < scheduleDate.getTime()) {
      schedules.push(`${hour}:${minutes === 0 ? "00" : minutes}`);
    }
  }

  schedules.sort((a, b) => Number(a.split(":")[0]) - Number(b.split(":")[0]));

  return schedules;
};

const generateSchedules = (week: weekDay[]) => {
  // const start = week[0].ts;
  // const end = week[week.length - 1].ts;
  const schedules: weekDay[] = week.map((day) => ({
    ...day,
    schedules: generateRandomSchedules(day.ts)
  }));

  getMaxSchedules(schedules);

  return schedules;
};

export default generateSchedules;

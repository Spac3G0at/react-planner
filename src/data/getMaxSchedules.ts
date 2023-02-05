import weekDay from "../@types/weekday";

const getMaxSchedules = (week: weekDay[]) => {
  const schedules = [...week];
  const lengthes = [...schedules.map((e) => e.schedules.length)];
  const maxEntries = Math.max(...lengthes);

  schedules.forEach((el) => {
    if (el.schedules.length < maxEntries) {
      el.schedules = [
        ...el.schedules,
        ...new Array(maxEntries - el.schedules.length)
      ];
    }
  });

  return schedules;
};

export default getMaxSchedules;

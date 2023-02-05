import { useEffect, useState } from "react";
import service from "../../utils/dates.service";
import { PlannerBody } from "./";
import { JustifyCenter } from "../ui/Flex";
import { ControlButton } from "../ui/Buttons";
import weekDay from "../../@types/weekday";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [week, setWeek] = useState<weekDay[]>([]);

  useEffect(() => {
    setWeek(service.getWeekFromDate(selectedDate));
  }, [selectedDate]);

  const nextWeek = () => {
    setSelectedDate((current) => service.getNextWeek(current));
  };

  const previousWeek = () => {
    setSelectedDate((current) => service.getPreviousWeek(current));
  };

  const resetWeek = () => {
    setSelectedDate(new Date());
  };

  const onSelect = (selection: { ts: number; schedule: string }) => {
    const date = new Date(selection.ts);
    const { hours, minutes } = service.getValuesFromSchedule(
      selection.schedule
    );
    date.setHours(hours);
    date.setMinutes(minutes);

    console.log("Selected schedule : ", date);
  };

  return (
    <div>
      <h1 onClick={resetWeek}>Planner</h1>
      <JustifyCenter>
        <div>
          <ControlButton
            disabled={selectedDate <= new Date()}
            onClick={previousWeek}
          >
            {"<"}
          </ControlButton>
        </div>
        <PlannerBody week={week} onSelect={onSelect} />
        <div>
          <ControlButton onClick={nextWeek}>{">"}</ControlButton>
        </div>
      </JustifyCenter>
    </div>
  );
};

export default Planner;

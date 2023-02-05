import React from "react";
import styled from "styled-components";
import { ScheduleItem } from "./";
import weekDay from "./../../@types/weekday";

const Root = styled("div")`
  width: 70px;
  margin: 0 4px;
  font-size: 14px;
  text-align: center;
  user-select: none;
`;

const DayLabel = styled("p")`
  margin: 0;
  font-weight: 700;
`;

const DateLabel = styled("p")`
  margin: 0;
`;

interface PlanningItemProps {
  item: weekDay;
  onSelect: (selection: { ts: number; schedule: string }) => void;
}

const PlanningItem: React.FC<PlanningItemProps> = ({ item, onSelect }) => {
  const handleSelect = (selection: string) => {
    onSelect({ ts: item.ts, schedule: selection });
  };

  return (
    <Root>
      <div>
        <DayLabel>{item.dayLabel}</DayLabel>
        <DateLabel>
          {item.date} {item.monthLabel}
        </DateLabel>
      </div>

      <div>
        {item.schedules.map((e: string, index) => (
          <ScheduleItem
            key={(e ?? "0") + index}
            item={e}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </Root>
  );
};

export default PlanningItem;

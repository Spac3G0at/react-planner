import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextButton } from "../ui/Buttons";
import { Flex, JustifyCenter } from "../ui/Flex";
import { PlanningItem } from "./";
import weekDay from "./../../@types/weekday";

const Divider = styled("hr")`
  border: none;
  border-top: 1px solid lightgrey;
`;

const maxSchedules = 4;

const PlannerBody: React.FC<{
  week: weekDay[];
  onSelect: (selection: { ts: number; schedule: string }) => void;
}> = ({ week, onSelect }) => {
  const [limit, setLimit] = useState(maxSchedules);
  const [maxEntries, setMaxEntries] = useState(0);

  useEffect(() => {
    const lengthes = [...week.map((e) => e.schedules.length)];
    const max = Math.max(...lengthes);
    setLimit(maxSchedules);
    setMaxEntries(max);
  }, [week]);

  const expand = () => {
    setLimit(limit < maxEntries ? maxEntries : maxSchedules);
  };

  return (
    <div>
      <Flex>
        {week
          .map((day) => ({
            ...day,
            schedules: day.schedules.slice(0, limit)
          }))
          .map((el, index) => (
            <PlanningItem key={el.ts + index} item={el} onSelect={onSelect} />
          ))}
      </Flex>
      {maxEntries > maxSchedules && (
        <>
          <Divider />
          <JustifyCenter>
            <TextButton onClick={expand}>
              {limit < maxEntries ? "Show more" : "Show less"}
            </TextButton>
          </JustifyCenter>
        </>
      )}
    </div>
  );
};

export default PlannerBody;

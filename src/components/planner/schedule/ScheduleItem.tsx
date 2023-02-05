import React from "react";
import styled from "styled-components";
import { FlexCenter } from "./../../ui/Flex";

const Root = styled(FlexCenter)`
  padding: 4px;
  border-radius: 6px;
  height: 25px;
`;

const EmptyMarker = styled("div")`
  width: 15px;
  border: 1px solid lightgray;
`;

const SelectableItem = styled(FlexCenter)`
  background: #d5fed4;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-weight: 700;
  user-select: none;
  &:hover {
    background-color: #baf6b5;
    cursor: pointer;
  }
`;

const ScheduleItem: React.FC<{
  item: string;
  onSelect: (schedule: string) => void;
}> = ({ item, onSelect }) => {
  return (
    <Root>
      {item ? (
        <SelectableItem onClick={onSelect.bind(this, item)}>
          {item}
        </SelectableItem>
      ) : (
        <EmptyMarker />
      )}
    </Root>
  );
};

export default ScheduleItem;

import React from "react";
import {
  DatePicker as DatePickerWrapper,
  DateInput,
  DateSegment,
  Label,
  Popover,
  Calendar,
  CalendarGrid,
  CalendarCell,
} from "react-aria-components";
import { parseDate } from "@internationalized/date";

export const DatePicker = () => {
  return (
    <DatePickerWrapper defaultValue={parseDate("2024-06-01")}>
      <Label>Pick a date</Label>
      <DateInput className="border px-2 py-1 rounded">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <Popover className="border p-2 rounded mt-2 bg-white shadow">
        <Calendar>
          <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
        </Calendar>
      </Popover>
    </DatePickerWrapper>
  );
};

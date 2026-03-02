"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

type ReservationCalendarProps = {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  minDate: Date;
};

export function ReservationCalendar({ selected, onSelect, minDate }: ReservationCalendarProps) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={{ before: minDate }}
      className="mx-auto text-white"
    />
  );
}

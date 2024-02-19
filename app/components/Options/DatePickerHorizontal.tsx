'use client';

import dayjs from "dayjs";
import classNames from "classnames";
import { optionsData } from "@/app/data/options";

const DatePickerHorizontal = ({
    selectedDate,
    onSelectDate,
}: {
    selectedDate: dayjs.Dayjs;
    onSelectDate: (date: dayjs.Dayjs) => void;
}) => {
    const isSameDate = (date: string) => dayjs(date).isSame(selectedDate, 'day');
    return (
        <div className="flex flex-row overflow-x-scroll hide-scrollbar whitespace-nowrap max-w-[400px] gap-x-1">
            {optionsData.dates.map((date, index) => (
                <button
                    key={index}
                    className={classNames(
                        "text-xs text-gray-100 py-1 px-2 rounded-md cursor-pointer",
                        isSameDate(date.value) ? "bg-emerald-600" : "bg-slate-500"
                    )}
                    onClick={() => onSelectDate(dayjs(date.value))}
                >
                    {dayjs(date.value).format('DD MMM')}
                </button>
            ))}
        </div>
    );
}

export default DatePickerHorizontal;
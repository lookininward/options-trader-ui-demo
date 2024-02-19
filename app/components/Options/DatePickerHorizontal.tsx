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
    return (
        <div className="flex flex-row overflow-x-scroll hide-scrollbar whitespace-nowrap max-w-[400px] gap-x-1">
            {optionsData.dates.map((date, index) => (
                <button
                    key={index}
                    className={classNames(
                        "text-xs text-gray-100 bg-slate-500 py-1 px-2 rounded-md cursor-pointer",
                        {
                            "bg-emerald-600": dayjs(date.value).isSame(selectedDate, 'day'),
                        }
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
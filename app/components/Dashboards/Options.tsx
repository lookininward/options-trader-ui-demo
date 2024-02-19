'use client';

import dayjs from "dayjs";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import DatePickerHorizontal from "../Options/DatePickerHorizontal";
import OptionsSelector from "../Options/OptionsSelector";
import ActionTypeSelector from "../Options/ActionTypeSelector";
import {
    OptionsAction,
    OptionsActionType,
    OptionsTransaction
} from "@/app/types/options";
import OptionsHeader from "../Options/OptionsHeader";

export default function Options() {
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
    const [selectedAction, setSelectedAction] = useState<OptionsTransaction>({
        action: OptionsAction.Buy,
        type: OptionsActionType.Call,
    });

    const onSelectDate = (date: dayjs.Dayjs | null) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const onSelectAction = (action: OptionsAction, type: OptionsActionType) => setSelectedAction({ action, type });

    return (
        <div>
            <div className='flex gap-x-3 divide-x-2 divide-gray-300'>
                <h3 className='text-md font-bold text-gray-600 mb-3 cursor-pointer'>Order</h3>
                <h3 className='pl-3 text-md font-bold text-teal-700 mb-3 cursor-pointer'>Options</h3>
            </div>
            <div className="w-full lg:min-w-[460px] lg:max-w-[500px] bg-white p-10 rounded-xl shadow-lg border">
                <div className="w-full flex flex-col items-center justify-center gap-y-6">
                    <div className="w-full flex items-center justify-between">
                        <OptionsHeader optionsTransaction={selectedAction} />
                        <MobileDatePicker value={selectedDate} onChange={onSelectDate} slotProps={{ textField: { size: 'small' } }} />
                    </div>
                    <DatePickerHorizontal selectedDate={selectedDate} onSelectDate={onSelectDate} />
                    <ActionTypeSelector selectedAction={selectedAction} onSelectAction={onSelectAction} />
                    <OptionsSelector selectedAction={selectedAction} />
                </div>
            </div>
        </div>
    );
}

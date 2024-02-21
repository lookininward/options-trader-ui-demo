'use client';

import dayjs from "dayjs";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import DatePickerHorizontal from "../Options/DatePickerHorizontal";
import OptionsSelector from "../Options/OptionsSelector";
import ActionTypeSelector from "../Options/ActionTypeSelector";
import {
    OptionContract,
    OptionsAction,
    OptionsActionType,
    OptionsTransaction
} from "@/app/types/options";
import OptionsHeader from "../Options/OptionsHeader";
import Card from "../Card";
import PurchaseContractButton from "../Topbar/PurchaseContractButton";
import PurchaseContract from "../Options/PurchaseContract";
import PurchaseContractSuccess from "../Options/PurchaseContractSuccess";

export default function Options() {
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
    const [selectedPurchaseContract, setSelectedPurchaseContract] = useState<OptionContract | null>(null);
    const [selectedAction, setSelectedAction] = useState<OptionsTransaction>({
        action: OptionsAction.Buy,
        type: OptionsActionType.Call,
    });

    const onSelectDate = (date: dayjs.Dayjs | null) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const onSelectAction = (action: OptionsAction, type: OptionsActionType) => {
        setSelectedPurchaseContract(null);
        setSelectedAction({ action, type })
    };

    const onSelectPurchaseContract = (contract: OptionContract) => setSelectedPurchaseContract(contract);
    const [isViewingContract, setIsViewingContract] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <div>
            <div className='flex gap-x-3 divide-x-2 divide-gray-300'>
                <h3 className='text-md font-bold text-gray-600 mb-3 cursor-pointer'>Order</h3>
                <h3 className='pl-3 text-md font-bold text-teal-700 mb-3 cursor-pointer'>Options</h3>
            </div>
            <Card className="rounded-bl-lg rounded-br-lg">
                {showSuccess ? (
                    <PurchaseContractSuccess
                        setShowSuccess={setShowSuccess}
                        setSelectedPurchaseContract={setSelectedPurchaseContract}
                        setIsViewingContract={setIsViewingContract}
                    />
                ) : (
                    <div className="w-full flex flex-col items-center justify-center gap-y-6">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-3">
                            <OptionsHeader optionsTransaction={selectedAction} />
                            <MobileDatePicker value={selectedDate} onChange={onSelectDate} slotProps={{ textField: { size: 'small' } }} />
                        </div>

                        {!isViewingContract && (
                            <>
                                <DatePickerHorizontal selectedDate={selectedDate} onSelectDate={onSelectDate} />
                                <ActionTypeSelector selectedAction={selectedAction} onSelectAction={onSelectAction} />
                                <OptionsSelector selectedAction={selectedAction} onSelectPurchaseContract={onSelectPurchaseContract} />

                                {selectedPurchaseContract && (
                                    <PurchaseContractButton
                                        selectedAction={selectedAction}
                                        setIsViewingContract={setIsViewingContract}
                                        selectedPurchaseContract={selectedPurchaseContract}
                                        selectedDate={selectedDate}
                                        setSelectedPurchaseContract={setSelectedPurchaseContract}
                                    />
                                )}
                            </>
                        )}

                        {isViewingContract && selectedPurchaseContract && (
                            <PurchaseContract
                                selectedPurchaseContract={selectedPurchaseContract}
                                selectedAction={selectedAction}
                                selectedDate={selectedDate}
                                setSelectedPurchaseContract={setSelectedPurchaseContract}
                                setIsViewingContract={setIsViewingContract}
                                setShowSuccess={setShowSuccess}
                            />
                        )}
                    </div>
                )}
            </Card>
        </div>
    );
}

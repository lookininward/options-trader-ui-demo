import dayjs from "dayjs";
import classNames from "classnames";
import { XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
    OptionContract,
    OptionsActionType,
    OptionsTransaction
} from "@/app/types/options";

export default function PurchaseContractButton({
    selectedAction,
    setIsViewingContract,
    selectedPurchaseContract,
    selectedDate,
    setSelectedPurchaseContract,

}: {
    selectedAction: OptionsTransaction;
    setIsViewingContract: (value: boolean) => void;
    selectedPurchaseContract: OptionContract;
    selectedDate: dayjs.Dayjs;
    setSelectedPurchaseContract: (contract: OptionContract | null) => void;

}) {
    return (
        <div className={classNames(
            "h-16 w-full absolute fixed bottom-0 flex justify-between items-center",
            "divide-x divide-gray-300 shadow bg-transparent",
            "rounded-bl-lg rounded-br-lg",
        )}>
            <button
                className={classNames(
                    "w-full h-full",
                    "flex flex-col justify-center items-center gap-x-2 gap-y-1",
                    "text-sm text-gray-100 p-4",
                    "rounded-bl-lg",
                    selectedAction.type === OptionsActionType.Call ?
                        'bg-emerald-600 hover:bg-emerald-700' :
                        'bg-red-700 hover:bg-red-800'
                )}
                onClick={() => setIsViewingContract(true)}
            >
                <div className="text-xs">
                    AAPL ${selectedPurchaseContract.strike} <span className="capitalize">{selectedAction.type}</span> {selectedDate.format('MM/DD')}
                </div>
                <div className="font-semibold flex items-center">
                    Continue <ChevronRightIcon className="w-4 h-4" />
                </div>
            </button>
            <button
                className="w-20 h-full flex items-center justify-center text-sm text-gray-100 bg-gray-700 hover:bg-gray-800 rounded-br-lg"
                onClick={() => setSelectedPurchaseContract(null)}
            >
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>
    );
}

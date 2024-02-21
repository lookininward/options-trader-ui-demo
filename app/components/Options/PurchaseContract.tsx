import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ContractItem } from "./ContractItem";
import { OptionContract, OptionsTransaction } from "@/app/types/options";

export default function PurchaseContract({
    selectedPurchaseContract,
    selectedAction,
    selectedDate,
    setSelectedPurchaseContract,
    setIsViewingContract,
    setShowSuccess,
}: {
    selectedPurchaseContract: OptionContract;
    selectedAction: OptionsTransaction;
    selectedDate: dayjs.Dayjs;
    setSelectedPurchaseContract: (contract: OptionContract | null) => void;
    setIsViewingContract: (isViewing: boolean) => void;
    setShowSuccess: (show: boolean) => void;
}) {
    const [isWatching, setIsWatching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickBuy = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
        }, 3000);
    }

    return (
        <div className="relative w-full flex flex-col gap-y-4">
            <div className="text-xl font-semibold text-left text-gray-700">
                AAPL ${selectedPurchaseContract.strike} <span className="capitalize">{selectedAction.type}</span> {selectedDate.format('MM/DD')}
            </div>
            <div className="flex items-center justify-between border-b pb-4 mb-2">
                <div>
                    <div className="text-sm text-gray-500 font-semibold">Bid</div>
                    <div className="flex items-center gap-x-1">
                        <div className="text-lg text-gray-700 font-bold">${selectedPurchaseContract.premium.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">x10</div>
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-500 font-semibold">Ask</div>
                    <div className="flex items-center gap-x-1">
                        <div className="text-lg text-gray-700 font-bold">${selectedPurchaseContract.premium.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">x10</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-4 border-b pb-4 mb-2">
                <div className="flex items-center justify-between">
                    <ContractItem label="Breakeven" value={selectedPurchaseContract.breakEven} />
                    <ContractItem label="Last Trade" value="36.30" />
                    <ContractItem label="IV" value="29.70" />
                </div>
                <div className="flex items-center justify-between">
                    <ContractItem label="Prev Close" value="$33.15" />
                    <ContractItem label="High" value="$36.30" />
                    <ContractItem label="Low" value="$29.70" />
                </div>
                <div className="flex items-center justify-between">
                    <ContractItem label="Chance of Profit" value="46.25%" />
                    <ContractItem label="Volume" value="10" />
                    <ContractItem label="Open Interest" value="23" />
                </div>
            </div>

            <div>
                <h3 className="text-gray-700 font-semibold mb-2">The Greeks</h3>
                <div className="flex flex-col gap-y-4 border-b pb-4 mb-2">
                    <div className="flex items-center justify-between">
                        <ContractItem label="Delta" value={0.9108} />
                        <ContractItem label="Gamma" value={0.0051} />
                        <ContractItem label="Theta" value="-0.0958" />
                    </div>
                    <div className="flex items-center justify-between">
                        <ContractItem label="Vega" value="0.1349" />
                        <ContractItem label="Rho" value="0.1775" />
                        <div className="w-24"></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-y-2">
                <div className="w-full flex gap-x-2">
                    <button
                        className="py-2 w-full flex justify-center items-center text-sm text-gray-100 bg-emerald-600 hover:bg-emerald-700 gap-x-2"
                        onClick={onClickBuy}
                    >
                        {isLoading && (<Image src="loading.svg" alt="Loading" width={14} height={0} />)}
                        {isLoading ? 'Buying...' : 'Buy'}

                    </button>
                    <button
                        className="py-2 w-12 flex items-center justify-center text-sm text-gray-100 bg-gray-700 hover:bg-gray-800"
                        onClick={() => {
                            setSelectedPurchaseContract(null)
                            setIsViewingContract(false);
                        }}
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <button
                    className="py-2 hover:underline flex justify-center items-center text-sm text-gray-600"
                    onClick={() => setIsWatching(!isWatching)}
                >
                    {isWatching ? 'Remove from' : 'Add to'} Watchlist
                </button>
            </div>
        </div>
    )
}
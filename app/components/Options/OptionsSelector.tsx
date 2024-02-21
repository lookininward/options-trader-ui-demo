'use client';

import classNames from "classnames";
import { useEffect, useState } from "react";
import { OptionsActionType, OptionsTransaction } from "@/app/types/options";
import { OptionContract } from "@/app/types/options";

const OptionsSelector = ({
    selectedAction,
    onSelectPurchaseContract
}: {
    selectedAction: OptionsTransaction;
    onSelectPurchaseContract: (contract: OptionContract) => void
}) => {
    const basePrice = 100;
    const optionCount = 5; // number of options to generate for each price
    const priceChange = 10; // increment for strike prices

    const generateOptions = (price: number, type: string) => {
        return Array.from({ length: optionCount }, (_, i) => {
            const increment = (i + 1) * priceChange;
            const strike = type === OptionsActionType.Call ? price + increment : price - increment;
            const premium = 5 + i * 5;
            const breakEven = type === OptionsActionType.Call ? strike + premium : strike - premium;
            const breakEvenPercent = ((breakEven - basePrice) / basePrice) * 100;
            const changeFromCurrentPercent = type === OptionsActionType.Call ? Math.abs(((strike - basePrice) / basePrice) * 100) : -((basePrice - strike) / basePrice) * 100;
            return {
                strike,
                premium,
                breakEven,
                breakEvenPercent,
                changeFromCurrentPercent,
            };
        });
    };

    const [prices, setPrices] = useState<Array<{ price: number; data: any[] }>>([]);
    useEffect(() => {
        const prices = Array.from({ length: optionCount }, (_, index) => {
            const priceAdjustment = index * priceChange;
            const price = selectedAction.type === OptionsActionType.Call ? basePrice + priceAdjustment : basePrice - priceAdjustment;
            return {
                price,
                data: generateOptions(price, selectedAction.type),
            };
        });

        setPrices(prices);
    }, [selectedAction]);

    return (
        <div className="relative w-full flex flex-col gap-y-4 max-h-[500px] overflow-y-scroll hide-scrollbar">
            {prices.map((priceBlock, priceIndex) => (
                <div key={priceIndex}>
                    <h3 className="text-sm font-bold bg-slate-300 text-gray-700 py-1 px-4 w-full mb-1 text-center">
                        Price ${priceBlock.price}
                    </h3>
                    {priceBlock.data.map((option: OptionContract, optionIndex) => (
                        <div key={optionIndex} className="w-full flex flex-col justify-between mb-1 border-b py-3">
                            <div className="w-full flex flex-col gap-y-1">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-bold text-gray-600">{selectedAction.type === OptionsActionType.Call ? `Call $${option.strike}` : `Put $${option.strike}`}</h3>
                                        <div className="flex items-center gap-x-6">
                                            <div>
                                                <p className="text-xs text-gray-400 font-semibold">Breakeven</p>
                                                <p className="text-xs text-gray-400">${option.breakEven}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-semibold">To Breakeven</p>
                                                <p className="text-xs text-gray-400">{option.breakEvenPercent.toFixed(2)}%</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-y-1">
                                        <button
                                            className={classNames(
                                                "text-sm text-gray-100 py-1 px-4 rounded-md",
                                                selectedAction.type === OptionsActionType.Call ? 'bg-emerald-600' : 'bg-red-700'
                                            )}
                                            onClick={() => onSelectPurchaseContract(option)}
                                        >
                                            ${option.premium.toFixed(2)}
                                        </button>
                                        <div>
                                            <p className="text-xs text-gray-400 font-semibold">Change</p>
                                            <p className="text-xs text-gray-400">{option.changeFromCurrentPercent.toFixed(2)}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default OptionsSelector;
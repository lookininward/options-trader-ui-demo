import { OptionsAction, OptionsActionType } from "@/app/types/options";
import ActionTypeBtn from "./ActionTypeBtn";

const ActionTypeSelector = ({ selectedAction, onSelectAction }: {
    selectedAction: { action: OptionsAction; type: OptionsActionType };
    onSelectAction: (action: OptionsAction, type: OptionsActionType) => void;
}) => {
    return (
        <div className="w-full flex justify-center md:justify-between gap-x-4 md:gap-x-0">
            <div className="flex">
                {ActionTypeBtn({
                    label: 'Buy',
                    isSelected: selectedAction.action === OptionsAction.Buy,
                    onClick: () => onSelectAction(OptionsAction.Buy, selectedAction.type),
                    roundedClass: "rounded-l-lg border-r-0"
                })}
                {ActionTypeBtn({
                    label: 'Sell',
                    isSelected: selectedAction.action === OptionsAction.Sell,
                    onClick: () => onSelectAction(OptionsAction.Sell, selectedAction.type),
                    roundedClass: "rounded-r-lg border-l-0"
                })}
            </div>
            <div className="flex">
                {ActionTypeBtn({
                    label: 'Call',
                    isSelected: selectedAction.type === OptionsActionType.Call,
                    onClick: () => onSelectAction(selectedAction.action, OptionsActionType.Call),
                    roundedClass: "rounded-l-lg border-r-0"
                })}
                {ActionTypeBtn({
                    label: 'Put',
                    isSelected: selectedAction.type === OptionsActionType.Put,
                    onClick: () => onSelectAction(selectedAction.action, OptionsActionType.Put),
                    roundedClass: "rounded-r-lg border-l-0"
                })}
            </div>
        </div>
    );
};

export default ActionTypeSelector;

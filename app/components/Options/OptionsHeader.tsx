import classNames from "classnames";
import { ArrowUpCircleIcon, ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { OptionsActionType, OptionsTransaction } from "@/app/types/options";

export default function OptionsHeader({ optionsTransaction }: { optionsTransaction: OptionsTransaction }) {
    return (
        <h2 className={classNames(
            "text-2xl font-extrabold capitalize whitespace-nowrap flex items-center gap-x-1",
            optionsTransaction.type === OptionsActionType.Call ? 'text-emerald-700' : 'text-red-700'
        )}>
            {optionsTransaction.action} {optionsTransaction.type}
            {optionsTransaction.type === OptionsActionType.Call ? (
                <ArrowUpCircleIcon className="h-8 w-8 text-emerald-700" />
            ) : (
                <ArrowDownCircleIcon className="h-8 w-8 text-red-700" />
            )}
        </h2>
    );
}

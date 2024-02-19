import classNames from "classnames";

const ActionTypeBtn = ({
    label,
    isSelected,
    onClick,
    roundedClass
}: {
    label: string;
    isSelected: boolean;
    onClick: () => void;
    roundedClass: string;

}) => (
    <button
        className={classNames(
            "py-1 px-3 md:px-8 border text-sm",
            isSelected ? 'bg-slate-600 text-gray-100' : 'bg-slate-100 text-gray-800',
            roundedClass
        )}
        onClick={onClick}
    >
        {label}
    </button>
);

export default ActionTypeBtn;
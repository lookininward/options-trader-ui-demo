export const ContractItem = ({ label, value }: { label: string, value: string | number }) => {
    return (
        <div className="flex flex-col items-start w-24">
            <div className="text-xs text-gray-500 font-semibold">
                {label}
            </div>
            <div className="text-gray-700">
                {value}
            </div>
        </div>
    )
}
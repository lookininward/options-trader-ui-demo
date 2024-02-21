import Lottie from 'react-lottie';
import animationData from '../../../public/animation-success.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    },
    cursor: 'default',
    isClickToPauseDisabled: true,
};

export default function PurchaseContractSuccess({
    setShowSuccess,
    setSelectedPurchaseContract,
    setIsViewingContract
}: {
    setShowSuccess: (showSuccess: boolean) => void,
    setSelectedPurchaseContract: (contract: any) => void,
    setIsViewingContract: (isViewingContract: boolean) => void
}) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-2xl font-semibold text-gray-700">
                Purchased Contract
            </h2>
            <div className="cursor-default">
                <Lottie options={defaultOptions}
                    height={100}
                    width={100}
                />
            </div>
            <button
                className="text-teal-600 font-semibold"
                onClick={() => {
                    setShowSuccess(false)
                    setSelectedPurchaseContract(null);
                    setIsViewingContract(false);
                }}
            >
                Back
            </button>
        </div>
    )
}
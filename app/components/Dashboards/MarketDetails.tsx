import { aaplData as data } from "@/app/data/aapl";

const MarketDetailItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between text-sm">
        <div className="text-gray-800 font-semibold">{label}</div>
        <div className="pl-4 text-black">{value}</div>
    </div>
);

export default function MarketDetails() {
    return (
        < div >
            <h3 className='text-md font-bold text-gray-600 mb-3'>Market Details</h3>
            <div className="bg-white p-10 rounded-xl shadow-lg border">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2'>
                    <div className="grid grid-cols-1 gap-x-12 gap-y-2">
                        <MarketDetailItem label="Bid" value={`${data.Bid.Price} x ${data.Bid.Quantity}`} />
                        <MarketDetailItem label="Ask" value={`${data.Ask.Price} x ${data.Ask.Quantity}`} />
                        <MarketDetailItem label="Last sale" value={`${data.LastSale.Price} x ${data.LastSale.Quantity}`} />
                        <MarketDetailItem label="Open" value={data.Open} />
                        <MarketDetailItem label="High" value={data.High} />
                        <MarketDetailItem label="Low" value={data.Low} />
                        <MarketDetailItem label="Exchange" value={data.Exchange} />
                    </div>
                    <div className="grid grid-cols-1 gap-x-12 gap-y-2">
                        <MarketDetailItem label="Market Cap" value={data.MarketCap} />
                        <MarketDetailItem label="PE Ratio" value={data.PERatio.toString()} />
                        <MarketDetailItem label="52 Week High" value={data['52WeekHigh']} />
                        <MarketDetailItem label="52 Week Low" value={data['52WeekLow']} />
                        <MarketDetailItem label="Volume" value={data.Volume} />
                        <MarketDetailItem label="Average Volume" value={data.AverageVolume} />
                        <MarketDetailItem label="Yield" value={data.Yield} />
                    </div>
                </div>
            </div>
        </div >
    );
}

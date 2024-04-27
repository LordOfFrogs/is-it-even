import { Ad } from "../ad";

type SearchParamProps =  Record<string, string> | null | undefined;

export default async function Home({ params, searchParams }: { params: { num: number }, searchParams: SearchParamProps }) {
    async function fetchResult(num: number): Promise<any> {
        const response = await fetch(`https://api.isevenapi.xyz/api/iseven/${num}/`);
        const jsonResponse = await response.json();
    
        if (jsonResponse.error) {
            throw new Error(jsonResponse.error);
        }
        return jsonResponse;
    }
    
    const response = await fetchResult(params.num);
    const isNumEven = response.iseven;
    const adText = response.ad;
    const showAd = searchParams?.showAd == 'true';

    return (
        <>
            <div className="flex static flex-col items-start justify-center">
                <p className="text-lg font-bold">Your number is {isNumEven ? "" : "not"} even</p>
            </div>
            {showAd ? <Ad text={adText} /> : <></>}
        </>
    )
}
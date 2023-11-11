import { ItemCardList } from "./ItemCardList";

export const LoggedCard = ({authUserAction}:{authUserAction:()=>void}) => {
    return (
        <div className="w-[1200px] mx-auto">
            <div className="w-full flex justify-end">
                <button onClick={authUserAction} className="text-white hover:font-bold text-lg my-4">Se deconnecter</button>
            </div>
            <div className="grid grid-rows-3 grid-cols-4 gap-4">
                    <ItemCardList/>
            </div>
        </div>
    )
};
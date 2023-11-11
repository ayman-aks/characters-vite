import characters from "../../../data/characters.json";
import {BASE_URL} from "./utils"
import { BigItemCard } from "./BigItemCard";
import { LongItemCard } from "./LongItemCard";
import { RoundedImagesItemCard } from "./RoundedImagesItemCard";

export const ItemCardList = () => {
    return (
    characters.map((item,key)=>{
        switch(item.grid){
            case "BigItemCard":
                return <BigItemCard key={key} imageUrl={BASE_URL+item.imageUrl} title={item.name} description={item.description} />
                break;
            case "LongItemCard":
                return <LongItemCard key={key} imageUrl={BASE_URL+item.imageUrl} title={item.name} description={item.description} />
                break;
            case "RoundedImagesItemCard":        
                return <RoundedImagesItemCard key={key} imageUrl={BASE_URL+item.imageUrl} title={item.name} description={item.description} />
                break;
        }
    })
    );
}
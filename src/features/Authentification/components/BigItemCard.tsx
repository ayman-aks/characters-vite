import { ItemCard } from "./ItemCard"

export const BigItemCard = ({imageUrl, title, description}:{imageUrl:string, title:string, description:string}) => {
    return <ItemCard imageUrl={imageUrl} title={title} description={description} contentClassName="row-span-2 col-span-2" imageClassName="w-[200px] relative left-[25%]" />
}
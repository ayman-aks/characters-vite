import { ItemCard } from "./ItemCard"

export const LongItemCard = ({imageUrl, title, description}:{imageUrl:string, title:string, description:string}) => {
    return <ItemCard imageUrl={imageUrl} title={title} description={description} contentClassName="col-span-2" imageClassName="w-[100px] h-[100px] rounded-[50%] absolute right-2 top-4" />
}
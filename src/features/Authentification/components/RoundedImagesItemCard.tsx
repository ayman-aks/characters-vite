import { ItemCard } from "./ItemCard"

export const RoundedImagesItemCard = ({imageUrl, title, description}:{imageUrl:string, title:string, description:string}) => {
    return <ItemCard imageUrl={imageUrl} title={title} description={description} contentClassName="" imageClassName="w-[50px] h-[50px] rounded-[50%]" />
}
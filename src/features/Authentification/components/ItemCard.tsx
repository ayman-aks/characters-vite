export const ItemCard = ({imageUrl, title, description, contentClassName, imageClassName}:{imageUrl:string, title:string, description:string, contentClassName:string, imageClassName:string}) => {
    return (
        <div className={"bg-gray-600 rounded-xl relative " + contentClassName}>
            <div className={"p-4"}>
                <img src={imageUrl} alt={title} className={imageClassName} />
                <div>
                    <h4 className="capitalize text-xl font-bold text-white">{title}</h4>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    )
}

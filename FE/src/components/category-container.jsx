import { useContext } from "react"
import { CategoryFeature } from "./category-feature"
import { CategoriesWithFoodsContext } from "@/app/page"
import { Card } from "./card";
import { Loading } from "./loading";
import { Error } from "./error";
import { ErrorIcon } from "./icons";

export const CategoryContainer = () => {
    const { response, loading, error } = useContext(CategoriesWithFoodsContext);

    if (loading) return <Loading />
    if (error) return
    (<Error errorMessage="Уучлаарай систем ачааллахад алдаа гарлаа.">
        <ErrorIcon />
    </Error>
    )
    
    return <div className="flex w-[1440px] px-[120px] flex-col items-start gap-20 m-auto mb-20">
        {response &&
            response.map((category) => category.foods.length !== 0 && (<div key={category._id} className="flex flex-col gap-6">
                <CategoryFeature
                    label={category.name} />
                <div className="flex gap-6">
                    {category.foods.slice(0, 4).map((food) => (
                        <Card
                            key={food._id}
                            imageSrc={food.image}
                            mainPrice={food.price}
                            discountPercent={food.discount}
                            foodName={food.name}
                            alt={food.name} />
                    ))}
                </div>
            </div>
            ))
        }
    </div>
}
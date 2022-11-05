import React from 'react'


//Components
import NutritionCard from './NutritionCard'
import NutritionCarousal from './NutritionCarousal'
import NutritionHeroCarousal from './NutritionHeroCarousal'
const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal />
            <div className='my-6'>
                <NutritionCarousal />
            </div>
            <div className='flex justify-start flex-wrap'>
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/protein-jar-mockup_134542-388.jpg?w=826&t=st=1666941044~exp=1666941644~hmac=6a3544dbda8f797af2b98d7a29007279b7aea44c4e8387ad0ce257037c246ffa"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/protein-powder-container-mockup_47987-2908.jpg?w=900&t=st=1665413495~exp=1665414095~hmac=9da82653e0e4ded724d332cb74558c9d3776b7299324c73e68a66cb5451332fb"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/free-psd/hand-holding-fitness-spoon-filled-with-protein-container_23-2148657547.jpg?w=996&t=st=1665413476~exp=1665414076~hmac=2475bcab0996ec7b85baf11c41d75bab56761614ad98382bcea4eb0a80499bf0"
                />
                <NutritionCard
                    bg="red"
                    image="https://img.freepik.com/premium-psd/protein-powder-supplement-packaging-with-dumbbell-mockup_7956-717.jpg?w=996"
                />
                <NutritionCard
                    bg="blue"
                    image="https://img.freepik.com/free-psd/collection-fitness-protein-powder-bags_23-2148657586.jpg?w=996&t=st=1665416816~exp=1665417416~hmac=9e6116551070010a0354905ae6400ab171c1bd0d6e01156f8319783330fa6049"
                />
                <NutritionCard
                    bg="blue"
                    image="https://m.media-amazon.com/images/I/51rxKna6ncL.jpg"
                />
                <NutritionCard
                    bg="blue"
                    image="https://img.freepik.com/free-psd/20-gr-protein-powder-container-mockup-top-view_1332-23464.jpg?w=900&t=st=1666941132~exp=1666941732~hmac=c0c914d3a815a3f867dd52ad39d312eefc56c77c4eb9c744ef89598548c023c1"
                />
                <NutritionCard
                    bg="blue"
                    image="https://img.freepik.com/premium-photo/sports-nutrition-bodybuilding-supplements_104576-227.jpg?w=740"
                />
                <NutritionCard
                    bg="blue"
                    image="https://img.freepik.com/free-vector/woman-dumbbell-sport-nutrition_1284-6586.jpg?w=740&t=st=1666941257~exp=1666941857~hmac=48c052cda5031b40a927fd8e5c47b0a5841a7c305313f23616aae4fcae0515f9"
                />
            </div>
        </div>
    )
}

export default Nutrition
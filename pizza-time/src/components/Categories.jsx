import React, {useState} from 'react'

function Categories({value, onClickToChooseCategory}) {
    // const [activeCategory, setActiveCategory] = useState(0)
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    // const toChooseCategory = (index) =>{
    //     setActiveCategory(index)
    // }

    return (
        <div className="categories">
        <ul>
            {categories.map( (item, i) => (
                <li key={i} onClick={ () => onClickToChooseCategory(i)} className={value === i ? 'active' : ''}>{item}</li>
            ))}   
        </ul>
      </div>
    )
}

export default Categories;
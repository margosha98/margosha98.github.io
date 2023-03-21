import React, {useState} from 'react'

function Categories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    const toChooseCategory = (index) =>{
        setActiveCategory(index)
    }

    return (
        <div className="categories">
        <ul>
            {categories.map( (value, i) => (
                <li key={i} onClick={ () => toChooseCategory(i)} className={activeCategory === i ? 'active' : ''}>{value}</li>
            ))}   
        </ul>
      </div>
    )
}

export default Categories;
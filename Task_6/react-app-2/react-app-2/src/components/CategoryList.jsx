import React from 'react';
import Category from './Category';
import cl from "../styles/components-styles.module.css"

const CategoryList = ({categories, setActiveTasks, remove, setAddModal, setCategories}) => {
    let levelStyle = cl.list_1_level
    if(categories === undefined){
        return
    }

    return(
        <div className={levelStyle}>
            {categories.map(category =>
            <Category id={category.id} title={category.title} categories={category.categories} key={category.id} 
            setActiveTasks={setActiveTasks} tasks={category.tasks} remove={remove} setAddModal={setAddModal} setCategories={setCategories}/>
            )}
        </div>
    )
}

export default CategoryList
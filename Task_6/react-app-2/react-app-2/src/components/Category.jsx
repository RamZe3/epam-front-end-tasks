import React, { Component, useState } from 'react';
import BaseButton from '../UI/Buttons/BaseButton';
import CategoryList from './CategoryList';
import AddCategory from '../UI/Modals/AddCategory';
import AddCategoryForm from '../components/Forms/AddCategoryForm';
import cl from "../UI/Buttons/BaseButton.module.css"
const Category = (props) => {
    const [categories, setCategories] = useState(props.categories)
    const [tasks, setTasks] = useState(props.tasks)
    const [modal, setModal] = useState(false);

    const createCategory = (category) => {
        setTasks([{id: 123, title: "asd", done:true}])
        console.log("AD")
        if(categories === undefined){
            setCategories([category])
        }
        setCategories([category, ...categories])
      }

    const removeCategory = (id) => {
        setCategories(categories.filter(c => c.id !== id))
      }

    const setActive= () =>{
        props.setActiveTasks(props.tasks)
    }

    const addModal= () =>{
        //props.setCategories(setCategories)
        setModal(true)
    }

    let category = null
    if(props.child === true){
        category = {id: props.id, title:props.title, categories:props.categories, tasks:props.tasks}
    }

    return(
        <div className="category">
            <div className='cat-left'>
                <BaseButton onClick={setActive} className = {cl.butmain}>
                    <strong>{props.id + " " + props.title + " " + tasks}</strong>
                </BaseButton>
                <BaseButton className={cl.but}>Edit</BaseButton>
            </div>
            <div className='cat-right'>
                <div className='cat-right-l'>
                <BaseButton className={cl.but} onClick={() => props.remove(props.id, category)}>R</BaseButton>
                <BaseButton className={cl.but} onClick={() => addModal()}>A</BaseButton>
                </div>
            </div>

            
            <CategoryList categories={categories} setActiveTasks={props.setActiveTasks}
             remove={removeCategory} setAddModal={props.setAddModal} setCategories={setCategories}/>

            <AddCategory visible={modal} setVisible={setModal}><AddCategoryForm create={createCategory} setVisible={setModal}/></AddCategory>
        </div>
    )
}

export default Category
//<button onClick={setActive}><strong>{props.id + " " + props.title + " " + props.tasks}</strong></button>
//<BaseButton onClick={() => createChildCategory({id: props.id, title:props.title, categories:props.categories, tasks:props.tasks})}>Add</BaseButton>
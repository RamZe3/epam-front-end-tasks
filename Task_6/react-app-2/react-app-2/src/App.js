import React, { useState, useMemo } from 'react';
import Category from './components/Category';
import CategoryAdd from './components/CategoryAdd';
import CategoryList from './components/CategoryList';
import CategorySearch from './components/CategorySearch';
import AddCategoryForm from './components/Forms/AddCategoryForm';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import TaskSearchCheckbox from './components/TaskSearchCheckbox';
import './styles/App.css';
import AddCategory from './UI/Modals/AddCategory';


function App() {
  const [modal, setModal] = useState(false);
  //const [searchCQuery, setSearchCQuery] = useState({query: ""})
  const [searchTQuery, setSearchTQuery] = useState({query: ""})
  const [searchDoneQuery, setSearchDoneQuery] = useState({query: "true"})
  const [activeTask, setActiveTask] = useState()

  const [tasks, setTasks] = useState([])
  const [categories, setCategories] = useState([{id: 1231, title: "Qew", categories: [
    {id: 12311, title: "Qew"}, {id: 12312, title: "Qew"}]}
  , {id: 12412, title: "withTasks", tasks: [{id: 123, title: "asd", done:true}]}
])

  //Category
  const removeCategory = (id, category) => {
    console.log(category)
    if(category !== null){
      console.log("child")
    }
    setCategories(categories.filter(c => c.id !== id))
  }

  const createCategory = (category) => {
    setCategories([category, ...categories])
  }

  const createChildCategory = (category, categories, setCategories) => {
    //var buf = categories.filter(n => n.id !== category.id)
    //category.categories = [...category.categories, childCategory]
    //var buf = categories.filter(n => n.id !== category.id)
    //setCategories([category, ...buf])
    //setCategories(categories.filter(c => c.id !== category.id))
    //var buf = categories.filter(n => n.id !== category.id)
    //setCategories([category, ...buf])
    //setCategories(buf)
    //let cat = category
    //category.categories = [...category.categories, childCategory]
    //console.log(category)
    //setCategories([cat, ...categories])
  }

  //Tasks
  const setActiveTasks = (tasks) => {
    setTasks(tasks)
  }

  const createTask = (task) => {
    setActiveTasks([task, ...tasks])
  }

  const filterTasks = useMemo(() => {
    if(searchTQuery.query === ""){
      return tasks
    }
    return tasks.filter(n => (n.title.toLocaleLowerCase().includes(searchTQuery.query.toLocaleLowerCase()))
    )
  }, [searchTQuery, tasks])

  const filterSearchTasks = useMemo(() => {
    //searchDoneQuery
    if(searchTQuery.query === ""){
      return tasks
    }
    return tasks.filter(n => (n.title.toLocaleLowerCase().includes(searchTQuery.query.toLocaleLowerCase()))
    )
  }, [searchTQuery, filterTasks])

  return (
    <div className="App">
      <div className='header'>
        <div className='header-1'>
          <div className='text-content'>TO-DO List</div> 
          <TaskSearchCheckbox searchCheckQuery={searchDoneQuery} setSearchCheckQuery={setSearchDoneQuery}/>
          <TaskSearch searchQuery={searchTQuery} setSearchQuery={setSearchTQuery}/>
        </div>
        <div className='progress-bar'><br/></div>
        <div className='header-2'>
          <div className='add-category'>
            <div className='add-c-inp'>
            <CategoryAdd addCategory={createCategory}/>
            </div>
          </div>
          <div className='add-task'>
            <div className='add-t-inp'>
            <TaskAdd addTask={createTask}/>
            </div>
          </div>
        </div>
      </div>
      <div className='main-content'>
        <div className='categories'>
          <CategoryList categories={categories} setActiveTasks={setActiveTasks} 
          remove={removeCategory} setAddModal={setModal} setCategories={setCategories}/>
        </div>
        <div className='content'>
          <TaskList tasks={filterTasks}/>
        </div>
      </div>


    </div>
  );
}

export default App;

//<CategorySearch searchQuery={searchCQuery} setSearchQuery={setSearchCQuery}/>

// 83 <AddCategory visible={modal} setVisible={setModal}><AddCategoryForm create={createCategory} setVisible={setModal}/></AddCategory>

import React from 'react'
import MenuItem from './MenuItem'
import menu from '../restaurantMenu'

export const Menu = () => {

    const [list, setList] = React.useState(menu)

    // unique categories
    const buttonsCategories = [ "all", ...new Set(menu.map(listItem => listItem.category))]

    const filterFunc = (buttonCategory) => {
        if (buttonCategory == "all") {
            setList(menu)
        } else {
            setList(menu.filter( f => f.category == buttonCategory))
        }
        
    }

  return (
    <>
        <div className='menu-title'>
            <h2>
                Restaurant Menu
            </h2>
        </div>
        <div className='buttons-container'>
            {buttonsCategories.map(buttonCategory => {
                return (<button key={buttonCategory}
                                onClick={() => filterFunc(buttonCategory)}>
                            {buttonCategory}
                        </button>)})}
        </div>  
        <div className='menu-items-container'>
            {list.map(item => <MenuItem {...item} key={item.id}/>)}    
        </div>
    </>
  )
}

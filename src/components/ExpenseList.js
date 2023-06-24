import React from 'react'

const ExpenseList = ({value}) => {
    
  return (
    <div className='card m-5 p-4'>
        <center>
        <h2>Expense List</h2>
        <h4 className='w-50 d-flex justify-content-around '> <i>Spent Money</i> <i>Category</i> <i>Description</i></h4>
        {value.map((item)=>
            <div className='border border-2 border-black p-2 w-50 d-flex justify-content-around mt-3'style={{fontWeight:400}}>
            <span className='ms-5'  >$. {item.price}</span>
            <span className='ms-5' >{item.category}</span>
            <span className='ms-5' >{item.description}</span>
        </div>
           
        )}
        </center>
    </div>
  )
}

export default ExpenseList
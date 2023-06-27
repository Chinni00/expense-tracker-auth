import { useState } from "react";

const ExpenseList = ({value,onDelete,onEdit}) => {
  let [total,setTotal]= useState(0)
  const  [isPremium,setIspremium] = useState(false)

const rupeeSymbol = "\u20B9" 
let expense = Object.entries(value[0])
expense.forEach((expense)=>{
   total=total+ Number(expense[1].price)
  
})


   console.log('total',total) 
  return (
    <div className="card m-5 p-4">
      <center>
        <h2>Expense List</h2>
        <h4 className=" d-flex justify-content-around" style={{width:'60%',marginLeft:'-160px'}}>
          <i>Spent Money</i> <i style={{marginLeft:'-60px'}}>Category</i> <i style={{marginLeft:'-50px'}}>Description</i>
        </h4>
        {expense.map((item) => (
             <div
             key={item[0]}
             className="border border-2 border-black p-2 w-75 d-flex justify-content-around mt-3"
             style={{ fontWeight: 400 }}
           >
             <span className="ms-5 "> {rupeeSymbol}. {item[1].price}</span>
             <span className="ms-5">{item[1].category}</span>
             <span className="ms-5">{item[1].description}</span>

             <button className="btn btn-danger" onClick={()=>{onDelete(item[0])}}>Delete</button>
             <button className="btn btn-success opacity-75" onClick={()=>{onEdit(item[0])}}>Edit</button>
           </div>
         
        ))}
        
      </center>
    </div>
  );
};

export default ExpenseList;

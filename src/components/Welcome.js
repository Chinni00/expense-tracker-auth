import React, { useEffect,  useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ExpenseList from "./ExpenseList";

const Welcome = () => {
  const [id,setId]=useState('')
  const [total,setTotal] = useState(0)
  const [isEdit,setIsEdit] = useState(false)
  const [expenses,setExpenses] = useState([])
   const moneyInputRef = useRef()
   const descriptionInputRef = useRef()
   const categoryInputRef = useRef()

   const fetchingHandler = () => {
    fetch('https://expense-tracker-auth-b79c5-default-rtdb.firebaseio.com/expenses.json')
      .then(res => res.json())
      .then(data => {
         setExpenses([data])
      })
      .catch(err => console.log(err));
  };
  

  const submitHandler = (event) => {
     event.preventDefault()
      const enteredMoney = moneyInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    let obj = {
      price: enteredMoney,
      description: enteredDescription,
      category: enteredCategory
    };
     
    if(!isEdit){
     

   
    fetch('https://expense-tracker-auth-b79c5-default-rtdb.firebaseio.com/expenses.json', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        moneyInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        categoryInputRef.current.value = '';
        fetchingHandler(); // Fetch expenses again after the new expense is saved
      })
      .catch(err => console.log(err));
    }else{
      
      
      if (!enteredMoney || !enteredDescription || !enteredCategory) {
        alert("Please fill in all the fields");
        return;
      }
      
      const obj = {
        price: enteredMoney,
        description: enteredDescription,
        category: enteredCategory
      };
    
      fetch(`https://expense-tracker-auth-b79c5-default-rtdb.firebaseio.com/expenses/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          moneyInputRef.current.value = '';
          descriptionInputRef.current.value = '';
          categoryInputRef.current.value = '';
          fetchingHandler(); // Fetch expenses again after the expense is edited
          alert('Edited successfully');
        })
        .catch(err => console.log(err));
        setIsEdit(false)
    }
  };

  const deleteHandler=(id)=>{
   console.log(id)
   fetch(`https://expense-tracker-auth-b79c5-default-rtdb.firebaseio.com/expenses/${id}.json`,{
    method:'DELETE'
   }).then(res=>res.json()).then(data=>fetchingHandler())
   
  }

  const editHandler = (id) => {
    setIsEdit(true)
    submitHandler(id)
    alert('edit mode is on')
    moneyInputRef.current.focus()
  };
  
 const idHandler=(id)=>{
setId(id)
moneyInputRef.current.focus()
setIsEdit(true)
 }
  
   
  useEffect(()=>{
   fetchingHandler()
  },[])

  console.log(expenses)
  return (
    <div>
      <Navbar value={expenses}/>
      <center>
        <h1>Welcome to expense tracker</h1>
        <div className="w-50 mt-4">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className=" float-start">Spent Money:</label>
              <input
               ref={moneyInputRef}
                type=""
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter money"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="exampleInputPassword1" className=" float-start">Description:</label>
              <input
                ref={descriptionInputRef}
                type=""
                className="form-control"
                id="exampleInputPassword1"
                placeholder="description"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="exampleFormControlSelect1" className=" float-start">Category :</label>
              <select ref={categoryInputRef} className="form-control" id="exampleFormControlSelect1">
                <option defaultValue={'none'}   >Select Category</option>
                <option>Food</option>
                <option>Petrol</option>
                <option>Entertainment</option>
                <option>Others</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
             { isEdit? 'Edit':'Add'}
            </button>
          </form>
        </div>
      </center>
     {expenses.length>0 && <ExpenseList  value={expenses} onDelete={deleteHandler} onEdit={idHandler} />}

    </div>
  );
};

export default Welcome;

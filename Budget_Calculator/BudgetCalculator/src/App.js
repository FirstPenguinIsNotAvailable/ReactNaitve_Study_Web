
import React, { useEffect, useState } from 'react';

import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'react-native-uuid';

import "./App.css";

const initialExpenses = localStorage.getItem("expenses") 
                          ? JSON.parse(localStorage.getItem('expenses')) : [];

const App = () => {
  // ************ state values **************
  // all expenses
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState('');

  // single amount
  const [amount, setAmount] = useState('');

  // alert
  const [alert, setAlert] = useState({ show: false });

  // edit
  const [isEdit, setIsEdit] = useState(false);

  // edit item
  const [editId, setEditId] = useState(0);

  // ************* save expenses *************
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ************ functionality **************
  /*
    * e.target.value *
    => 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다. 
    이 DOM 의 value 값, 즉 e.target.value 를 조회하면 
    현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
  */

  // handle charge
  const handleCharge = e => {
    setCharge(e.target.value);
  }

  // handle amount
  const handleAmount = e => {
    setAmount(e.target.value);
  }

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000); 
  }

  /*
    1. a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
    2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)

    ref: https://programming119.tistory.com/100
  */
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    if(charge !== '' && amount > 0){
      if(isEdit){
        let editedExpenses = expenses.map(item => {
          return item.id === editId ? { ...item, charge, amount } : item;
        });
        setExpenses(editedExpenses);
        handleAlert({ type: 'success', text: 'item is edited' });
        setIsEdit(false);
      } else {
        const singleExpense = { id: uuid.v4(), charge, amount };
        setExpenses([ singleExpense, ...expenses ]);
        handleAlert({ type: 'success', text: 'item added perfectly' })
      }

      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: 'danger', text: 'item is not added. Please fill out the blanks' })
    }
  };

  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  }

  // handle edit
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);

    const { charge, amount } = expense;
    
    setCharge(charge);
    setAmount(amount);
    setIsEdit(true);
    setEditId(id);
  } 

  // handle delete
  const handleDelete = (id) => {
    let deletedExpenseById = expenses.filter(item => item.id !== id);
    setExpenses(deletedExpenseById);
    handleAlert({ type: "danger", text: "item deleted" });
  }



  return (
      <>
        {alert.show ? <Alert type={ alert.type } text={ alert.text }/> : null}
        <h1> budget caclulator </h1>
        {/*
          * main *
          <main> 태그는 해당 문서의 <body> 요소의 주 콘텐츠(main content)를 정의할 때 사용합니다.
          <main> 요소의 콘텐츠는 해당 문서의 중심 주제 또는 주요 기능과 직접적으로 관련되어 있거나 확장되는 콘텐츠로 구성되어야 하며, 문서 전반에 걸쳐 반복되는 내용을 포함해서는 안 됩니다.
          따라서 하나의 문서에는 단 하나의 <main> 요소만이 존재해야 하며, <main> 요소는 <article>, <aside>, <footer>, <header>, <nav> 요소의 자손 요소가 되어서는 안 됩니다.
         
          * className *
          css에서 class selector를 RN에서는 className로 사용함.
         */}
        <main className='App'>
          <ExpenseForm 
            charge={ charge } 
            amount={ amount } 
            handleAmount={ handleAmount }
            handleCharge={ handleCharge }
            handleSubmit={ handleSubmit }
            isEdit={ isEdit }
          />
          <ExpenseList 
            expenses={ expenses } 
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
            clearItems={ clearItems } 
          />
        </main>
        <h1>
          total spending : <span className='total'>
            ${expenses.reduce((acc, curr) => {
              return (acc += parseInt(curr.amount));
            }, 0)}
          </span>
        </h1>
      </>
  );
}

export default App;

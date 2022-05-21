import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
    const {id, charge, amount} = expense;

    return (
        <li className="item">
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div>
                {/* aria-label는 액세스 가능한 도움말이나 설명 텍스트를 추가할 수 있는 유일한 방법 */}
                <button 
                    className="edit-btn" 
                    aria-label='edit button' 
                    onClick={ () => handleEdit(id) }
                >
                    <MdEdit />
                </button>
                <button 
                    className="clear-btn" 
                    aria-label='delete button' 
                    onClick={ () => handleDelete(id) }
                >
                    <MdDelete />
                </button>
            </div>
        </li>
    );
}

export default ExpenseItem;

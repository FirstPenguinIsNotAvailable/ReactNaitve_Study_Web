import React from 'react'
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ 
    charge, 
    amount, 
    handleCharge, 
    handleAmount, 
    handleSubmit,
    isEdit
}) => {
    
    return (
        <form onSubmit={ handleSubmit }>
            {/*
                * form *
                definition: 입력 양식 전체를 감싸는 태그
                ref: https://inpa.tistory.com/entry/HTML-%F0%9F%93%9A-%ED%8F%BCForm-%ED%83%9C%EA%B7%B8-%EC%A0%95%EB%A6%AC#%3Cform%3E_%ED%83%9C%EA%B7%B8
            
                method	전송 방식 선택
                    1) get : 256~4096 byte까지만 전송 가능
                    2) post : 입력 내용의 길이에 제한 X
                name	form의 이름, 서버로 보내질 때 이름의 값으로 데이터 전송
                action	form을 전송할 서버 쪽의 script 파일을 지정
                        전송되는 서버 url 또는 html 링크
                target	action에서 지정한 script 파일을 현재 창이 아닌 다른 위치에 열도록 지정
                autocomplete	자동 완성. on으로 하면 form 전체에 자동 완성 허용

                * onSubmit *
                definition: HTML 내에서 form 전송을 하기전에  입력된 데이터의 유효성을 체크하기 위해서 onsubmit 이벤트를 사용합니다.
                ref: https://ismydream.tistory.com/81
            */}
            <div className="form-center">
                <div className='form-group'>
                    {/*
                        * label *
                        1. label은 폼의 양식에 이름 붙이는 태그이다.
                        2. 주요 속성은 for이다. label의 for의 값과 양식의 id의 값이 같으면 연결된다.
                        3. label을 클릭하면, 연결된 양식에 입력할 수 있도록 하거나, 체크를 하거나, 체크를 해제한다.
                        
                        $ react native에서는 for 대신 htmlFor을 사용한다.
                        $ name attr은 input을 submit 했을 때 그 값을 받을 수 있게 한다.

                        ref: https://velog.io/@agatha/label, https://www.codingfactory.net/11008
                    */}
                    <label htmlFor='charge'>charge</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        id='charge' 
                        name='charge'
                        placeholder='e.g. rent'
                        value={ charge }
                        onChange={ handleCharge }    
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>amount</label>
                    <input 
                        type="number" 
                        className='form-control' 
                        id='amount' 
                        name='amount'
                        placeholder='e.g. 1600'
                        value={ amount }
                        onChange={ handleAmount }    
                    />
                </div>
            </div>
            <button type='submit' className='btn'>
                { isEdit ? 'edit' : 'submit' }
                <MdSend className='btn-icon'/>
            </button>
        </form>
    );
}

export default ExpenseForm;

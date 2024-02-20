import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const UserInput = ({ isLoading, onSubmit }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [foodList, setFoodList] = useState(['']);
  const [buttonOn, setButtonOn] = useState(false);
  const [role, setRole] = useState('');
  const [skill, setSkill] = useState('');
  const [ingredient, setIngredient] = useState([]);

  const onChangeInput = (e) => {
    if(e.target.name === 'role') {
      setRole(e.target.value)
    } else if (e.target.name === 'skill') {
      setSkill(e.target.value)
    } 
  }

  // 로딩중 상태일 때 사용자가 제출 버튼을 누르지 못하도록 처리

  // 버튼 클릭시 재료 input 추가/삭제
  useEffect(() => {
    if(foodList.length > 1) {
      setButtonOn(true);
    } else {
      setButtonOn(false);
    }
  }, [foodList]);

  const AddButtonClick = () => {
    setFoodList(prev => [...prev, '']);
  };

  const deleteButtonClick = () => {
    setFoodList(prev => {
      const list = [...prev];
      list.pop();

      return list
    });

    setIngredient(prev => {
      const list = [...prev];
      list.pop();

      return list
    });
  };

  // 결과 버튼 로직
  const resultButtonClick = () => {
    if(!role | !skill | ingredient.length === 0 ) {
      messageApi.open({
        type: 'error',
        content: '빈칸 없이 모두 입력해주세요. 🫨 ',
      });

      return;
    }

    messageApi.open({
      type: 'success',
      content: '딱 맞는 레시피를 곧 알려드릴게요! 🥰',
    });

    onSubmit(role, skill, ingredient);
  };

  // antd 스타일
  const fontSize = {fontSize: "1.75rem"}
  const buttonStyle = {width: "fit-content", height: "fit-content", fontSize: "1.3rem", padding: ".8rem 2.3rem"}

  return (
    <div className='text-center flex flex-col items-center gowun-batang-bold'>
      {contextHolder}
      {/* Form */}
      <div className='flex items-center text-4xl my-8'>
        <div className='mr-3 w-fit'>나는</div>
        <div className='w-fit'>
          <Input name='role' placeholder="자취생" variant="filled" size='large' style={fontSize} value={role} onChange={onChangeInput}/>
        </div>
        <div className='ml-3 w-fit'>입니다.</div>
      </div>

      <div className='flex items-center text-4xl my-8'>
        <div className='mr-3 w-fit'>나의 요리 실력은</div>
        <div className='w-fit'>
          <Input name='skill' placeholder="중급" variant="filled" size='large' style={fontSize} value={skill} onChange={onChangeInput} />
        </div>
        <div className='ml-3 w-fit'>이고,</div>
      </div>

      <div className='flex items-center text-4xl my-8'>
        <div className='mr-3 w-fit'>나의 냉장고에는</div>
        <div className='w-fit flex items-center'>
          <div>
            {foodList.map((item, idx) => {
              return  <div className='mt-3' key={idx}>
                <Input 
                  placeholder={foodList.length > 1 ? "" : "감자 1개"}
                  variant="filled" 
                  size='large' 
                  style={fontSize} 
                  value={ingredient[idx]}
                  onChange={(e) => {
                    const newList = [...ingredient];
                    newList[idx] = e.target.value
                    setIngredient(newList)
                  }}
                  />
                </div>
            })}
  
          </div>
          <div className='ml-3' onClick={AddButtonClick}><Button type="dashed" size={'large'} icon={<PlusOutlined />} /></div>
          {buttonOn ? <div className='ml-3' onClick={deleteButtonClick}><Button type="dashed" size={'large'} icon={<MinusOutlined />} /></div> : ''}
        </div>
        <div className='ml-3 w-fit'>가 있어요.</div>
      </div>


      {/* Result */}
      <div className='my-14'>
        <Button shape="round" loading={isLoading} onClick={resultButtonClick} style={buttonStyle}>딱 맞는 레시피는?</Button>      
      </div>      
      
    </div>
  )
}

export default UserInput;

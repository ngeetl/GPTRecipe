import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const UserInput = ({ isLoading, onSubmit }) => {
  const [foodList, setFoodList] = useState([]);
  const [buttonOn, setButtonOn] = useState(false);
  // 사용자의 입력을 받아, 상위 컴포넌트로 데이터를 전달

  // 로딩중 상태일 때 사용자가 제출 버튼을 누르지 못하도록 처리

  // 버튼 클릭시 재료 input 추가/삭제
  const food = <Input placeholder="감자 1개" variant="filled" size='large' style={{fontSize: "1.75rem"}} />

  const AddButtonClick = () => {
    setFoodList(prev => [...prev, food])
  }

  const deleteButtonClick = () => {
    setFoodList(prev => {
      const list = [...prev];
      list.pop();

      return list
    })
  }

  useEffect(() => {
    if(foodList.length > 0) {
      setButtonOn(true);
    } else {
      setButtonOn(false);
    }
  }, [foodList]);

  const fontSize = {fontSize: "1.75rem"}


  return (
    <div className='text-center flex flex-col items-center'>
      <div className='flex items-center text-3xl my-8'>
        <div className='mr-3 w-fit'>나는</div>
        <div className='w-fit'>
          <Input placeholder="자취생" variant="filled" size='large' style={fontSize} />
        </div>
        <div className='ml-3 w-fit'>입니다.</div>
      </div>

      <div className='flex items-center text-3xl my-8'>
        <div className='mr-3 w-fit'>나의 요리 실력은</div>
        <div className='w-fit'>
          <Input placeholder="중급" variant="filled" size='large' style={{fontSize: "1.75rem"}} />
        </div>
        <div className='ml-3 w-fit'>입니다.</div>
      </div>

      <div className='flex items-center text-3xl my-8'>
        <div className='mr-3 w-fit'>나의 냉장고에는</div>
        <div className='w-fit flex items-center'>
          <div>
            {food}
            {foodList.map((item, idx) => {
              return <div className='mt-2' key={idx}>{item}</div>
            }
            )}
          </div>
          <div className='ml-3' onClick={AddButtonClick}><Button type="dashed" size={'large'} icon={<PlusOutlined />} /></div>
          {buttonOn ? <div className='ml-3' onClick={deleteButtonClick}><Button type="dashed" size={'large'} icon={<MinusOutlined />} /></div> : ''}
        </div>
        <div className='ml-3 w-fit'>가 있어요.</div>
      </div>

    </div>
  )
}

export default UserInput;

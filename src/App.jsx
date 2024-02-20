import { useState } from 'react';
import './App.css'
import { CallGPT } from './api/gpt';
import UserInput from './components/UserInput';
import Recipe from './components/Recipe';
import { message } from 'antd';

const dummyData = JSON.parse(
  `{ "name": "감자돼지고기전", "recipe": ["감자를 간다.", "양파와 돼지고기를 잘게 다진다.", "계란을 푼다.", "감자, 양파, 돼지고기를 섞어 전용 소스로 볶는다.", "계란물을 부어 전체를 덮고 뒤집어 익힌다."], "level": 4, "advice": "감자와 돼지고기의 양을 조절하여 맛을 조절할 수 있습니다. 먹기 쉽도록 적당히 크기조절을 해보세요.", "keyword": ["한식", "존맛탱"] }`
  );

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const apiCallHandler = async (role, skill, ingredient) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `나는 ${role}이고, 요리 실력은 ${skill}이야. 재료는 ${ingredient.map(item => item)} 있어.`
      });
      setData(JSON.parse(message));

    } catch (err) {
      messageApi.open({
        type: 'error',
        content: '레시피를 불러오지 못했습니다. 다시 시도해주세요. 😔',
      });
      setIsError(true)
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = (role, skill, ingredient) => {
    apiCallHandler(role, skill, ingredient);
  };


  return (
    <>
      {contextHolder}

      {/* Header */}
      <div className='text-[41px] font-[900] text-amber-700 mt-3 mb-20'>🍽️🥗🍜🍝🍲 <span className='text-[55px] song-myung-regular'>GPTR</span> 🍗🌭🍟🍕🥨</div>

      {/* main */}
      <UserInput isLoading={isLoading} onSubmit={submitHandler} />
      {isError ? <>
      <div className='text-[400px]'>😔</div>
      <div className='text-[30px] font-gray-600 font-thin'>❌ 레시피를 불러오지 못했습니다. 다시 시도해주세요.</div></> :
      data && <Recipe data={data}/>
      }

      {/* Footer */}
      <div className='text-gray-400 font-light text-center mt-40 mb-10'>Copyright © 이예인 All rights reserved</div>
    </>
  )
}

export default App

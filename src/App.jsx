import { useState } from 'react';
import './App.css'
import { CallGPT } from './api/gpt';
import UserInput from './components/UserInput';
import Recipe from './components/Recipe';

const dummyData = JSON.parse(
  `{ "name": "감자돼지고기전", "recipe": ["감자를 간다.", "양파와 돼지고기를 잘게 다진다.", "계란을 푼다.", "감자, 양파, 돼지고기를 섞어 전용 소스로 볶는다.", "계란물을 부어 전체를 덮고 뒤집어 익힌다."], "level": 4, "advice": "감자와 돼지고기의 양을 조절하여 맛을 조절할 수 있습니다. 먹기 쉽도록 적당히 크기조절을 해보세요.", "keyword": ["한식", "존맛탱"] }`
  );

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);

  const apiCallHandler = async (role, skill, ingredient) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `나는 ${role}이고, 요리 실력은 ${skill}이야. 재료는 ${ingredient.map(item => item)} 있어.`
      });
      setData(JSON.parse(message));

    } catch (err) {
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
      <UserInput isLoading={isLoading} onSubmit={submitHandler} />
      <Recipe data={data}/>
    </>
  )
}

export default App

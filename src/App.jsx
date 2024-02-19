import { useState } from 'react';
import './App.css'
import { CallGPT } from './api/gpt';

const dummyData = JSON.parse(
  `{ "name": "감자돼지고기전", "recipe": ["감자를 간다.", "양파와 돼지고기를 잘게 다진다.", "계란을 푼다.", "감자, 양파, 돼지고기를 섞어 전용 소스로 볶는다.", "계란물을 부어 전체를 덮고 뒤집어 익힌다."], "level": 7, "advice": "감자와 돼지고기의 양을 조절하여 맛을 조절할 수 있습니다. 먹기 쉽도록 적당히 크기조절을 해보세요." }`
  );

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);

  const apiCallHandler = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `나는 자취생이고, 요리 실력은 중급이야. 재료는 감자 2개, 돼지고기 1근, 양파 1개, 계란 4개가 있어.`
      });
      setData(JSON.parse(message));

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button onClick={apiCallHandler}>GPT API</button>
      <div>data: {data.name}</div>
      <div>isLoading : {isLoading ? "Loading.." : "fin"}</div>
    </>
  )
}

export default App

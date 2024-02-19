export const CallGPT = async ({ prompt }) => {
  console.log("Call GPT");

  const messages = [
    {
      role: "system",
      content: `당신은 요청받은 음식의 재료로 요리 실력과 직업을 고려하여 레시피를 만들어 줍니다. 다음의 순서로 진행합니다.`
    },
    {
      role: "user",
      content: `1. [name] : 하단의 """으로 구분된 [request]을 이해하여 레시피들을 정한 후, 레시피의 이름들을 적어줍니다.
      2. [recipe] : [name]의 레시피를 순서대로 리스트로 적어줍니다.
      3. [level] : [name]의 레시피의 난이도를 1~10까지 정해줍니다.
      4. [advice] : [name]을 만드는 것에 대한 조언을 적어줍니다.
      다음 JSON형식을 출력을 이용하십시오:
      { 
          name: here is [name],
          recipe: here is [recipe],
          level: here is [level]
          advice: here is [advice],
      }
      
      [request]: `
    },
    {
      role: "user",
      content: `"""${prompt}"""`
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
        max_tokens: 1000,
    })
  });

  const responseData = await response.json();
  console.log(">> responseData", responseData);

  const message = responseData.choices[0].message.content

  return message;
}


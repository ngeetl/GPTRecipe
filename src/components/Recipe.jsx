import React from 'react'

const Recipe = ({ data }) => {

    // Level
    const level = data.level;

    const levelLoop = () => {
        let stars = "";
        for (let index = 0; index < level; index++) {
            stars += "⭐"
        }
        return stars;
    }

    // Recipe
    const recipeList = data.recipe;

  return (
    <div className="mb-16 mt-6">
      <div className="border min-w-lg rounded overflow-hidden shadow-lg p-10">
        <div className="px-6 py-4">
            <div className="font-bold text-4xl mb-2 pb-2">{data.name}</div>
            <div className="text-gray-700 text-3xl pb-16">{levelLoop()}</div>
            <ul className=""> 
            <div className='text-red-400 font-bold text-2xl mb-7'>👨🏻‍🍳 Recipe!</div>
                {recipeList.map((item, idx) => {
                    return <li className='text-gray-900 text-2xl font-thin mb-8' key={idx}>{(idx + 1) + ". " + item}</li>
                })}
            </ul>
            <div className="text-gray-600 text-base mt-14 mb-7">💡Tip: {data.advice}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
            {data.keyword.map((item, idx) => <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>)}
        </div>
        </div>
    </div>
  )
}

export default Recipe

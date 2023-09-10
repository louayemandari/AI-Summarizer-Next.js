import React, { useState } from 'react';
import axios from 'axios';
import RedoIcon from '@mui/icons-material/Redo';
function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [passage,setPassage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way

    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_URL, {
        params: {
          url: article.url,
          length: '1', // You can adjust the length as needed
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
        },
      });

      // Update the state with the summary
      setArticle({ ...article, summary: response.data });

      // Log the summary to the console (you can customize this part)
      console.log('Summary:', response.data.summary);
      setPassage(response.data.summary)
      
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="bg-black text-white bg-opacity-80 p-6 rounded-lg shadow-lg flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex">
          <RedoIcon
           
            className="w-8 h-8 text-blue-500 cursor-pointer"
            onClick={(e)=>{setArticle('')}}
          />
          <input
            required
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            type="text"
            className="bg-transparent border-b border-white focus:outline-none focus:border-blue-500 text-white placeholder-white flex-grow"
            placeholder="Enter article URL..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white ml-2 px-4 py-2 rounded-full transition duration-300"
          >
            🔎
          </button>
        </form>
      </div>
      {passage==''?null:
        <p className='text-slate-50 bg-gradient-to-br rounded-2xl items-center justify-center mx-7 text-center from-blue-400 to-gray-900'>
        {passage}
      </p> }
      
      
     
    </section>
  );
}

export default Demo;

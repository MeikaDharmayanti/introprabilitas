// import { useState, useEffect } from "react";
// import { InfinitySpin } from "react-loader-spinner";
// import { getNews } from "../../api/newsAPI";
// import NewsCards from "../../components/NewsCards";
// import SectionHeader from "../../components/SectionHeader";
// import axios from "axios"
// const Dashboard = () => {
//     const [data, setDatas] = useState(null);
//     const getData = async()=> {
//         try{
//             const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=72b9597ef47e43dc83d993251e9caaac');
//             console.log(response.data.articles)
//             setDatas(response.data.articles)
//         }catch(e){
//             console.log(e)
//         }
//     }
//     useEffect(()=> {
//         getData()
//     },[])

//     return (
//         <>
//             <SectionHeader title="Maniac Reading" />
//             {
//                 data ?
//                     <NewsCards data={data} />
//                     :
//                     <InfinitySpin color="black" />
//             }
//         </>
//     );
// };

// export default Dashboard;

// import { useState, useEffect } from "react";
// import { InfinitySpin } from "react-loader-spinner";
// import { getNews } from "../../api/newsAPI"; // Ensure this returns a promise
// import NewsCards from "../../components/NewsCards";

// const Dashboard = () => {
//     const [news, setNews] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await getNews(); // Assuming getNews returns a promise
//                 console.log(response); // Log the response to check its structure
//                 const newsData = Array.isArray(response.data) ? response.data : []; // Ensure it's an array
//                 setNews(newsData);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching news:", error);
//                 setLoading(false);
//             }
//         };

//         fetchNews();
//     }, []);

//     return (
//         <div className="p-8">
//             <header className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-bold"></h1>
//                 <div className="flex space-x-4">
//                     <input type="text" placeholder="Kata Kunci" className="border p-2" />
//                     <select className="border p-2">
//                         <option>Genre</option>
//                     </select>
//                     <button className="bg-blue-600 text-white px-4 py-2">CARI</button>
//                     <button className="bg-blue-600 text-white px-4 py-2">Akun</button>
//                 </div>
//             </header>
//             <main>
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-bold">Koleksi Populer</h2>
//                     <button className="bg-blue-600 text-white px-4 py-2">Download</button>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                     {loading ? (
//                         <InfinitySpin width='200' color="#4fa94d" />
//                     ) : (
//                         Array.isArray(news) && news.length > 0 ? (
//                             news.map((item, index) => (
//                                 <NewsCards key={index} newsItem={item} />
//                             ))
//                         ) : (
//                             <p>No news available.</p>
//                         )
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API or database
    fetch("/api/news")
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : news.length === 0 ? (
        <div>No news available.</div>
      ) : (
        <ul>
          {news.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
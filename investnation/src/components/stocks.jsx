import { getRedditSentiment } from "../api";
import { useState, useEffect } from "react";

export default function Stocks() {
  const [redditSentiment, setRedditSentiment] = useState([]);

  const stockImgArray = [
    "https://paas-s3-broker-prod-lon-2edbd31f-65e0-4d35-9755-fde7c3b1b292.s3.amazonaws.com/images/Financial_HdD76AH.original.png",
    "https://www.state.gov/wp-content/uploads/2019/03/shutterstock_527098861.jpg",
    "https://cloudinary.hbs.edu/hbsit/image/upload/s--KVUY10MC--/f_auto,c_fill,h_375,w_750,/v20200101/25180C59E7106063072ED42149A6C880.jpg",
    "https://cdn.corporatefinanceinstitute.com/assets/financial-performance-1024x534.jpeg",
    "https://www.oberlo.com/media/1603896970-fea.jpeg?fit=max&fm=jpg&w=1824",
  ];

  useEffect(() => {
    if (redditSentiment) {
      getRedditSentiment(redditSentiment)
        .then((sentimentBlocks) => {
          setRedditSentiment(sentimentBlocks);
          console.log(redditSentiment);
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <div className="Stocks">
      <h1>Apple News</h1>
      {redditSentiment.map((article, index) => {
        return (
          <section className="article" key={article.title}>
            <h1>{article.title}</h1>

            <p>{article.content}</p>
            

                <img className="financeImg" src={stockImgArray[index % stockImgArray.length]} alt="article img" />
         <br/>
              <button>
                  <a href={article.link} target="_blank" rel="noreferrer">Link</a>
                </button>
          </section>
        );
      })}
    </div>
  );
}

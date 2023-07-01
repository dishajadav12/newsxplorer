import React from 'react';
import '../App.css';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source, category} = props;
  const categoryColors = {
    general: '#B31312',
    business: 'teal',
    entertainment: '#DB005B',
    health: 'green',
    science: 'indigo',
    sports: 'orange',
    technology: '#1C315E',
  };

  const badgeColor = categoryColors[category] || 'gray';
  return (
    <>
      <div className="card my-3" style={{ height: "450px" }}>
        <span
          className="badge"
          style={{
            backgroundColor: badgeColor, // Use the color prop to set the background color dynamically
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            borderRadius: "0%",
          }}
        >
          {source}
        </span>
        <img
          src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/DA5C/production/_130000955_a0c3eedf-f816-4fce-ac7d-9e752c18ea73.jpg" : imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "180px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text" style={{ height: "70px" }}>
            {description}...
          </p>
          <p className='card-text' style={{ height: "50px"}}>
            <small className='text'>By {!author ? "Unknown" : author} <br /> on {date}</small>
          </p>
          <a
            rel='noreferrer'
            href={newsUrl}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

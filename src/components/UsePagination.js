import React, { useState } from "react";
import '../style/UsePagination.css';

const UsePagination = (data) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.data.length / 16);
    console.log(data)

 function currentData() {
    const begin = (currentPage - 1) * 16;
    const end = begin + 16;
    console.log(data['data'])
   
  return data.data.slice(begin, end);
  }

  function next() {
    console.log('currentPage Next: ' + currentPage + typeof currentPage)
    console.log('max page:' + maxPage)
      console.log("Next: " + Math.min(currentPage + 1, maxPage))
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return (
      <div>
          
        {currentData().map((pro) =>
                <div className="Category-container" key={pro._id}>
                    {pro.cost > data.buy.point
                        ? <div className="ProducList-point"  >
                            <p className="point-p">Te faltan  {(pro.cost - data.buy.point)} puntos</p>
                        </div>
                        : <button className="ProducList-button" onClick={() => data.fechPoints(pro._id)}>
                            <img className="product-img" src="https://i.ibb.co/JCghNXv/buy-white11.jpg" />
                        </button>}
                    <img className="ProducList-img" src={pro.img.url} />
                   
                    <hr className="hr2"></hr>
                    <p className="ProducList-category">{pro.category}</p>
                    <h3 className="ProducList-name">{pro.name}</h3>
                    {data.buy.message}
                </div>
            )}

           <p >{data.buy.product}</p>

          <button className="prev" onClick={prev}> <img className="prev-img" src="https://i.ibb.co/Dkt2kHy/arrow-left1.jpg" /></button>
          <button className="prev" onClick={next}><img className="prev-img" src="https://i.ibb.co/5x18M1h/arrow-right1.jpg" /></button>
      </div>
  )//{ next, prev, jump, currentData, currentPage, maxPage };
 }

 export default UsePagination;
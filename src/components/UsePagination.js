import React, { useState } from "react";
import '../style/UsePagination.css';
import Modal from 'react-modal';
import customStyles from './customStyles';


const UsePagination = (data) => {

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.data.length / 16);
  Modal.setAppElement('#root')

  function currentData() {
    const begin = (currentPage - 1) * 16;
    const end = begin + 16;
    return data.data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return (
    <div>
      {currentData().map((pro, index) =>
        <div className="Category-container" key={index}>

          {data.buy ? pro.cost > data.buy.point
            ? <div className="ProducList-point"  >
              <p className="point-p">Te faltan  {(pro.cost - data.buy.point)} puntos</p>
            </div>
            : <div>
              <button className="ProducList-button" onClick={() => data.fechPoints(pro._id)}>
                <img className="product-img" src="https://i.ibb.co/JCghNXv/buy-white11.jpg" />
              </button>
            </div>
          : ""}
          <img className="ProducList-img" src={pro.img.url} />
          <hr className="hr2"></hr>
          <p className="ProducList-category">{pro.category}</p>
          <h3 className="ProducList-name">{pro.name}</h3>
          <Modal
            isOpen={data.isOpen}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            style={customStyles}
          >

            <h1 className="message" >
              your exchange was successful</h1>
            <img className="modal-img" src="https://i.ibb.co/sjCh9S5/happy3333333.jpg" />
            <button className="modal-button" onClick={data.handleClose}>close</button>
          </Modal>
        </div>
      )}

      <p >{data.buy ? data.buy.product : ""}</p>
      <div className="box-prev">
        <button className="prev" onClick={prev}>
          <img className="prev-img" src="https://i.ibb.co/Dkt2kHy/arrow-left1.jpg" />
        </button>
      </div>

      <div className="box-next">
        <button className="prev" onClick={next}>
          <img className="prev-img" src="https://i.ibb.co/5x18M1h/arrow-right1.jpg" />
        </button>
      </div>
      
    </div>
  )
}

export default UsePagination;
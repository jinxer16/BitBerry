import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import common from "../../Assets/Images/LuckyDraw/common.PNG";
import rare from "../../Assets/Images/LuckyDraw/rare.PNG";
import epic from "../../Assets/Images/LuckyDraw/epic.PNG";
import uncommon from "../../Assets/Images/LuckyDraw/uncommon.PNG";
import legendery from "../../Assets/Images/LuckyDraw/legendary.PNG";
import mythic from "../../Assets/Images/LuckyDraw/mythic.PNG";
import "./myNFT.css";

const array = [
  { title: "Common", id: "1001", pic: common },
  { title: "Uncommon", id: "1002", pic: uncommon },
  { title: "Rare", id: "1003", pic: rare },
  { title: "Epic", id: "1004", pic: epic },
  { title: "Legendary", id: "1005", pic: legendery },
  { title: "My Thic", id: "1006", pic: mythic },
];
const items = [...array];

function Items({ currentItems }) {
  return (
    <div className="items row">
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-10 col-lg-10 pic-bg-nft justify-content-center">
                <img
                  src={item.pic}
                  className="img-fluid mt-2 rounded mobileNftTransfer"
                  alt=""
                />
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                <b className="text-uppercase">{item.title}</b>
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                {item.id}
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-2">
                <button onClick={""} className="button btn_bg">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log("items", items.length);
    let sliced;
    for (var i = 0; i < items.length; i++) {
      sliced = items.slice(itemOffset, endOffset);
    }
    console.log("items", sliced);

    setCurrentItems(sliced);
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;

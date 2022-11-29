import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import common from "../../Assets/Images/LuckyDraw/common.PNG";
import rare from "../../Assets/Images/LuckyDraw/rare.PNG";
import epic from "../../Assets/Images/LuckyDraw/epic.PNG";
import uncommon from "../../Assets/Images/LuckyDraw/uncommon.PNG";
import legendery from "../../Assets/Images/LuckyDraw/legendary.PNG";
import mythic from "../../Assets/Images/LuckyDraw/mythic.PNG";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import "./myNFT.css";

const array = [
  { title: "Common", id: "#1001", pic: common },
  { title: "Uncommon", id: "#1002", pic: uncommon },
  { title: "Rare", id: "#1003", pic: rare },
  { title: "Epic", id: "#1004", pic: epic },
  { title: "Legendary", id: "#1005", pic: legendery },
  { title: "My Thic", id: "#1006", pic: mythic },
  { title: "Common", id: "#1001", pic: common },
  { title: "Uncommon", id: "#1002", pic: uncommon },
  { title: "Rare", id: "#1003", pic: rare },
];
const items = [...array];

function Items({ currentItems }) {
  return (
    <div className="items row d-flex justify-content-center">
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                <img
                  src={item.pic}
                  className="img-fluid mt-2 rounded mobileNftTransfer"
                  alt=""
                />
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                <span className="text-uppercase nftImgTitle">{item.title}</span>
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-2">
                {item.id}
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                <button
                  onClick={""}
                  className="button btn_bg nftImgTransferButton"
                >
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
        nextLabel={<IoCaretForwardSharp />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<IoCaretBackSharp />}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link arrow"
        nextClassName="page-item"
        nextLinkClassName="page-link arrow"
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

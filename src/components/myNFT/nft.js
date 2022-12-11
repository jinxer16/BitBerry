import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import common from "../../Assets/nfts/common.PNG";
import rare from "../../Assets/nfts/rare.PNG";
import epic from "../../Assets/nfts/epic.PNG";
import uncommon from "../../Assets/nfts/uncommon.PNG";
import legendery from "../../Assets/nfts/legendary.PNG";
import mythic from "../../Assets/nfts/mythic.PNG";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import "./myNFT.css";
import { Modal, ModalFooter } from "react-bootstrap";
import NftTransfer from "../nftTransfer/nftTransfer";
import {useDispatch, useSelector} from "react-redux";
import {connectionAction} from "../../Redux/connection/actions"
import {nftAddress,nftAbi} from "../../utils/nft";


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
  const [show, setShow] = useState(false);
  const handleMint = () => {
    console.log("handle Mint");
    setShow(true);
  };


  return (
    <div className="items row d-flex justify-content-center">
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                <img
                  src={item.imageUrl}
                  className="img-fluid mt-2 rounded mobileNftTransfer"
                  alt=""
                />
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                <span className="text-uppercase nftImgTitle ">
                  {item.imageName}
                </span>
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-2">
                {item.tokenId}
              </div>
              <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                <button
                  onClick={() => {
                    handleMint();
                  }}
                  className="button btn_bg nftImgTransferButton"
                >
                  Transfer
                </button>
              </div>
            </div>
          </div>
        ))}
      {show && (
        <Modal
          className="model"
          show={show}
          size="xl"
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-100w"
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <NftTransfer />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  let acc = useSelector((state) => state.connect?.connection);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let [nftArray,setNftsArray]=useState([])
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const getNfts = async () => {
    
    try {
      
        const web3 = window.web3;
        const nftContract = new web3.eth.Contract(
          nftAbi,
          nftAddress
        );
       
        let totalIds = await nftContract.methods.walletOfOwner(acc).call();
        console.log("nfts",totalIds)
        let simplleArray = [];
       
        for (let i = 0; i < totalIds.length; i++) {
          if (totalIds[i] <= 35000) {
            let imageUrl = common;
            let imageName = `Common #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId },
            ];
            setNftsArray(simplleArray);
          } else if (totalIds[i] > 35001 && totalIds[i] <= 57000) {
            let imageUrl = uncommon;
            let imageName = `Uncommon #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId},
            ];
            setNftsArray(simplleArray);
          } else if (totalIds[i] > 57001 && totalIds[i] <= 76000) {
            let imageUrl = rare;
            let imageName = `Rare #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId},
            ];
            setNftsArray(simplleArray);
          } else if (totalIds[i] > 76001 && totalIds[i] <= 90000) {
            let imageUrl = epic;
            let imageName = `Epic #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId},
            ];
            setNftsArray(simplleArray);
          } else if (totalIds[i] > 90001 && totalIds[i] <= 98500) {
            let imageUrl = legendery;
            let imageName = `Legendary #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId},
            ];
            setNftsArray(simplleArray);
          } else if (totalIds[i] > 98501 && totalIds[i] <= 100000) {
            let imageUrl = mythic;
            let imageName = `Mythic #${totalIds[i]}`;
            let tokenId = totalIds[i];
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId},
            ];
            console.log("simplleArray", simplleArray);
            setNftsArray(simplleArray);
          }
        }
      
    } catch (e) {
      console.error("error while get nfts", e);
    }
  };

  const getData = () => {
    if (
      acc != "No Wallet" &&
      acc != "Wrong Network" &&
      acc != "Connect Wallet"
    ) {
      console.log("welcome")
      getNfts();
    }
  };

  const nftList=()=>{
    
  }

  useEffect(()=>{
    getData()
  },[acc])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    let sliced;
    for (var i = 0; i < nftArray.length; i++) {
      sliced = nftArray.slice(itemOffset, endOffset);
    }

    setCurrentItems(sliced);
    setPageCount(Math.ceil(nftArray.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,nftArray]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % nftArray.length;
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
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<IoCaretBackSharp />}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item page-item2"
        previousLinkClassName="page-link arrow"
        nextClassName="page-item page-item2"
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

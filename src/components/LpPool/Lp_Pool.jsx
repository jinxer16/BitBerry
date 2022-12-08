import React, { useState, useEffect } from "react";
import "./LpPool.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import sign from "../../Assets/Images/LpPool/VectorSign.png";
import Picture1 from "../../Assets/Images/LpPool/Rectangle110.png";
import Picture2 from "../../Assets/Images/LpPool/Rectangle11012.png";
import Picture3 from "../../Assets/Images/LpPool/Rectangle1102.png";
import Picture4 from "../../Assets/Images/LpPool/Rectangle1103.png";
import Picture5 from "../../Assets/Images/LpPool/Rectangle1104.png";
import Picture6 from "../../Assets/Images/LpPool/Rectangle1105.png";
import Picture7 from "../../Assets/Images/LpPool/Rectangle1101.png"
import ComingSoonButton from "../../Assets/Images/coming-soon1.png"
import { toast } from "react-toastify";
import { IoAlertCircle, IoClose } from "react-icons/io5";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import {useDispatch, useSelector} from "react-redux";
import {connectionAction} from "../../Redux/connection/actions";
import {bbrTokenAddress,bbrtokenAbi} from "../../utils/bbr";
import {tokenLpStaking,tokenLpStakingAbi} from "../../utils/tokenLptokenStaking";
import Lp_Pool1 from "./Lp_Pool1"
import Lp_Pool2 from "./Lp_Pool2"
import Lp_Pool3 from "./Lp_Pool3"
import Lp_Pool4 from "./Lp_Pool4"
import Lp_Pool5 from "./Lp_Pool5"
import Lp_Pool6 from "./Lp_Pool6"
import Lp_Pool7 from "./Lp_Pool7"
function Lp_Pool() {
  const dispatch = useDispatch();
	let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  let [approveValue, setApproveValue] = useState("");
  let [stake,setStaked]=useState("0")
  let [ibrValue,setIbr]=useState("0")
  let [balanc,setBalance]=useState("0")

  const connectWallet = () =>{
		dispatch(connectionAction())
	}

  const staked=async()=>{
    console.log("enter value")
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let staked=await tokenStaking.methods.User(acc).call();
    console.log("staked",staked)
    console.log("staked1",web3.utils.fromWei(staked.mystakedTokens))
    setStaked((web3.utils.fromWei(staked.mystakedTokens)))
  }

  const ibr=async()=>{
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let value=await tokenStaking.methods.BBPcalculator(acc).call();
    let newValue=Number((web3.utils.fromWei(value))).toFixed(2)
    setIbr(newValue)
  }

  const balance=async()=>{
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(bbrtokenAbi, bbrTokenAddress);
    let balance=await tokenContract.methods.balanceOf(acc).call();
    console.log(balance)
    setBalance(Number(web3.utils.fromWei(balance)))
  }

  const maxFun=async()=>{
    try{
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      }else{
        const web3 = window.web3;
        let tokenContract = new web3.eth.Contract(bbrtokenAbi, bbrTokenAddress);
        let balance=await tokenContract.methods.balanceOf(acc).call();
        let newVal=  web3.utils.fromWei(balance.toString());
        setApproveValue(newVal)
      }
    }
    catch(e){
      console.log("e", e);
    }
  }

  const Approve=async()=>{
    try{
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      }else{
      if(approveValue>=500){
        const web3 = window.web3;
        let tokenContract = new web3.eth.Contract(bbrtokenAbi,bbrTokenAddress);
        let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
        await tokenContract.methods.approve(tokenLpStaking,web3.utils.toWei(approveValue.toString())).send({
          from:acc 
        })
        await tokenStaking.methods
        .Stake(web3.utils.toWei(approveValue.toString()))
        .send({
          from:acc
        });

        toast.success("value send")
      }
      else{
        toast.error("value less than 500")
      }
    }
  }
    catch(e){
      console.log("e", e);
      toast.error("Transaction failed")
    }

  }
  useEffect(()=>{
    staked()
    ibr()
    balance()
  },[acc])
  useEffect(() => {
    
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const data = [
    {
      picture: Picture1,
      token1: "BBR",
      EnterBBR:"BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR token to earn iBBR point.
      Token Lock 7days condition.`,
    },
    {
      picture: Picture7,
      token1: "BBR",
      EnterBBR:"BBR LP",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR LP token to earn iBBR point.
      LP Token Lock 10days , X 2 Reward point
      * Token can not unstake in locked period.`,
    },
    {
      picture: Picture2,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
        button: ComingSoonButton
    },
    {
      picture: Picture3,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
        button: ComingSoonButton
    },
    {
      picture: Picture4,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
        button: ComingSoonButton
    },
    {
      picture: Picture5,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
        button: ComingSoonButton
    },
    {
      picture: Picture6,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
        button: ComingSoonButton
    },
  ];
  return (
    <div className="lpPoolMain">
      <div className="container  mt-5">
        <div className="row d-flex justify-content-center mb-4 ">
          <div className="col-11 lp_pool_border">
            <div className="row ">
              <div className="col-12 d-flex justify-content-end p-3">
                <IoClose />
              </div>
            </div>
            {/* ************************************************************************ */}
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-center">
                  <div className=" col-md-3 col-lg-3 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-12 col-xl-8 col-sm-12 text-center">
                    <div className="btn_bg lucky_draw_heading  lucky_draw_heading_pool pe-5 ps-5 mt-4 rounded-pill">
                      <span
                        className={
                          animationState
                            ? "header header--pushDownOne"
                            : "header"
                        }
                      >
                        BITBERRY
                      </span>
                      &nbsp;
                      <span
                        className={
                          animationState1
                            ? "header header--pushDownTwo"
                            : "header"
                        }
                      >
                        LP POOL
                      </span>
                      <span className="">
                        {/* <IoAlertCircle/> */}
                        <img
                          src={circle}
                          className="img-fluid circle_lpPool"
                          width={"50px"}
                        />
                      </span>
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-center mt-2">
                        <div className="mt-4 lucky_draw_text  lucky_draw_text2 text-center">
                          <p className="text-center m-0">
                            {" "}
                            Stake $BBR to Earn iBBR Points.
                          </p>
                          <p className="text-center m-0">
                            {" "}
                            iBBR point gives its users access to the Launchpad
                          </p>
                          <p className="text-center m-0">
                            {" "}
                            with the chance to receive a Treasure X NFT from a
                            lucky draw!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-12 col-xl-3 col-sm-12  button_responsive">
                    <div className="p-2 me-4 float-end">
                      <button className="button btn_bg" onClick={connectWallet}>
                      {acc === "No Wallet"
                ? "Connect"
                : acc === "Connect Wallet"
                ? "Connect"
                : acc === "Wrong Network"
                ? acc
                : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}
                      </button>
                      
                    </div>
                    <div className="p-2 me-4 float-end">
                      <HashLink to="/myNft">
                        <button className="button">My NFT</button>
                      </HashLink>
                    </div>
                    <div className="p-2 me-4 float-end lpPool_box">
                      <div className="balance_text">Balance:</div>
                      <div className="d-flex flex-row justify-content-between ">
                        <div className="">BBR</div>
                        <div className=" ">{balanc}</div>
                      </div>
                      <div className="d-flex flex-row justify-content-between ">
                        <div className="">iBBR</div>
                        <div className="pb-2">0.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ************************************************************************ */}
            <div className="row mt-4 d-flex justify-content-center mb-3">
              <div className="col-11">
                <div className="row d-flex justify-content-between mbl_responsive">
                 <Lp_Pool1 />
                 <Lp_Pool2 />
                 <Lp_Pool3 />
                 <Lp_Pool4 />
                 <Lp_Pool5 />
                 <Lp_Pool6 />
                 <Lp_Pool7 />

                  {/* ************************************************************************ */}
                  {/* <div className="col-3 border"></div>
                  <div className="col-3 border"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lp_Pool;

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
import Picture7 from "../../Assets/Images/LpPool/Rectangle1101.png";
import ComingSoonButton from "../../Assets/Images/coming-soon1.png";
import { toast } from "react-toastify";
import { IoAlertCircle, IoClose } from "react-icons/io5";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import { bbrLpTokenAddress, bbrLptokenAbi } from "../../utils/bbr";
import {
  tokenLpStaking,
  tokenLpStakingAbi,
} from "../../utils/tokenLptokenStaking";

function Lp_Pool2() {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  let [approveValue, setApproveValue] = useState("");
  let [stake, setStaked] = useState("0");
  let [ibrValue, setIbr] = useState("0");
  let [balanc, setBalance] = useState("0");

  const connectWallet = () => {
    dispatch(connectionAction());
  };

  const staked = async () => {
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let staked = await tokenStaking.methods.UserLP(acc).call();

    setStaked(web3.utils.fromWei(staked.Total_Amount));
  };

  const ibr = async () => {
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let value = await tokenStaking.methods.BBPcalculatorforLP(acc).call();
    let newValue = Number(web3.utils.fromWei(value)).toFixed(2);
    setIbr(newValue);
  };

  const balance = async () => {
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(bbrLptokenAbi, bbrLpTokenAddress);
    let balance = await tokenContract.methods.balanceOf(acc).call();
    setBalance(Number(web3.utils.fromWei(balance)));
  };

  const maxFun = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        const web3 = window.web3;
        let tokenContract = new web3.eth.Contract(bbrLptokenAbi, bbrLpTokenAddress);
        let balance = await tokenContract.methods.balanceOf(acc).call();
        let newVal = Number(web3.utils.fromWei(balance));
        setApproveValue(newVal);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const unStake=async()=>{
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        const web3 = window.web3;
        let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
        let value = await tokenStaking.methods.isLPTimeCompleted(acc).call();
        if(value==false){
          toast.error("Unstake time not reached")
        }
        else{
          await tokenStaking.methods.withdrawLPtoken().send({
            from:acc
          });
        }
      }
  }
  catch(e){
    console.log("e",e)
  }
}

  const Approve = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
     
          const web3 = window.web3;
          let tokenContract = new web3.eth.Contract(
            bbrLptokenAbi,
            bbrLpTokenAddress
          );
          let tokenStaking = new web3.eth.Contract(
            tokenLpStakingAbi,
            tokenLpStaking
          );
          await tokenContract.methods
            .approve(tokenLpStaking, web3.utils.toWei(approveValue.toString()))
            .send({
              from: acc,
            });
          await tokenStaking.methods
            .StakeforLP(web3.utils.toWei(approveValue.toString()))
            .send({
              from: acc,
            });

          toast.success("value send");
        
      }
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction failed");
    }
  };

  const redem=async()=>{
    try{
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let value = await tokenStaking.methods.redeemforLp().send({
      from:acc
    });
    let newValue = Number(web3.utils.fromWei(value)).toFixed(2);
    console.log(newValue)
    // setIbr(newValue);
    }
  }
  catch(e){
    console.log("e", e);
    toast.error("Transaction failed");
  }
}

  useEffect(() => {
    let interval = setInterval(() => {
    staked();
    ibr();
    balance();
    },30000);
    staked();
    ibr();
    balance();
    return () => clearInterval(interval)
  }, [acc]);
  
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      picture: Picture7,
      token1: "BBR",
      EnterBBR: "BBR LP",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR LP token to earn iBBR point.
          LP Token Lock 10days , X 2 Reward point
          * Token can not unstake in locked period.`,
    },
  ];
  return (
    <div className="col-3 Cardborder background_card mb-5">
      <div className="row mt-2 mb-2">
        <div className="col-3"></div>
        <div className="text-center card_title col-6">BBR</div>
        <div className="text-end col-3">
          <OverlayTrigger
            className="toolTip_inner"
            placement="bottom-end"
            overlay={
              <Tooltip
                //   id="tooltip-disabled"
                className="toolTip_inner"
              >
                {data[0].tooltip}
              </Tooltip>
            }
          >
            <span className="fs-5">
              <IoAlertCircle />
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <div className=" d-flex flex-row justify-content-around">
        <div className="card_deposit">Deposit:</div>
        <div className="card_value">
          <b>{data[0].token1}</b>
        </div>
        <div className="card_deposit">Earn:</div>
        <div className="card_value">
          <b>{data[0].token2}</b>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-10 card_body ">
          <div className="row">
            <div className="col-10  d-flex justify-content-between mt-3">
              <div className="">
                <img src={data[0].button} className="img-fluid" width={"33px"} />
              </div>
              <div>
                <img src={data[0].picture} className="img-fluid" width={"147px"} />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Wallet</div>
              <div className="token_text">{balanc} BBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">iBBR Point</div>
              <div className="token_text">{ibrValue} BBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Staked</div>
              <div className="token_text">{stake} BBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Enter {data.EnterBBR}</div>
              <div className="button_inside d-flex justify-content-center">
                <input
                  className="input_inside_button"
                  type="text"
                  placeholder="0"
                  value={approveValue}
                  onChange={(e) => setApproveValue(e.target.value)}
                />

                <button className="insideButton" onClick={maxFun}>
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center buttoun_background">
        <div className=" mt-3">
          <button className="button_bg" onClick={Approve}>
            {" "}
            Approve & Stake
          </button>
        </div>
        <div className=" d-flex  flex-row justify-content-around ">
          <button className="button_Unstake" onClick={unStake}> Unstake</button>
          <button className=" button_redeem" onClick={redem}>Redeem</button>
        </div>
      </div>
    </div>
  );
}

export default Lp_Pool2;

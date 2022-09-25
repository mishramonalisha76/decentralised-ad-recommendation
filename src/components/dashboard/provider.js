import { useState, useEffect } from "react";
import Loader from "../loader/loader";

import "./dashboard.css";

import CREATOR_ABI from "../../contracts/DeAdsCreator";
import { ethers } from "ethers";
import { useAccount, useProvider } from "wagmi";

const CREATOR_ADDR = "0xC20B1fc170Ff21AE81Ba85b4bb7F268A62aDD981";
let contract;
let signedContract;
let provider;

export default function ProviderDashboard() {
  const { address, isConnected } = useAccount();

  const [tag, setTag] = useState("");
  const [price, setPrice]= useState("");
  const [link, setLink] = useState("");

  console.log(link);

  const CreateAdd = async () => {
    setShowLoader(true);
    console.log(tag,link,price)
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    console.log(contract)
    signedContract = await contract.connect(signer);
    return await new Promise((resolve, reject) => {
      try {
        const trxObj = signedContract.careateAd(tag,link, {
          from: account.toString(),
          value: (price * Math.pow(10, 18)).toString(),
        });
        setShowLoader(false);
      } catch (error) {
        window.alert(
          error.transactionHash
            ? `Went wrong in trc hash :${error.transactionHash}`
            : error.message
        );
        reject(error);
      }
    });
  };
  // const CreateAdd = async () => {
  //   console.log(contract);
  //    const data = await contract.careateAd(address);
  //   console.log(data);

  //   console.log(contract);
  // };

  useEffect(() => {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    contract = new ethers.Contract(CREATOR_ADDR, CREATOR_ABI, provider);
    console.log(contract)
  }, []);

  // const data = [
  //   {
  //     tag: "sports",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  //   {
  //     tag: "movies",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  //   {
  //     tag: "politics",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  //   {
  //     tag: "shopping",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  //   {
  //     tag: "random",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  //   {
  //     tag: "random2",
  //     tagData: [
  //       { title: "skfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfdfjs sdhjd sdjf", link: "hfekfe" },
  //       { title: "skfgtrjs sdhjd sdjf", link: "hfekfe" },
  //     ],
  //   },
  // ];
  const [showTags, setShowTags] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [tags, setTags] = useState([""]);

  const getReco = () => {
    setShowTags((curr) => !curr);
  };

  const SubmitForm = () => {};

  const show = () => {
    return (
      <div className="div-row user-input-div user-items">
        <div className="div-column user-input-label-div">
          <label className="user-create-label"> Tag: </label>
          <input className=" user-create-input" placeholder="Enter tags"  required onChange={(e)=>{setTag(e.target.value)}}/>

          <label className="user-create-label">Price : </label>
          <input className=" user-create-input" placeholder="Enter Title" required  onChange={(e)=>{setPrice(e.target.value)}}/>

          <label className="user-create-label">Link: </label>
          <input className=" user-create-input" placeholder="Enter Link" required onChange={(e)=>{setLink(e.target.value)}}/>

          <button className="user-div-button" onClick={() => CreateAdd()}>
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="div-column user-div">
      <div className="div-row user-input-div user-items">
        {/* <div className="div-column user-input-label-div"> */}
        {/* <label className="user-input-div-label">Enter your tags</label> */}
        {/* <input className=" user-input-div-input" placeholder="Enter tags" /> */}
      </div>
      <button
        className="user-div-button"
        onClick={() => setShowForms((curr) => !curr)}
      >
        Create Ads
      </button>
      {showForms ? show() : null}
      {/* </div> */}
      {/* <button className="user-div-button user-items" onClick={() => getReco()}>
        Get Past Ads
      </button>
      {showTags && (
        <div className="div-row user-div-reco user-items">
          {data.map((tagItem, i) => (
            <div
              className="div-column user-div-reco-div"
              key={`${tagItem}${i}`}
            >
              <h2>{tagItem.tag}</h2>
              {tagItem.tagData.map((item, j) => (
                <p key={`${item.title}${j}`}>{item.title}</p>
              ))}
            </div>
          ))}
        </div>
      )} */}

      {showLoader && <Loader />}
    </div>
  );
}

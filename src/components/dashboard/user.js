import { useState, useEffect } from "react";
import Loader from "../loader/loader";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import "./dashboard.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import main from "../../contracts/DeAdsMain";
import user from "../../contracts/DeAdsUser";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

const USERADD = "0x8B1c186fbA577b0F4471C2c0C891F11385830072";
const MAINADD = "0x6dad23e530Cc360B1Fad95a6f592858C367404B3";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["sports", "web3"];

function getStyles(name, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

let userContract;
let signedUserContract;
let mainContract;
let signedMainContract;
let provider;
export default function (props) {
  const [userTags, setUserTags] = useState([]);

  const { address, isConnected } = useAccount();

  const theme = useTheme();
  const [tags, setTags] = useState([]);
  const [showTags, setShowTags] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [data, setData] = useState([]);

  const getUsertags = async () => {
    console.log(address);
    console.log(userContract);
    const tempTags = await userContract.getUserTags(address);
    setShowLoader(false);
    setUserTags(tempTags);
  };

  const userRegister = async () => {
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    signedUserContract = await userContract.connect(signer);
    return await new Promise(async (resolve, reject) => {
      try {
        const trxObj = signedUserContract.registerUser(tags, {
          from: account.toString(),
          value: (0.31 * Math.pow(10, 18)).toString(),
        });
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

  console.log(props);
  useEffect(() => {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    userContract = new ethers.Contract(USERADD, user, provider);
    mainContract = new ethers.Contract(MAINADD, main, provider);
    getUsertags();
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  console.log(tags);
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

  const sortAndSeparate = (temp) => {
    let result = {
      sports: [],
      web3: [],
    };
    for (let i = 0; i < temp.length; i++) {
      const splitted = temp[i].split("+");
      console.log(splitted);
      const obj = {
        link: splitted[0],
        score: splitted[1],
      };
      result[splitted[2]].push(obj);
    }
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        result[key].sort((a, b) =>
          a.score > b.score ? 1 : b.score < a.score ? -1 : 0
        );
      }
    }
    setData(result);
  };
  console.log(data);
  const getReco = async () => {
    console.log("in reco");
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    signedMainContract = await mainContract.connect(signer);
    console.log(signedMainContract);
    let temp1 = await signedMainContract.getTags();
    console.log(temp1);
    let temp = await signedMainContract.getAdsForUser();
    temp = temp.filter((entry) => entry.trim() != "");
    sortAndSeparate(temp);
    console.log(temp);
    setShowLoader(false);

    setShowTags(true);
  };

  const handleClickLink = async(link,tag) => {
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    signedMainContract = await mainContract.connect(signer);
    console.log(signedMainContract);
    return await new Promise(async (resolve, reject) => {
      try {
        const supplier= "0xEd2D9ff985dA4112033e0F8845e0AD307A372d52";
        const trxObj = signedMainContract.setRatingForUser(tag,link,supplier, {
          from: account.toString()
        });
        await trxObj.then(async function(tx){
            await tx.wait(5);
            window.location.href=link;
        })
        // window.location.href=link;
      } catch (error) {
        window.alert(
          error.transactionHash
            ? `Went wrong in trc hash :${error.transactionHash}`
            : error.message
        );
        reject(error);
      }
    });
  }
  // const updateTags = () => {
  //   setShowTags(false);
  // };
  return (
    <>
      {!showLoader && (
        <div className="div-column user-div">
          <div className="div-row user-input-div user-items">
            <div className="div-column user-input-label-div">
              <label className="user-input-div-label">Enter your tags</label>
              {/* <input className=" user-input-div-input" placeholder="Enter tags" /> */}
              <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    Enter tags
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={tags}
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, tags, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </ThemeProvider>
            </div>
            <button
              className="user-div-button "
              onClick={() => {
                userRegister();
              }}
            >
              Register
            </button>
          </div>
          {userTags.length > 0 && (
            <button
              className="user-div-button user-items"
              onClick={() => getReco()}
            >
              Get Recommendations
            </button>
          )}
          {showTags && (
            <div className="div-row user-div-reco user-items">
              {Object.keys(data).map(function (key, index) {
                return (
                  <div
                    className="div-column user-div-reco-div"
                    key={`${key}${index}`}
                  >
                    <h2>{key}</h2>
                    {data[key].map((item, j) => (
                      <p style={{cursor:'pointer'}} onClick={()=>handleClickLink(item.link,key)} key={`${item.link}${j}`}>{item.link}</p>
                    ))}
                  </div>
                );
              })}
              {/* {data.map((tagItem, i) => (
                <div
                  className="div-column user-div-reco-div"
                  key={`${tagItem}${i}`}
                >
                  <h2>{tagItem.tag}</h2>
                  {tagItem.tagData.map((item, j) => (
                    <p key={`${item.title}${j}`}>{item.title}</p>
                  ))}
                </div>
              ))} */}
            </div>
          )}
        </div>
      )}
      {showLoader && <Loader />}
    </>
  );
}

import { useAccount } from "wagmi";
import axios from "axios";

const NFTGallery = () => {
  const { address } = useAccount();
  console.log(address);

  // Wallet address
  // const address = "elanhalpern.eth";

  // Alchemy URL
  const baseURL = `https://eth-goerli.g.alchemy.com/v2/uaqOySZd72tFv0Xgq2oXneo8WsDGeiuO`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  const config = {
    method: "get",
    url: url,
  };

  // Make the request and print the formatted response:
  axios(config)
    .then((response) => console.log(response["data"]))
    .catch((error) => console.log("error", error));

  return <section>NFTGallery</section>;
};

export default NFTGallery;

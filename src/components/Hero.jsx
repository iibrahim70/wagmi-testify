import { useConnect, useDisconnect, useAccount } from "wagmi";
import { injected } from "wagmi/connectors";

const Hero = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  // const {} = useAccountEffect();

  const { address } = useAccount();
  console.log(address);

  return (
    <>
      {address ? (
        <button
          className="bg-red-500 px-5 py-2 rounded-md hover:scale-105 font-semibold"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      ) : (
        <button
          className="bg-blue-500 px-5 py-2 rounded-md hover:scale-105 font-semibold"
          onClick={() => connect({ connector: injected() })}
        >
          Connect
        </button>
      )}
    </>
  );
};

export default Hero;

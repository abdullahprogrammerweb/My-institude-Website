

export default function index() {
  return (
    <div>
      <>
  {/* quarter 4 start */}
  <div className="container flex flex-col  py-3 m-5 mx-10  gap-5  border-blue-600 border-4  w-[60%] font-sans  rounded-md">
    <h1 className="text-5xl text-center font-extralight font-mono">
      {" "}
      Quarter 4{" "}
    </h1>
    <h1 className=" text-xl text-current font-serif">
      Blockchain and Metaverse Theory
    </h1>
    <a
      href="The Metaverse: And How It Will Revolutionize Everything by Matthew Ball"
      className="text-red-800 "
    >
      The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
    </a>
    <br />
    <a
      href="Mastering Blockchain - Fourth Edition by Imran Bashir"
      className="text-red-800"
    >
      Mastering Blockchain - Fourth Edition by Imran Bashir
    </a>
    <h1 className=" text-xl text-current font-serif">
      Smart Contract Development in Solidity
    </h1>
    <a
      href="Solidity Programming Essentials - Second Edition By Ritesh Modi"
      className="text-red-800"
    >
      Solidity Programming Essentials - Second Edition By Ritesh Modi
    </a>
    <br />
    <a href="Solidity Learning Repo" className="text-red-800">
      Solidity Learning Repo
    </a>
    <h1 className=" text-xl text-current font-serif">
      Dapp Development using Ethers.js and Next.js 13
    </h1>
    <br />
    <a href="Dapp Learning Repo" className="text-red-800">
      Dapp Learning Repo
    </a>
    <h1 className=" text-xl text-current font-serif">Tokennomics</h1>
    <h1 className=" text-xl text-current font-serif">
      Blockchain Project: Create a Token and Launch ICO/IEO/IDO
    </h1>
    <p>
      As you probably know, the ICO ("Initial Coin Offering") industry has been
      booming, and it's completely reinventing the way new startups kickstart
      themselves. In fact, have a look at Wikipedia's list of highest
      crowdfunding projects, and you'll notice that blockchain projects
      absolutely dominate the list. Understand the difference between IDO vs.
      IEO vs. ICO Also check these links for latest listings: ICO list at ICO
      Drops ICO List of Best New Initial Coin Offerings Top-Rated Crypto Token
      Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales:
      List of New ICOs, STOs, IEOs and IDOs ICO List Online Binance IEO List
      Binance Launchpad IEO List Polkastarter
    </p>
    <h1 className=" text-xl text-current font-serif">
      Project Part 3: Create a Pako Token
    </h1>
    <p>
      By creating a token and related contracts, you'll also learn how to handle
      money sent to your contracts, which should come in handy if you want to
      create some kind of paid decentralized service in the future. Therefore,
      for the sake of this chapter, let's imagine that our Pako DApp uses its
      own coin – the Pako Token. We will create two contracts – one for the
      token itself and one for the token crowd sale (the ICO). Now Create your
      own Pako ERC20 Token and deploy it on a testnet. The Token should be to
      use OpenZeppelin contracts. You will use the Hardhat development
      environment. Also, write at least twenty automated tests. We will be using
      Solidity and Typescript for development.
    </p>
    <h1 className=" text-xl text-current font-serif">
      {" "}
      Project Part 4: Develop Crowd Sale Contract
    </h1>
    <p>
      This contract will be responsible for allowing users to exchange ETH for
      our Pako Token. In order to do that we need to set a price for our token
      (1 ETH = 100 Pako Token) Implement a payable buyToken() function. Emit a
      BuyTokens event that will log who’s the buyer, the amount of ETH sent and
      the amount of Token bought Transfer 75% of the Tokens to the Crowd Sale
      contract at deployment time. i.e. Right after the contract is deployed, we
      want the token contract to send 75% of our token supply to it. While 25%
      remain in our personal "owner" account. Transfer the ownership of the
      Crowd Sale contract (at deploy time) to our frontend address so that we
      are able to withdraw the ETH. You can use the openzeppelin crowd sale
      contracts however you will have to update the code to the latest solidity
      version. Also write extensive tests, for example we will simply send a
      transaction of 1 ETH from a random account to the contract. After the
      transaction, we should expect the account to have received Pako, while the
      contract's balance should have been reduced. Note: Before you get started
      writing the token contract we suggest you review the access control
      https://docs.openzeppelin.com/contracts/4.x/access-control
    </p>
    <h1 className=" text-xl text-current font-serif">
      Project Part 5: Trying it with MetaMask
    </h1>
    <h1 className=" text-xl text-current font-serif">
      Project Part 6: Trying it with Multisignature Wallets
    </h1>
    <h1 className=" text-xl text-current font-serif">
      Project Part 7: Sending Tokens using Ethers.js
    </h1>
    <h1 className=" text-xl text-current font-serif">
      Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
    </h1>
  </div>

  <div className="container flex flex-col  py-3 m-5 mx-10  gap-5  border-blue-600 border-4  w-[60%] font-sans  rounded-md">
    <h1 className="text-5xl text-center font-extralight font-mono">
      {" "}
      Quarter 5{" "}
    </h1>
    <h1 className=" text-xl text-current font-serif">Course Outline:</h1>
    <h2 className=" text-current font-serif">Open Metaverse Web Development</h2>
    <h1 className=" text-current font-serif">
      Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
    </h1>
    <span>
      Blender development is being funded by heavyweights in the real-time 3D
      (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic
      Games, Adobe, Microsoft, and Decentraland. It is expected to become the
      standard asset creation tool for metaverse.
    </span>
    <br />
    <p>Blender 3.3+</p>
    <br />{" "}
    <a href=" Download" className="text-red-700">
      {" "}
      Download
    </a>
    <h1 className=" text-current font-serif">Assignment 1:</h1>
    <p>Build a 3D Donut using Blender 3 as shown in these video tutorials</p>
    <h1 className=" text-current font-serif">Assignment 2:</h1>
    <p>
      Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book
      Blender by Example 2nd Edition
    </p>
    <h1 className=" text-current font-serif">Assignment 3:</h1>
    <p>
      {" "}
      Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of
      the Book Blender by Example 2nd Edition
    </p>
    <h1 className=" text-current font-serif">Assignment 4:</h1>
    <p>
      Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of
      the Book Blender by Example 2nd Edition
    </p>
    <h1 className=" text-current font-serif">Assignment 5:</h1>
    <p>
      Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the
      Book Blender by Example 2nd Edition
    </p>
    <h1 className=" text-current font-serif">Assignment 6:</h1>
    <p>
      Build a 3D Sword in the Stone using Blender 3 as shown in these video
      tutorials
    </p>
  </div>
  {/* Quarter 4 end */}
</>

    </div>
  )
}

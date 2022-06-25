// async function main() {
//     const [owner, somebodyElse] = await hre.ethers.getSigners();
//     const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
//     const keyboardsContract = await keyboardsContractFactory.deploy();
//     await keyboardsContract.deployed();
  
//     const keyboardTxn1 = await keyboardsContract.create("A really great keyboard!");
//     await keyboardTxn1.wait();
  
//     const keyboardTx2 = await keyboardsContract.connect(somebodyElse).create("An even better keyboard!");
//     await keyboardTx2.wait();
  
//     keyboards = await keyboardsContract.getKeyboards();
//     console.log("We got the keyboards!", keyboards);
  
//     keyboards = await keyboardsContract.connect(somebodyElse).getKeyboards();
//     console.log("And as somebody else!", keyboards);
//   }

async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();
  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  const keyboardTxn1 = await keyboardsContract.create(0, true, "sepia");
  await keyboardTxn1.wait();

  const keyboardTxn2 = await keyboardsContract.connect(somebodyElse).create(1, false, "grayscale");
  await keyboardTxn2.wait();

  const balanceBefore = await hre.ethers.provider.getBalance(somebodyElse.address);
  console.log("somebodyElse balance before!", hre.ethers.utils.formatEther(balanceBefore));

  const tipTxn = await keyboardsContract.tip(1, {value: hre.ethers.utils.parseEther("1000")});
  await tipTxn.wait();

  const balanceAfter = await hre.ethers.provider.getBalance(somebodyElse.address)
  console.log("somebodyElse balance after!", hre.ethers.utils.formatEther(balanceAfter));
}


  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
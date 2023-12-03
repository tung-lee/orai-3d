export const getContractAddr = () => {
  //const contractAddr = getState()?.counter.addresses.default;
  const contractAddr = "orai16c65vpgyvs46yvde37yn6cp7rqplccz6uzg8f47lkvu89gqw49uqdv44t0";

  if (!contractAddr) {
    throw Error("Contract address not found, please check your state file");
  }

  return contractAddr;
};

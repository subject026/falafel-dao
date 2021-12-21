import { ThirdwebSDK } from "@3rdweb/sdk";

// We instatiate the sdk on Rinkeby.
export const sdk = new ThirdwebSDK("rinkeby");

// We can grab a reference to our ERC-1155 contract.
export const bundleDropModule = sdk.getBundleDropModule(
  "0x1c699696b62c8a393AA44223a898D2C47C134e74"
);

export const tokenModule = sdk.getTokenModule(
  "0xE41DF2C7869a936E285BBd9842f065F431426c0f"
);

export const voteModule = sdk.getVoteModule(
  "0x08a32c6e82b813c884d877583C1be7A3f9c024De"
);

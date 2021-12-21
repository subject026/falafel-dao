import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1c699696b62c8a393AA44223a898D2C47C134e74"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Membership Pitta",
        description: "This pitta NFT will give you access to FalafelDAO!",
        image: readFileSync("scripts/assets/member_pitta.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

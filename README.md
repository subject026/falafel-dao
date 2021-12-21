# buildspace x thirdweb - Build your own DAO with just Javascript

### **Welcome 👋**

To get started with this course, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### **Questions?**

Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766) and link your Discord account so you can get access to helpful channels and your instructor!

## FalafelDAO Metadata

### `2-deploy-drop.js` output

```json
metadata: {
    name: 'FalafelDAO Membership',
    description: ' Building Falafel based public goods for the moloch slaying army.',
    image: 'https://cloudflare-ipfs.com/ipfs/bafkreidfs7gsvd7l6uxyo3oxbz5xcohuui5dzq6gq4aj3ghtz5wqwuorom',
    primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
    uri: 'ipfs://bafkreihg7wzxpqjpixq7de3estxqftjowfny2rcwfiayec343nfne4uzie'
  },
  address: '0x1c699696b62c8a393AA44223a898D2C47C134e74',
  type: 11
}
```

## Bundle Drop Module Address

```
✅ Successfully created a new NFT in the drop!
Your App address is: 0x6b24BbF7ddA194817bFA81FDdC1d435E3fAd8fb5
```

## Drop Address

```
0x1c699696b62c8a393aa44223a898d2c47c134e74
```

### ERC20 Contract

`5-deploy-token.js` output

This is the ERC20 token contract address

```bash
 Successfully deployed token module, address: 0xE41DF2C7869a936E285BBd9842f065F431426c0f
```

## Governance Contract

voting module deployed

```bash
✅ Successfully deployed vote module, address: 0x08a32c6e82b813c884d877583C1be7A3f9c024De
```

## `11-revoke-roles.js` Output

Revoke all existing roles?

```bash
👀 Roles that exist right now: {
  admin: [ '0x8a35D1EB766f4f0Cb3Bb34760B7628f3e04c1c0d' ],
  minter: [
    '0x8a35D1EB766f4f0Cb3Bb34760B7628f3e04c1c0d',
    '0x08a32c6e82b813c884d877583C1be7A3f9c024De'
  ],
  pauser: [ '0x8a35D1EB766f4f0Cb3Bb34760B7628f3e04c1c0d' ],
  transfer: [ '0x8a35D1EB766f4f0Cb3Bb34760B7628f3e04c1c0d' ]
}
🎉 Roles after revoking ourselves {
  admin: [],
  minter: [ '0x08a32c6e82b813c884d877583C1be7A3f9c024De' ],
  pauser: [],
  transfer: []
}

✅ Successfully revoked our superpowers from the ERC-20 contract
```

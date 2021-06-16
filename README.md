
## Specification

A client-side Web3.js app to bulk transfer coins from one address to many different addresses (no server required)

## How it works

- The user uploads a spreadsheet (.xlsx file) from their local file system. The spreadsheet contains a list of Ethereum compatible addresses and amounts in wei
- The web page sends the relevant amount of tokens which correspond to each of the addresses in the spreadsheet; signing the transactions using the user's private key (which they paste into this DApp locally)
- Rather than send tokens via separate transactions, this DApp has a built-in smart contract that batches transfers of tokens in lots of 100. 
- Once tokens are transferred, the smart contract writes the `_to`, `_from` and `_amount` details in to the blockchains storage as evidence of the transfer

## How to use it

**1** 

Clone this repository
```
git clone git@github.com:second-state/bulk-token-transfer.git
```

**2**

Browse to (and open) the `bulk-token-transfer/html/index.html` file using your choice of browser.

**You will not need wallet software because the HTML page will use the private key which you paste in**

**3**

Add your RPC endpoint and ChainId, then click the blue "Initialize RPC" button

**4**

Please paste in the private key and public key of **a brand new fresh external account address**. The reason that a brand new address is recommended is that:
- a) it is safer than cutting and pasting an account that you hold other funds in and 
- b) because it will ensure that the blockchain's event logs are pristine clean. For example when reading the event logs we will only see transfers and transactions relating specifically to this bulk transfer task

**It is important that you have this private key backed up because only this new account can perform the bulkTransfer as well as withdrawEther and destroy the contract etc.**

If you have already deployed a contract (and have the contract address saved) then skip this next step of deploying smart contract.

If this is your first time, and you have not deployed the smart contract yet, please go ahead and push the blue "Deploy New Contract" button. The contract will automatically deploy and then print out the contract address. **Please save this address for future use or you wont be able to call the contract's functions again**

**5**

If you have already deployed a smart contract and have the contract address, please paste it into the text box and click the "Initialize Existing Contract" button. At this point you can now go ahead and call smart contract functions.

**6**

Upload your spreadsheet

**Please note, your spreadsheet must conform to the following exact convention.**

Spreadsheet must be three columns. 

**First column**

The first column must be formatted as plain string only. This first column is your description for your own records

**Second column**

The second column must be formatted as plain string only. This second column is for single Ethereum compatible addresses to which tokens will be sent.

**Third column**

The third column contains the amount of tokens **in Wei** (which will be sent to the Ethereum compatible address on that same row). 

For example to send one ETH you would put `1000000000000000000` (1, followed by eighteen decimal places).
For another example 1/2 ETH you would put `500000000000000000` (5, followed by seventeen decimal places).

Please use [an online Wei converter](https://eth-converter.com/) if you need assistance with this.

**Resulting data**

When you click "Choose File" and upload a valid `.xlsx` file, the DApp will go ahead and parse the spreadsheet. The DApp will then print an array of `[[address, amount]]` in the web page. Please note, this will take some time if the file is large i.e. 50, 000 rows etc. Please wait until you see the output before clicking any other buttons.

Once the array of `[[address, amount]]` data is presented on your web page, please feel free to copy and paste that into an external file (not mandatory but perhaps worth keeping it for your records)

**7**

The next section called "Override in-memory data" is optional. It allows you to paste in array of `[[address, amount]]` data (the same format as we just mentioned above). This is useful if you did not want to load the original spreadsheet again. This is specifically designed for situations where you noticed some transfers did not work and you now want to load a subset of transfers for execution (as apposed  to loading in the whole original data set again). Note: The subset can be derived from programatically comparing the array of `[[address, amount]]` from above in comparison with the event logs on the blockchain (discern which transfers did not go through)

**8**

This next section removes duplicate addresses (and consolidate amounts). This saves us sending two transfers to the same address (in the event that we can instead consolidate the transfers into one single transfer). This also outputs the same array of `[[address, amount]]`. Therefore, if you are using this feature, please be sure to cut and paste this data from the web page (once it is presented) so that you have useful data for future use i.e. compare and contrast to event logs.

**9**

This next section called "Pre check balances" allows us to ensure that the sender has enough funds to actually perform all of the transfers. 

**10**

When you are satisfied that you have checked the addresses and amounts in your array of `[[address, amount]]` you can go ahead and press the button to "Transfer Tokens!"

**11**

The last section allows us to obtain the event logs which relate to the transfer of tokens from the address.
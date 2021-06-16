var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "destroy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addresses",
        "type": "address[100]"
      },
      {
        "name": "amounts",
        "type": "uint256[100]"
      }
    ],
    "name": "bulkSendEth",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawEther",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getbalance",
    "outputs": [
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "constant": false
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "constant": false
  }
];

var bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506105ea806100606000396000f30060806040526004361061006c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062f55d9d146100715780633b20673e146100b4578063522f68151461014257806368116177146101a75780638da5cb5b146101fe575b600080fd5b34801561007d57600080fd5b506100b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610255565b005b61012860048036038101908080610c80019060648060200260405190810160405280929190826064602002808284378201915050505050919291929080610c8001906064806020026040519081016040528092919082606460200280828437820191505050505091929192905050506102c9565b604051808215151515815260200191505060405180910390f35b34801561014e57600080fd5b5061018d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104c7565b604051808215151515815260200191505060405180910390f35b3480156101b357600080fd5b506101e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610578565b6040518082815260200191505060405180910390f35b34801561020a57600080fd5b50610213610599565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102b057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032757600080fd5b600090505b60648160ff1610156104bc57600073ffffffffffffffffffffffffffffffffffffffff16848260ff1660648110151561036157fe5b602002015173ffffffffffffffffffffffffffffffffffffffff16141580156103a3575060006001848360ff1660648110151561039a57fe5b60200201510214155b156104af57838160ff166064811015156103b957fe5b602002015173ffffffffffffffffffffffffffffffffffffffff166108fc6001858460ff166064811015156103ea57fe5b6020020151029081150290604051600060405180830381858888f1935050505015801561041b573d6000803e3d6000fd5b50838160ff1660648110151561042d57fe5b602002015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6001868560ff1660648110151561049357fe5b6020020151026040518082815260200191505060405180910390a35b808060010191505061032c565b600191505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561052457600080fd5b8273ffffffffffffffffffffffffffffffffffffffff166108fc600184029081150290604051600060405180830381858888f1935050505015801561056d573d6000803e3d6000fd5b506001905092915050565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820a34469f01f5b4c441ce11aa9de4b65e45675a89fc3dba71bec98a67b049845500029";

class SPREADSHEET {
    setSpreadsheet(_spreadsheet) {
        this.spreadsheetObject = _spreadsheet;
    }

    getSpreadsheet() {
        return this.spreadsheetObject;
    }
}

class DATASET {
    constructor() {
        this.dataset = [];
        this.iterator = 0;
        this.waiting = false;
    }
    resetData() {
        this.dataset = [];
    }
    overrideData(_newData) {
        this.dataset = _newData;
    }
    addRowToDataset(_row) {
        this.dataset.push(_row);
    }
    getDataset() {
        return this.dataset;
    }
    getNextItem() {
        if (this.iterator < this.dataset.length) {
            var temp = this.dataset[this.iterator];
            this.iterator = this.iterator + 1
            return temp;
        } else {
            return false;
        }
    }
    isEmpty() {
        if (this.iterator < this.dataset.length) {
            return false;
        } else {
            return true;
        }
    }
    getLengthOfDataset() {
        return this.dataset.length;
    }
    wait() {
        this.waiting = true;
    }
    go() {
        this.waiting = false;
    }
    isWaiting() {
        return this.waiting;
    }
}

class DEDUPER {
    constructor() {
        this.dataSet = {};
    }
    clearAll() {
        this.dataSet = {};
    }
    addItem(_address, _amount) {
        this.dataSet[_address] = _amount
    }
    getItemAmount(_address) {
        return this.dataSet[_address];
    }
    addressExists(_address) {
        if (_address in this.dataSet) {
            return true;
        } else {
            return false;
        }
    }
    dumpAsList() {
        var list = [];
        for (const [key, value] of Object.entries(this.dataSet)) {
            var row = [key, value];
            list.push(row);
            row = [];
        }
        return list;
    }
}

class REPORT {
    constructor() {
        this.report = {
            "fullReport": {}
        };
        this.items = [];
    }
    addItem(_item) {
        this.items.push(_item);
    }
    generateReport() {
        this.report["fullReport"] = this.items;
        return this.report;
    }
}

class SENDER {
    setAddress(_address) {
        this.senderAddress = _address;
    }
    getAddress() {
        return this.senderAddress;
    }
    setBalance(_balance) {
        this.senderBalance = new web3.utils.BN(_balance);
    }
    getBalance() {
        return this.senderBalance;
    }
}

class BLOCKCHAIN {
    setChainId(_chainId) {
        this.chainId = _chainId;
    }
    getChainId() {
        return this.chainId;
    }
}

class ITEMFORREPORT {
    constructor() {
        this.main = {};
    }
    addField(_string, _object) {
        this.main[_string] = _object;
    }
    getMain() {
        return this.main;
    }
}

class READY {
    constructor() {
        this.txCount = 0;
        this.firstPass = true;
    }
    addTx() {
        this.txCount = this.txCount + 1;
    }
    removeTx() {
        this.txCount = this.txCount - 1;
    }
    isReady() {
        if (this.txCount == 0) {
            return true;
        } else {
            return false;
        }
    }
    firstPassDone() {
        this.firstPass = false;
    }
    isNotFirstPass() {
        if (this.firstPass != true) {
            return true;
        }
    }
}

class STORAGE {
    constructor() {
        this.storage = {};
    }
    addItem(_key, _value) {
        this.storage[_key] = _value;
    }
    getItems() {
        return this.storage;
    }
}

class CONTRACT {
    setAddress(_address) {
        this.address = _address;
    }
    getAddress() {
        return this.address;
    }
    setContractInstanceObject(_multiswapContractInstance) {
        this.multiswapContractInstance = _multiswapContractInstance;
        console.log(JSON.stringify(this.multiswapContractInstance));
    }
    getContractInstanceObject() {
        console.log(JSON.stringify(this.multiswapContractInstance));
        return this.multiswapContractInstance;
    }
}

function deploy_contract() {
    web3.eth.getGasPrice(function(error, gas_price) {
        console.log("Gas price: " + gas_price);
        if (!error) {
            web3.eth.getBlock("latest", function(error, block) {
                console.log("The gas block limit is: " + block.gasLimit.toString());
                if (!error) {
                    var transaction_object = {
                        chainId: web3.utils.toHex(newBlockchain.getChainId()),
                        from: document.getElementById("public_key_input").value,
                        gasPrice: web3.utils.toHex(gas_price),
                        gas: web3.utils.toHex(block.gasLimit.toString()),
                        data: bytecode
                    };
                    web3.eth.accounts.signTransaction(transaction_object, document.getElementById("private_key_input").value, function(error, signed_tx) {
                        if (!error) {
                            //console.log("Signed transaction: " + JSON.stringify(signed_tx));
                            web3.eth.sendSignedTransaction(signed_tx.rawTransaction, function(error, sent_tx) {
                                if (!error) {
                                    //console.log("Sent transaction: " + sent_tx);
                                    document.getElementById("deploy_contract_output").innerHTML = "Please wait for about 10 seconds for transaction to be confirmed ...";
                                    setTimeout(function() {
                                        web3.eth.getTransactionReceipt(sent_tx, function(err, res_rec) {
                                            if (!err) {
                                                if (res_rec != null && res_rec != undefined) {
                                                    //console.log("Success, we now have a transaction receipt: " + JSON.stringify(res_rec));
                                                    document.getElementById("deploy_contract_output").innerHTML = "Contract address: " + res_rec["contractAddress"];
                                                    newContract.setAddress(res_rec["contractAddress"]);
                                                    console.log("New contract at: " + newContract.getAddress());
                                                    var multiswapContractInstance = new web3.eth.Contract(abi, res_rec["contractAddress"]);
                                                    newContract.setContractInstanceObject(multiswapContractInstance);
                                                }
                                            } else {
                                                console.log("Unable to get transaction receipt " + err);
                                            }
                                        });
                                    }, 10000);

                                } else {
                                    console.log("*\nSend signed transaction failed: " + error);
                                }
                            });
                        } else {
                            console.log(error);
                        }
                    });

                } else {
                    console.log(error);
                }
            });

        } else {
            console.log(error);
        }
    });
}

async function readEventLogs() {
    var successList = [];
    console.log("Reading event logs ...");
    while (true) {
        if (!newDataset.isWaiting()) {
            newDataset.wait();
            if (!newDataset.isEmpty()) {
                var data = newDataset.getNextItem();
                //console.log("Data: " + data);
                var addressToQuery = data[0];
                var amountToQuery = data[1];
                newContract.getContractInstanceObject().getPastEvents('Transfer', {
                    filter: {
                        _from: web3.utils.toChecksumAddress(document.getElementById("read_event_logs_input_slow").value),
                        _to: web3.utils.toChecksumAddress(addressToQuery),
                        _amount: amountToQuery
                    },
                    fromBlock: 0,
                    toBlock: 'latest'
                }, function(error, events) {
                    if (!error) {
                        if(events.length > 0){
                            if ((events[0].returnValues._to == addressToQuery) && (events[0].returnValues._amount == amountToQuery)){
                                var temp = [events[0].returnValues._to, events[0].returnValues._amount];
                                successList.push(temp);
                                temp = [];
                            }
                        }
                        newDataset.go();
                    } else {
                        console.log("Error: " + error);
                        newDataset.go();
                    }
                });
                console.log("Dataset not empty yet, still going ...");
            } else {
                break;
            }
        } else {
            console.log("Waiting for lock to be released ...");
            await sleep(200);
        }
    }
    console.log("Writing output, the following transfers are 100% confirmed via event logs");
    document.getElementById("read_event_logs_output_slow").innerHTML = JSON.stringify(successList);
}

function getRandomsBalance() {
    var wei, balance
    try {
        web3.eth.getBalance(web3.utils.toChecksumAddress(document.getElementById("get_balance_input").value), function(error, wei) {
            if (!error) {
                var balance_in_eth = web3.utils.fromWei(wei, 'ether');
                document.getElementById("get_balance_output").innerHTML = balance_in_eth + " Eth (" + wei + " wei)";
            }
        });
    } catch (err) {
        document.getElementById("get_balance_output").innerHTML = err;
    }
}


async function readEventLogsFast() {
    var successList = [];
    console.log("Reading event logs ...");
                await newContract.getContractInstanceObject().getPastEvents('Transfer', {
                    filter: {
                        _from: web3.utils.toChecksumAddress(document.getElementById("read_event_logs_input_fast").value)
                    },
                    fromBlock: 0,
                    toBlock: 'latest'
                }, function(error, events) {
                    if (!error) {
                        for(var i = 0; i < events.length; i++){
                            var temp = [events[i].returnValues._to, events[i].returnValues._amount];
                            successList.push(temp);
                            temp = [];
                        }
                    } else {
                        console.log("Error: " + error);
                    }
                });

    console.log("Writing output, the following transfers are 100% confirmed via event logs");
    document.getElementById("read_event_logs_output_fast").innerHTML = JSON.stringify(successList);
}

function initialize_contract() {
    if (web3.utils.isAddress(document.getElementById("initialize_contract_input").value)) {
        console.log("Using the address provided, please wait ...");
        newContract.setAddress(document.getElementById("initialize_contract_input").value);
    } else {
        console.log("Initializing existing contract at " + newContract.getAddress());
    }
    var multiswapContractInstance = new web3.eth.Contract(abi, newContract.getAddress());
    newContract.setContractInstanceObject(multiswapContractInstance);
}



function initialize_rpc() {
    try {
        window.web3 = new Web3(new Web3.providers.HttpProvider(document.getElementById("initialize_rpc_input").value));
        newBlockchain.setChainId(document.getElementById("initialize_chainid_input").value);
        try {
            web3.eth.getNodeInfo(function(error, nodeInfo) {
                if (!error) {
                    document.getElementById("initialize_rpc_output").innerHTML = "Connected to: " + nodeInfo;
                    document.getElementById("initialize_rpc_output_2").innerHTML = "RPC: " + document.getElementById("initialize_rpc_input").value;
                }
            });
        } catch {
            document.getElementById("initialize_rpc_output").innerHTML = error;

        }
        try {
            web3.eth.getChainId(function(error, chainId) {
                if (!error) {
                    document.getElementById("initialize_rpc_output_3").innerHTML = "ChainId: " + chainId;
                }
            });
        } catch (err) {
            document.getElementById("initialize_rpc_output_4").innerHTML = err;
        }
        try {
            web3.eth.getBlockNumber(function(error, blockNumber) {
                if (!error) {
                    //console.log(blockNumber);
                    document.getElementById("initialize_rpc_output_4").innerHTML = "Latest block number: " + blockNumber;
                } else {
                    document.getElementById("initialize_rpc_output_4").innerHTML = error;
                }
            });
        } catch (error) {
            document.getElementById("latest_block_number_output").innerHTML = error;
        }
    } catch (error) {
        document.getElementById("initialize_rpc_output").innerHTML = "Unable to connect to: " + document.getElementById("initialize_rpc_input").value + "\n" + error;
    }

}

/* Paste this in your console if you want to change the amounts for testing purposes */
function activateTestMode() {
    var arr = newDataset.getDataset();
    var newArr = [];
    var amountToProcess = arr.length;
    for (let i = 0; i < arr.length; i++) {
        var a = new web3.utils.BN("1000000000000");
        aa = [arr[i][0], a.toString()];
        newArr.push(aa);
        aa = [];
    }
    newDataset.resetData();
    newDataset.overrideData(newArr);
    console.log(JSON.stringify(newDataset.getDataset(), 2, 2));
}

function process_spreadsheet() {
    var file = document.getElementById('docpicker')
    var viewer = document.getElementById('spreadsheet_output')
    file.addEventListener('change', importFile);

    function importFile(evt) {
        var f = evt.target.files[0];

        if (f) {
            var r = new FileReader();
            r.onload = e => {
                var contents = processExcel(e.target.result);
                //console.log(contents)
            }
            r.readAsBinaryString(f);
        } else {
            //console.log("Failed to load file");
        }
    }

    function processExcel(data) {
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        var firstSheet = workbook.SheetNames[0];
        var data = to_json(workbook);
        return data
    };

    function to_json(workbook) {
        newDataset.resetData();
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                header: 1
            });
            if (roa.length) result[sheetName] = roa;
        });
        //console.log("We have the following data from the spreadsheet, we will add this data to the SPREADSHEET class ...\n" + JSON.stringify(result["Sheet1"], 2, 2));
        newSpreadsheet.setSpreadsheet(result);
        var tx_counter = 0;
        for (i = 0; i < newSpreadsheet.getSpreadsheet()["Sheet1"].length; i++) {
            if (newSpreadsheet.getSpreadsheet()["Sheet1"][i][1] != undefined && newSpreadsheet.getSpreadsheet()["Sheet1"][i][1] != "undefined") {
                accountAddress = newSpreadsheet.getSpreadsheet()["Sheet1"][i][1].toString();
                if (web3.utils.isAddress(accountAddress)) {
                    var tempAmountinWei = parseInt(newSpreadsheet.getSpreadsheet()["Sheet1"][i][2], 10);
                    var amountAsBN = new web3.utils.BN(tempAmountinWei.toString());
                    if (web3.utils.toBN(amountAsBN).gt(web3.utils.toBN('0')) && web3.utils.toBN(amountAsBN).lt(web3.utils.toBN('1000000000000000000000'))) {
                        var row = [accountAddress, amountAsBN.toString()];
                        newDataset.addRowToDataset(row);
                        tx_counter = tx_counter + 1;
                        row = [];
                    } else {
                        document.getElementById("spreadsheet_output").innerHTML = "ERROR!: Account Address of " + accountAddress + "is going to receive more than 1000 network tokens (this prototype application does not support amounts that high)";
                    }
                }
            }
        }
        document.getElementById("spreadsheet_output").innerHTML = JSON.stringify(newDataset.getDataset(), 2, 2);
    };
}

function getBalance(_address) {
    console.log("Checking account balance of address: " + _address);
    try {
        web3.eth.getBalance(_address, function(error, wei) {
            if (!error) {
                newSender.setBalance(wei);
            }
        });
    } catch (err) {
        console.log(err);
    }
}

function overrideInMemoryData(_newData) {
    var confirmation = confirm("Pressing OK will override in-memory data");
    if (confirmation) {
        console.log("Overriding data ...");
        newDataset.resetData();
        //console.log(document.getElementById("override_data_input").value);
        var json = JSON.parse(document.getElementById("override_data_input").value);
        newDataset.overrideData(json);
        document.getElementById("override_data_output").innerHTML = JSON.stringify(newDataset.getDataset(), 2, 2);
    }

}

function preCheckForDuplicateAddresses() {
    // Flush out deduper before we start
    newDeduper.clearAll();
    var arr = newDataset.getDataset();
    var amountToProcess = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (newDeduper.addressExists(arr[i][0])) {
            var amount = new web3.utils.BN(newDeduper.getItemAmount(arr[i][0]));
            var amount_to_add = web3.utils.toBN(arr[i][1]);
            var new_amount = amount.add(amount_to_add);
            newDeduper.addItem(arr[i][0], new_amount.toString());
        } else {
            newDeduper.addItem(arr[i][0], arr[i][1]);
        }
    }
    newDataset.overrideData(newDeduper.dumpAsList());
    console.log("Total items reduced from " + amountToProcess + " to " + newDataset.getDataset().length);
    document.getElementById("pre_check_output_for_duplicate_addresses").innerHTML = JSON.stringify(newDataset.getDataset(), 2, 2);
}

function preCheck() {
    newSender.setAddress(document.getElementById("public_key_input").value);
    var requiredBalance = new web3.utils.BN("0");
    var accountAddress = '';
    var dataForCheck = newDataset.getDataset();
    for (i = 0; i < dataForCheck.length; i++) {
        temp_num = web3.utils.toBN(dataForCheck[i][1]);
        requiredBalance = requiredBalance.add(temp_num);
    }
    console.log("Total amount to be transfered: " + requiredBalance.toString() + " Wei");
    console.log("Approx: " + web3.utils.fromWei(requiredBalance.toString(), 'ether') + " CMT");
    getBalance(newSender.getAddress());
    document.getElementById("pre_check_output").innerHTML = "Calculating balances, please wait ...";
    setTimeout(function() {
        console.log("Required balance is: " + requiredBalance.toString());
        console.log("Available balance is : " + newSender.getBalance());
        if (web3.utils.toBN(requiredBalance).gt(web3.utils.toBN(newSender.getBalance()))) {
            document.getElementById("pre_check_output").innerHTML = "<b>Not enough funds.</b>";
        } else {
            document.getElementById("pre_check_output").innerHTML = "Excellent, it seems that there are sufficient funds (save for unknown gas) in the sender's account";
        }
        console.log("We have " + newDataset.getLengthOfDataset() + " items to process ...");
    }, 3500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// We need to wait until any miner has included the transaction
// in a block to get the address of the contract
async function waitBlock(_tx_hash, _to_address, _to_amount) {
    //console.log("Entering wait block");
    newReady.addTx();
    var ready_to_break = false;
    while (true) {
        if (ready_to_break == false) {
            web3.eth.getTransactionReceipt(_tx_hash, function(err, res_rec) {
                if (!err) {
                    if (res_rec != null && res_rec != undefined) {
                        newReady.firstPassDone();
                        newReady.removeTx();
                        newDataset.go();
                        ready_to_break = true;
                    } else {
                        console.log("Waiting for transaction receipt");

                    }
                } else {
                    newReady.firstPassDone();
                    newReady.removeTx();
                    newDataset.go();
                    ready_to_break = true;
                }
            });
            await sleep(1000);
        } else {
            break;
        }
    }
}

class OneHundredItems {
    constructor() {
        this.addresses = [];
        this.amounts = [];
        this.batchSize = 100;
    }
    setAddress(_address) {
        this.addresses.push(_address);
    }
    setAmount(_amount) {
        this.amounts.push(web3.utils.toWei(_amount.toString(), "wei"));
    }
    getAddresses() {
        return this.addresses;
    }
    getAmounts() {
        return this.amounts;
    }
    flush() {
        this.addresses = [];
        this.amounts = [];
    }
    /* This is for an array which is set to a specific batch size even if there are not enough transfers left to fill the batch size */
    isReady() {
        if ((newDataset.isEmpty()) && (this.addresses.length == this.amounts.length) && this.addresses.length > 0 && this.amounts.length > 0) {
            //console.log("We are on the last batch of n transfers, so we are going to add some zero addresses and amounts to get the address and amount arrays up to exactly n (because this is what Vyper expects)");
            while(this.addresses.length < this.batchSize && this.amounts.length < this.batchSize){
                var zeroAmount = new web3.utils.BN("0");
                this.addresses.push("0x0000000000000000000000000000000000000000");
                this.amounts.push(zeroAmount.toString());
            }
            //console.log("We are ready to process a batch ...");
            //console.log("Addresses: " + this.addresses);
            //console.log("Amounts: " + this.amounts);
        }
        // This is ready when addresses and amounts are in a batch of n OR when the dataset is eventually empty (finished iterating through the last batch which may have less than n) and we have an equal amount of addresses and amounts in the dregs
        if ((this.addresses.length == this.batchSize && this.amounts.length == this.batchSize) || ((newDataset.isEmpty()) && (this.addresses.length == this.amounts.length) && this.addresses.length > 0 && this.amounts.length > 0)) {
            return true;
        } else {
            return false;
        }
    }
    
    getTotalValuePerHundred() {
        var total = new web3.utils.BN("0");
        var theAmounts = this.amounts;
        for (i = 0; i < theAmounts.length; i++) {
            var total = total.add(web3.utils.toBN(theAmounts[i]));
        }
        return total.toString();
    }
}

async function transferTokens() {
    var transfer_tokens_button = document.querySelector('#transfer_tokens');
    transfer_tokens_button.disable = true;
    transfer_tokens_button.innerText = "Single-use button only; please refresh page and use new external account if you want to transfer more tokens"
    transfer_tokens_button.disable = true;
    newSender.setAddress(document.getElementById("public_key_input").value);
    var toAddress = web3.utils.toChecksumAddress(newContract.getAddress());
    var fromAddress = web3.utils.toChecksumAddress(newSender.getAddress());
    //if (typeof(Storage) !== "undefined") {
        //localStorage.clear();
        var output_string = "";
        while (true) {
            if (!newDataset.isWaiting()) {
                newDataset.wait();
                if (!newDataset.isEmpty()) {
                    var newOneHundredItems = new OneHundredItems();
                    while(!newOneHundredItems.isReady()){
                        var data = newDataset.getNextItem();
                        newOneHundredItems.setAddress(data[0]);
                        newOneHundredItems.setAmount(data[1]);
                    }
                    //var itemForReport = new ITEMFORREPORT();
                    if (newOneHundredItems.isReady()) {
                        var de = newContract.getContractInstanceObject().methods.bulkSendEth(newOneHundredItems.getAddresses(), newOneHundredItems.getAmounts()).encodeABI();
                        var toAmount = newOneHundredItems.getTotalValuePerHundred();
                        //console.log("Transferring a total of : " + toAmount);
                        try {
                            web3.eth.getGasPrice(function(error, gas_price) {
                                console.log("Gas price: " + gas_price);
                                if (!error) {
                                    web3.eth.getBlock("latest", function(error, block) {
                                        //console.log("\nchainId" + newBlockchain.getChainId());
                                        //console.log("\nfrom" + fromAddress);
                                        //console.log("\ngasPrice" + gas_price);
                                        //console.log("\ngas" + block.gasLimit);
                                        //console.log("\nto" + toAddress);
                                        //console.log("\nvalue" + toAmount);
                                        //console.log("\ndata" + de);
                                        if (!error) {
                                            var transaction_object = {
                                                chainId: newBlockchain.getChainId(),
                                                from: newSender.getAddress(),
                                                gasPrice: gas_price,
                                                gas: block.gasLimit,
                                                to: toAddress,
                                                value: toAmount,
                                                data: de
                                            };
                                            //console.log("\nTransaction object: " + JSON.stringify(transaction_object));
                                            web3.eth.accounts.signTransaction(transaction_object, document.getElementById("private_key_input").value, function(error, signed_tx) {
                                                if (!error) {
                                                    web3.eth.sendSignedTransaction(signed_tx.rawTransaction, function(error, sent_tx) {
                                                        if (!error) {
                                                            //console.log("\nSent TX: " + sent_tx);
                                                            waitBlock(signed_tx.transactionHash, toAddress, toAmount);
                                                        } else {
                                                            console.log("*\nSend signed transaction failed: " + error);
                                                            newDataset.go();
                                                        }
                                                    });
                                                } else {
                                                    console.log(error);
                                                }
                                            });

                                        } else {
                                            console.log(error);
                                        }
                                    });

                                } else {
                                    console.log(error);
                                }
                            });
                        } catch (err) {
                            console.log(err);
                        }
                        newOneHundredItems.flush();
                    } else {
                        console.log("Still adding items ..." + JSON.stringify(newOneHundredItems.getAddresses()));
                        await sleep(1000);
                    }

                } else {
                    console.log("Finished sending transactions");
                    break;
                }

            } else {
                console.log("Waiting for most recent transaction to be included in a block ...");
                await sleep(1000);
            }
        }
}

function withdrawTokens() {
    newSender.setAddress(document.getElementById("public_key_input").value);
    var toAddress = web3.utils.toChecksumAddress(newContract.getAddress());
    var fromAddress = web3.utils.toChecksumAddress(newSender.getAddress());
    var output_string = "";
    try {
        web3.eth.getBalance(toAddress, function(error, wei) {
            if (!error) {

                var de2 = newContract.getContractInstanceObject().methods.withdrawEther(fromAddress, wei).encodeABI();
                try {
                    web3.eth.getGasPrice(function(error, gas_price) {
                        console.log("Gas price: " + gas_price);
                        if (!error) {
                            web3.eth.getBlock("latest", function(error, block) {
                                if (!error) {
                                    var transaction_object = {
                                        chainId: newBlockchain.getChainId(),
                                        from: newSender.getAddress(),
                                        gasPrice: gas_price,
                                        gas: block.gasLimit,
                                        to: toAddress,
                                        data: de2
                                    };
                                    web3.eth.accounts.signTransaction(transaction_object, document.getElementById("private_key_input").value, function(error, signed_tx) {
                                        if (!error) {
                                            web3.eth.sendSignedTransaction(signed_tx.rawTransaction, function(error, sent_tx) {
                                                if (!error) {
                                                    console.log("Send signed transaction success:\n" + sent_tx);
                                                } else {
                                                    console.log("Send signed transaction failed:\n" + error);
                                                }
                                            });
                                        } else {
                                            console.log(error);
                                        }
                                    });

                                } else {
                                    console.log(error);
                                }
                            });

                        } else {
                            console.log(error);
                        }
                    });
                } catch (err) {
                    console.log(err);
                }


            } else {
                console.log("Error obtaining balance from contract");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

function identifyUnsettledTransfers() {
    var unsettledTransactions = [];
    var hashedEvents = [];
    var originalDataset = newDataset.getDataset();
    var eventLogDataset = JSON.parse(document.getElementById("event_log_data_input").value);
    for (var eventi = 0; eventi < eventLogDataset.length; eventi++) {
        hashedEvents.push(web3.utils.sha3(eventLogDataset[eventi][0].toString() + eventLogDataset[eventi][1].toString()));
        console.log(JSON.stringify(hashedEvents));
    }
    console.log(JSON.stringify(hashedEvents));
    for (var origi = 0; origi < originalDataset.length; origi++) {
        var origiTemp = web3.utils.sha3(originalDataset[origi][0].toString() + originalDataset[origi][1].toString());
        console.log("Processing: " + origiTemp);
        if (!hashedEvents.includes(origiTemp)) {
            var tempSingle = [originalDataset[origi][0], originalDataset[origi][1]];
            unsettledTransactions.push(tempSingle);
            tempSingle = [];
        }
    }
    document.getElementById("unsettled_data_output").innerHTML = JSON.stringify(unsettledTransactions);

}

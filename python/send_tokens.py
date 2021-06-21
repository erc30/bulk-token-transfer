# Things this program needs
# pip3 install openpyxl
# pip3 install configparser
# pip3 install web3

# How to run this script
# python3 send_tokens.py

# Send token script

# Import config parser and web3 and spreadsheet parser 
import time
import json
import configparser
from web3 import Web3
from openpyxl import load_workbook

# Read the config
config = configparser.ConfigParser()
config.read('config.ini')
sendersPrivateKey = config['sender']['privatekey']
sendersPublicKey = config['sender']['publickey']
blockchainRpcEndpoint = config['blockchain']['rpc']
blockchainChainId = int(config['blockchain']['chainid'])
inputFile = config['data']['inputfile']
outputFile = config['data']['outputfile']
gasPrice = int(config['blockchain']['gasprice'])
gasLimit = int(config['blockchain']['gaslimit'])

# Connect to blockchain
w3 = Web3(Web3.HTTPProvider(blockchainRpcEndpoint))
if(w3.isConnected()):
    print(blockchainRpcEndpoint)
    print(blockchainChainId)
else:
    print('Unable to connect to {0}'.format(blockchainRpcEndpoint))

# Open the spreadsheet
workbook = load_workbook(filename = inputFile)
worksheet = workbook.active
reportObject = {}
# Iterate through the spreadsheet
for i in range(1, worksheet.max_row+1):
    print("\n")
    recipientAddress = worksheet.cell(row=i, column=2).value
    amount = int(worksheet.cell(row=i, column=3).value)
    #TODO check that the amount is not unreasonable i.e. less than 10 tokens etc. not some outrageous amount like 1000000 tokens
    #Do this with a > 0 && < x statement (2 conditions)
    if w3.isAddress(recipientAddress):
        nonce = w3.eth.get_transaction_count(sendersPublicKey,"pending")
        print('Nonce: {0}'.format(nonce))
        transactionObject = {"nonce": nonce, "gas": gasLimit, "gasPrice": gasPrice, "from": sendersPublicKey, "to": recipientAddress, "value": amount, "chainId": blockchainChainId}
        signedTransaction = w3.eth.account.sign_transaction(transactionObject, sendersPrivateKey)
        print('Signed transaction: {0}'.format(signedTransaction))
        sentTransaction = w3.eth.send_raw_transaction(signedTransaction.rawTransaction)
        print('Send transaction: {0}'.format(sentTransaction))
        reportObject[time.time()] = transactionObject
        print(reportObject)
    else:
        print('Address {0} is not valid.'.format(recipientAddress))

with open(outputFile, 'w') as outfile:
    json.dump(reportObject, outfile)



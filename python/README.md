This is a Python based bulk transfer solution.

# Input

It accepts an `xlsx` spreadsheet with the following convention.

- Spreadsheet must be three columns

## First column

- The first column must be formatted as plain string only. This first column is your description for your own records

## Second column

- The second column must be formatted as plain string only. This second column is for single Ethereum compatible addresses to which tokens will be sent

## Third column

- The third column contains the amount of tokens in Wei (which will be sent to the Ethereum compatible address on that same row)

For example to send one ETH you would put 1000000000000000000 (1, followed by eighteen decimal places). For another example 1/2 ETH you would put 500000000000000000 (5, followed by seventeen decimal places).

Please use an online Wei converter if you need assistance with this.

# Obtain this code

Download this code i.e. `git clone https://github.com/second-state/bulk-token-transfer.git` then change to the python directory i.e. `cd bulk-token-transfer/python`

# Configure this code

Open the `config.ini` file and change any of the settings i.e. RPC Endpoint, Chain Id etc.

# Run this code

Type the following command with no parameters to run the script `python3 send_tokens.py` 

# Re run a failed bulk transfer

If the script stops running (internet outage, RPC issue, or whatever reason) you can easily just continue where you left off. Simply run the above command, except this time add a parameter (which address in the spreadsheet to continue from). For example `python3 send_tokens.py 0x65a3bB44d45d8A6e90e3E16813DC8f0700963557`. This will ignore all transfers before the given address and just continue on from the `0x65a3bB44d45d8A6e90e3E16813DC8f0700963557` address to the end of the spreadsheet.

# Output

This script generates an HTML report.

# Generate a report

From within the python directory, type `ls -ltr` this will list the contents of the directory with the most recent file changed at the bottom like this ...

```
-rw-r--r--  1 tpmccallum  staff       276 24 Jun 13:19 config.ini
-rw-r--r--  1 tpmccallum  staff       503 24 Jun 13:27 template.html
-rw-r--r--  1 tpmccallum  staff    314361 24 Jun 13:27 report_transfers.html
-rw-r--r--  1 tpmccallum  staff    204206 24 Jun 13:50 2021-06-24-13-20-26
```
We are looking for the most recent file which has the following format YYYY-MM-DD-hh-mm-ss i.e. `2021-06-24-13-20-26`. Copy this to the clipboard because we will be using it in our next command.

Run the report by typing the following command

```
python3 report.py 2021-06-24-13-20-26
```

Now open the `report_transfers.html` file (which was just generated) in your web browser (no need for hosting, just select `File` - > `Open` in your browser's menu)

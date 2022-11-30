const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider ||"ws://127.0.0.1:8545");



    //Load accounts
var accounts = web3.eth.getAccounts();

var pmabi =  [
    {
      "constant": true,
      "inputs": [],
      "name": "parts_cnt",
      "outputs": [
        {
          "name": "",
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
      "name": "products_cnt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "name": "manufacturer",
          "type": "address"
        },
        {
          "name": "serial_number",
          "type": "string"
        },
        {
          "name": "product_type",
          "type": "string"
        },
        {
          "name": "creation_date",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "parts",
      "outputs": [
        {
          "name": "manufacturer",
          "type": "address"
        },
        {
          "name": "serial_number",
          "type": "string"
        },
        {
          "name": "part_type",
          "type": "string"
        },
        {
          "name": "creation_date",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "parts_list",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products_list",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "part_hash",
          "type": "bytes32"
        }
      ],
      "name": "parthash",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "serial_number",
          "type": "string"
        },
        {
          "name": "part_type",
          "type": "string"
        },
        {
          "name": "creation_date",
          "type": "string"
        }
      ],
      "name": "buildPart",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "serial_number",
          "type": "string"
        },
        {
          "name": "product_type",
          "type": "string"
        },
        {
          "name": "creation_date",
          "type": "string"
        },
        {
          "name": "part_array",
          "type": "bytes32[6]"
        }
      ],
      "name": "buildProduct",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "product_hash",
          "type": "bytes32"
        }
      ],
      "name": "getParts",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[6]"
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
          "name": "parthasha",
          "type": "bytes32"
        }
      ],
      "name": "getPart",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

var pmaddress = '0x29676652A181Ae89307E869191DaCFce3a355730';


pm = new web3.eth.Contract(pmabi, pmaddress);

async function getContractPublicVariable() {
    var cnt = new Array();
    for(i=0;i<5;i++){
        var value = await pm.methods.parts_list(i).call()
        cnt[i] = value;
    }
    console.log(cnt);
    for(i=0;i<5;i++){
        var result = await pm.methods.parts(cnt[i]).call()
        console.log(result);
    }
}
getContractPublicVariable();
// async function getPL(){
//     var value =await pm.methods.parts('0x1171275fe9bd5f50194401ebf32c87830ac002e471b76864ecf18570aaffddbc').call()
//     console.log(value);
// }
// getPL();





// pm.methods.buildPart('2234','window','12/12/22').send({from: '0x58DC78B1B893986eAd06e254f1D675f9796e647c', gas:1000000}).then(function(receipt){
//     console.log('------------tx0----------------');
//     console.log(receipt.transactionHash);
//     console.log('-------------tx0---------------');
// });

// var myEvent0 = pm.once('parthash',{
//     filter:{},
//     fromBlock: 0
// }, function(error, event){
//     console.log(event.raw.data)
// });




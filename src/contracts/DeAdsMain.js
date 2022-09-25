export default [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tag",
				"type": "string"
			}
		],
		"name": "addNewTag",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "supplier",
				"type": "address"
			}
		],
		"name": "NewSupplierAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "tag",
				"type": "string"
			}
		],
		"name": "NewTagAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "ad",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "supplier",
				"type": "address"
			}
		],
		"name": "RecommendationClicked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_supplier",
				"type": "address"
			}
		],
		"name": "registerSupplier",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "setDeAdsUserContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tag",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ad",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_supplier",
				"type": "address"
			}
		],
		"name": "setRatingForUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tag",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ad",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_correlationScore",
				"type": "uint256"
			}
		],
		"name": "setUserRecommendation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_supplier",
				"type": "address"
			}
		],
		"name": "checkSupplierRegistration",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeAdsUserContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAdsForUser",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tag",
				"type": "string"
			}
		],
		"name": "getRecommendationFromSupplier",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "supplier",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "ad",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "score",
								"type": "uint256"
							}
						],
						"internalType": "struct DeAdsMainContract.Recommendation[]",
						"name": "recommendations",
						"type": "tuple[]"
					}
				],
				"internalType": "struct DeAdsMainContract.SupplierRecommendation",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_supplier",
				"type": "address"
			}
		],
		"name": "getSupplierClickRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTags",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "recommendMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "tag",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ad",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registerSupplierMap",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "supplierClicksMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tagMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "ad",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tags",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
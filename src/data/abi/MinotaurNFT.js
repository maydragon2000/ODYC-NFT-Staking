export const MinotaurNFTAbi = [
	{
		inputs: [
			{ internalType: "string", name: "_name", type: "string" },
			{ internalType: "string", name: "_symbol", type: "string" },
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "newTime",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "currentTime",
				type: "uint256",
			},
		],
		name: "AdoptionTimeChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "bio",
				type: "string",
			},
		],
		name: "BioChange",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "newTime",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "currentTime",
				type: "uint256",
			},
		],
		name: "EvolveTimeChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "mType",
				type: "uint256",
			},
		],
		name: "MinotaurMinted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "newName",
				type: "string",
			},
		],
		name: "NameChange",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "OvolosAddrSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "PoolAddrSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "newTime",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "currentTime",
				type: "uint256",
			},
		],
		name: "StakingTimeChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [],
		name: "BIO_CHANGE_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "BREED_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "EVOLVE_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "MAX_MINT",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "MAX_PRE_MINT",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "MINT_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "NAME_CHANGE_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "PRESALE_MINT_PRICE",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_parent", type: "uint256" }],
		name: "adopt",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "bio",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
		],
		name: "canAdopt",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
			{ internalType: "string", name: "_bio", type: "string" },
		],
		name: "changeBio",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
			{ internalType: "string", name: "newName", type: "string" },
		],
		name: "changeName",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
		],
		name: "evolve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
		],
		name: "getMinotaurType",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes32", name: "wlroot", type: "bytes32" }],
		name: "init",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isLaunched",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "string", name: "nameString", type: "string" },
		],
		name: "isNameReserved",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isPresale",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isRevealed",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "launchToggle",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "account", type: "address" },
			{ internalType: "uint256", name: "_mintAmount", type: "uint256" },
		],
		name: "mainSale",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "minotaur",
		outputs: [
			{
				internalType: "enum MinotaurNFT.MinotaurType",
				name: "mType",
				type: "uint8",
			},
			{ internalType: "bool", name: "bStaked", type: "bool" },
			{ internalType: "uint256", name: "lastBreedTime", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "account", type: "address" },
			{ internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
			{ internalType: "uint256", name: "_mintAmount", type: "uint256" },
		],
		name: "preSale",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "presaleToggle",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "revealTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "string", name: "_newBaseURI", type: "string" },
		],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_addr", type: "address" }],
		name: "setOvolostoken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_addr", type: "address" }],
		name: "setStakingPool",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
		],
		name: "startStaking",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
		],
		name: "stopStaking",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "bytes4", name: "interfaceId", type: "bytes4" },
		],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "str", type: "string" }],
		name: "toLower",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
		name: "tokenByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
		name: "tokenNameByIndex",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "uint256", name: "index", type: "uint256" },
		],
		name: "tokenOfOwnerByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "totalSupplyByType",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupplyHoplite",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupplyMellon",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupplyYparchos",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "newOwner", type: "address" },
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "string", name: "presaleType", type: "string" },
			{ internalType: "bytes32", name: "root", type: "bytes32" },
		],
		name: "updatePresaleRoot",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "str", type: "string" }],
		name: "validateName",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

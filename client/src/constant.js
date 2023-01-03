export const contractAddress = '0xa0c04b315a301f3586a27ecc524a1148294eeb7a'

export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "eventId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "organizer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ticketAmount",
				"type": "uint256"
			}
		],
		"name": "createEvent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "payTicket",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "EventList",
		"outputs": [
			{
				"internalType": "string",
				"name": "eventId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "organizer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ticketAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ticketsSold",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numberOfEvents",
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
const expected = [
	{
		id: '7b1CrvvkJDoUkb7yWWUK',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Credit Card',
		total: 500,
		quantity: 1,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'WFPXPdS2Ujdx8mXUBmrQ',
		isDeposit: false,
		isBill: false,
		name: 'Other',
		color: '#cccccc',
		total: 76,
		quantity: 2,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'SiCfpq7A1ZBiP9h1WCTn',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Spotify',
		total: 10.89,
		quantity: 1,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: '0kAP0nySh4NPHN2ewqix',
		color: '#f7f794',
		isDeposit: false,
		isBill: false,
		name: 'Video Games',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: '5GZdIZsiol2bdDjsWTmh',
		color: '#cccccc',
		isDeposit: true,
		isBill: false,
		name: 'Income',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: '5fUWzZ6YtVZCo535ehIt',
		color: '#c694f7',
		isDeposit: false,
		isBill: false,
		name: 'Groceries',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: '6TVJk6uVLFopkNRH4YGe',
		color: '#94c6f7',
		isDeposit: false,
		isBill: false,
		name: 'Entertainment',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: '6aXcWBCYdNTOFkE1dfgJ',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Phone',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'A8mjVtxpAlVtuimS9G1s',
		color: '#94f7f7',
		isDeposit: false,
		isBill: false,
		name: 'Taxes',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'ACiHVM7AToAMNYY89vw0',
		color: '#f794c6',
		isDeposit: false,
		isBill: false,
		name: 'Health',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'AaQfs8ciExFGDouBGoY6',
		color: '#94f7c6',
		isDeposit: false,
		isBill: false,
		name: 'Dog',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'EPwqQf91vEOWwKEXpazp',
		color: '#949459',
		isDeposit: false,
		isBill: false,
		name: 'Personal',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'Elmabwcip5te9zbY5UAt',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Peleton',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'MGNQCwH6L2e9Kpp3dsnC',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Gym',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'NJ5rlhDybuqBpMnuF6G2',
		color: '#947759',
		isDeposit: false,
		isBill: false,
		name: 'Medical',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'NmYIdRaQNRPPXqyVzbsb',
		color: '#945a59',
		isDeposit: false,
		isBill: false,
		name: 'Savings',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'PIDJAL6cpUaarLh0MK07',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Student Loans',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'Q28g4JZExiZGSSlKDgGq',
		color: '#f794f7',
		isDeposit: false,
		isBill: false,
		name: 'Takeout',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'QE22KcJlZeJaPxJ0UXMS',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Adobe',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'QehvWHfsPOZlW9ZaIFbg',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Subscriptions',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'S4i7nnvcyUzka4iHsLKM',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'iCloud',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'URCYJvqLDdAZCT4UIzyi',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'SlingTV',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'ZKhOeP2hmNsPIf78M05v',
		color: '#94f794',
		isDeposit: false,
		isBill: false,
		name: 'Travel',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'ZfcZKSoWl4Fv2pOgWNqo',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Rent',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'alqnfrubd76fQSicfT2c',
		color: '#9494f7',
		isDeposit: false,
		isBill: false,
		name: 'Target',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'eupApwHVY1SyZ0CqRGMs',
		color: '#c6f794',
		isDeposit: false,
		isBill: false,
		name: 'Clothing',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'fxd1hMtvEBHl64Qa9NBB',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Audible',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'gsgRPUjtuKkzbGi17kYB',
		color: '#f79694',
		isDeposit: false,
		isBill: false,
		name: 'Amazon',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'guqCjLu8nfh9HiInkxPL',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'OnlyFans',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'pFtoZhXCo2fGDmLgxWep',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Insurance',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'txP4QUcpQnV8Qd0FqdTp',
		color: '#cccccc',
		isDeposit: false,
		isBill: true,
		name: 'Electricity',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	},
	{
		id: 'yFbfa4bx6AuOBjUA5dno',
		color: '#f7b494',
		isDeposit: false,
		isBill: false,
		name: 'Car',
		total: 0,
		quantity: 0,
		transactions: [
			{
				id: '7m3oL1Zby1u1PkcNLL0g',
				date: 1575266400000,
				amount: 10.89,
				description:
					'POS Debit - Visa Check Card 4244 - SPOTIFY USA 877-7781161 NY',
				category: 'Spotify',
				categoryId: 'SiCfpq7A1ZBiP9h1WCTn'
			},
			{
				id: '9QynVu5TWjr6HFPOIfs9',
				date: 1575266400000,
				amount: 56,
				description:
					'POS Debit - Visa Check Card 4244 - FORAGE PUBLIC HOUS LAKEWOOD O',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'C9ZCTZioc0d8NjLkVUGa',
				date: 1575266400000,
				amount: 20,
				description: 'ACH Transaction - PAYPAL INST XFER 0009100001',
				category: 'Other',
				categoryId: 'WFPXPdS2Ujdx8mXUBmrQ'
			},
			{
				id: 'J895onYkNIUTzpfaoc4U',
				date: 1575266400000,
				amount: 500,
				description:
					'ACH Transaction - BK OF AMER VI MC ONLINE PMT 0012114128',
				category: 'Credit Card',
				categoryId: '7b1CrvvkJDoUkb7yWWUK'
			}
		]
	}
]

export default expected

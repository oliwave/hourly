module.exports = {
	name: '基本資料',
	fields: {
		name: {
			name: '姓名',
			type: 'string',
			desc: '',
			unique: true,
			must: true,
			show: true,
			required: true,
		},
		person_id: {
			name: '身份證字號',
			type: 'string',
			desc: '',
			unique: true,
			must: true,
			show: true,
			required: true,
		},
		sex: {
			name: '性別',
			type: 'choice',
			desc: '',
			must: true,
			show: true,
			required: false,
			option: [
				{
					value: 'male',
					text: '男',
				},
				{
					value: 'female',
					text: '女',
				},
			],
		},
		email: {
			name: 'Email',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: false,
		},
		address: {
			name: '地址',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: false,
		},
		account: {
			name: '帳號',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: false,
		},
		desc: {
			name: '說明',
			type: 'textarea',
			row: 5,
			desc: '',
			must: true,
			show: true,
			required: false,
		},
	},
};

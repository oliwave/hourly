module.exports = {
	name: '文件2',
	fields: {
		doc_name: {
			name: '單據名',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: true,
		},
		doc_choice: {
			name: '文件項目',
			type: 'choice',
			desc: '',
			must: true,
			show: true,
			required: false,
			option: [
				{
					value: 'category1',
					text: '類別1',
				},
				{
					value: 'category2',
					text: '類別2',
				},
			],
		},
		doc_desc1: {
			name: '文件描述1',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: false,
		},
		file: {
			name: '檔案',
			type: 'upload',
			login: true,
			save_path: '/文件/綠保/{id}/',
			file_name: 'doc_file',
			desc: '',
			must: false,
			show: true,
			required: false,
		},
		boo: {
			name: '是否',
			type: 'boolean',
			shape: 'switch',
			desc: '',
			must: false,
			show: true,
			required: false,
		},
		boo2: {
			name: '是否',
			type: 'boolean',
			shape: 'checkbox',
			desc: '',
			must: false,
			show: true,
			required: false,
		},
	},
};

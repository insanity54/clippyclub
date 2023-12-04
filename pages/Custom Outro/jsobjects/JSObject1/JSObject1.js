export default {
	cdnUrl: 'https://clippyclub.b-cdn.net',
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async setIntiialVariables () {
		await storeValue('outroVideoUrl', '');
	},
	async setUploadedFilename () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const filename = FilePicker1.files[0].name;
		await Input2.setValue(filename);
		await storeValue('outroVideoUrl', `${this.cdnUrl}/${filename}`);
	}
}
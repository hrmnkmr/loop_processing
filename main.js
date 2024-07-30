var lists = ['佐藤', '伊藤', '鈴木', '木村', '田中', '高橋'];
for (var i = 0; i < lists.length; i++) {
	console.log(lists[i]);
}
var myName = {
	name: '太郎',
	age: 20,
	address: '東京都○○○'
}
for (var item in myName) {
	console.log(item);
}
var lists = [0, 1, 2, 3, 4, 5];
for (var item of lists) {
	console.log(item);
}
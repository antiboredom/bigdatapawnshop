var escapedBucketURL = "http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2F";
var escapedAntURL = escapedBucketURL + "ant2%2f";
var imgAntArray = ["FNSA_CANDYGRAM.jpg"]


/*
expects a category like this:
{
	items:[]
	images:[]
	baseURL: "http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2F"
	productURL:	"http://bigdatapawnshop.s3.amazonaws.com/antProducts/"
	parser: parser
}
*/

function makeImage(category){

	var item = Math.random(category.items.length -1);
	var image = Math.random(category.images.length -1);

	var zazzleUrl = "www.zazzle.com/api/create/at-238269211029758341?"+
			"?rf=238269211029758341"+
			"&ax=Linkover"+
			"&fwd=ProductPage"+
			"&ed=true"+
			"&tc="+
			"&ic="+
			"&t_image0_iid=" + category.baseURL + image +
			"t_image1_iid=" + category.baseURL + image +
			"&pd=" + item.pd;

	var itemImage = '238269211029758341___' + category.baseURL + image + '___' + item.pd;
	var bucketImgUrl = category.productURL + itemImage;

	var name = category.parser(item,image);

	return {
		zazzleUrl: zazzleUrl,
		imageURL: bucketImgUrl,
		price: item.price,
		name: name,
		pd: item.pd
	}
}

//this is the string parser for the ant url. it will be part of the category object. spy file will have a similar parser
function parser(item,image){
	return image.replace('.jpg', '').replace('_', ' ').replace('-', ' ') + ' ' + item.name.toUpperCase();
}


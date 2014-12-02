var categories = {
  ant: {
    items: [],
    images: [],
    productURL:	'http://bigdatapawnshop.s3.amazonaws.com/antProducts/',
    baseURL: 'http%253A%252F%252Fbigdatapawnshop.s3.amazonaws.com%252Fant2%252F',
    zazzleImageURL: 'http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2Fant2%2F',
    parser: function(item, image){
      return image
              .replace('.jpg', '')
              .replace('_', ' ')
              .replace('-', ' ')
              .toUpperCase()
              .replace('ANT-', '')
              .replace('NSA', '')
              .replace('NSA ANT-', '').trim();// + ' ' + item.name.toUpperCase();
    }
  },

  spy: {
    items: [],
    images: [],
    productURL:	'http://bigdatapawnshop.s3.amazonaws.com/spyProducts/',
    baseURL: 'http%253A%252F%252Fbigdatapawnshop.s3.amazonaws.com%252Fspy_files%252F',
    zazzleImageURL: 'http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2Fspy_resized%2F',
    parser: function(item, image){
      var item = item.name;
      if(image.indexOf("_docs_") > -1){
        

        //spy3_https__www.wikileaks.org_spyfiles_docs_SILTEC-PresSoci-fr.pdf_jpg123.jpg
        var pattern = /spy3_https__www\.wikileaks\.org_spyfiles_docs_/
        var pattern2 = /\.pdf_jpg\d{1,3}\.jpg/
        var pattern3 = /\d{13}/;
        var pattern4 = /-[a-z][a-z]/
        image = image.replace(pattern,' ');
        image = image.replace(pattern2,' ');

        image = image.replace(pattern3,' ');
        image = image.replace(pattern4,' ');
        image = image.replace('-', '');
        image = image.toUpperCase();
        return image.replace('.jpg', '').replace('_', ' ').replace('-', ' ').trim();// + ' ' + item;

      }
      else{
        //spy2_https__www.wikileaks.org_spyfiles_files_0_105_AMESYS-PROP_GEN_SECU_V2.pdf_jpg8.jpg"
        var pattern = /spy\d{1}_https__www\.wikileaks\.org_spyfiles_files_0_\d{1,3}_/
        var pattern2 = /-[a-z][a-z]/
        var pattern3 =/\.pdf_jpg\d{1,3}\.jpg/
        var pattern4 =/\d{6}/
        var id = image.match(pattern3)[0];
        
        id = id.replace(".pdf_jpg",'').replace(".jpg","").trim();
        console.log(id);

        image = image.replace(pattern,'');

        if(image.indexOf("ELAMAN-200805-CATALOGUE-P1_") > -1){
          var p = /C_\d{1}_/i
          image = image.replace("ELAMAN-200805-CATALOGUE-P1_elamancat_", "ELAMAN MAY 2008 ");
          image = image.replace(p, "");
          image = image.replace("(2)", " ");

        }
        else if(image.indexOf("GAMMA-201110") > -1){
          image = image.replace("GAMMA-201110", "GAMMA OCT 2011");
        }
        else if(image.indexOf("BLUECOAT-8100_InstallGuide") > -1){
          image = image.replace("BLUECOAT-8100_InstallGuide", "BLUECOAT INSTALL GUIDE");

        }
        else if(image.indexOf("BEA-Catalogue-200806") > -1){
          image = image.replace("BEA-Catalogue-200806", "BEA CATALOGUE JUN 2008");
        }
        else if(image.indexOf("200810-ISS-PRG-GROUP2000-2") > -1){
          image = image.replace("200810-ISS-PRG-GROUP2000-2", "ISS GROUP2000 OCT 2008");
        }
        else if(image.indexOf("200906-ISS-PRG-GROUP2000") > -1){
          image = image.replace("200906-ISS-PRG-GROUP2000", "ISS GROUP2000 JUN 2009");
        }
        else if(image.indexOf("200810-ISS-PRG-SEPTIER") > -1){
          image = image.replace("200810-ISS-PRG-SEPTIER", "ISS SEPTIER OCT 2008");
        }
        else if(image.indexOf("200906-ISS-PRG-COBHAM") > -1){
          image = image.replace("200906-ISS-PRG-COBHAM", "ISS COBHAM JUN 2006");
        }
        else if(image.indexOf("200906-ISS-PRG-DIGITASK") > -1){
          image = image.replace("200906-ISS-PRG-DIGITASK", "ISS DIGITASK JUN 2009");
        }
        else if(image.indexOf("200906-ISS-PRG-SEPTIER") > -1){
          image = image.replace("200906-ISS-PRG-SEPTIER", "ISS SEPTIER JUN 2009");
        }
        else if(image.indexOf("200810-ISS-PRG-THALES") > -1){
          image = image.replace("200810-ISS-PRG-THALES", "ISS THALES OCT 2008");
        }
        else if(image.indexOf("201110-ISS-IAD-T1-GLIMMERGLASS") > -1){
          image = image.replace("201110-ISS-IAD-T1-GLIMMERGLASS", "ISS IAD-T1 GLIMMERGLASS OCT 2011");
        }
        else if(image.indexOf("201110-ISS-IAD-T4-NETRONOME") > -1){
          image = image.replace("201110-ISS-IAD-T4-NETRONOME", "ISS IAD-T4 NETRONOME OCT 2011");
        }
        else if(image.indexOf("201110-ISS-IAD-T4-SIMENA") > -1){
          image = image.replace("201110-ISS-IAD-T4-SIMENA", "ISS IAD-T4 SIMENA OCT 2011");
        }

        else if(image.indexOf("EBS_Electronic-" > -1)){

          if(image.indexOf("200606") > -1){
            image = image.replace("EBS_Electronic-200606", "EBS ELECTRONICS JUN 2006");

          }
          else if(image.indexOf("200612")> -1){
            image = image.replace("EBS_Electronic-200612", "EBS ELECTRONICS DEC 2006");

          }
          else if(image.indexOf("200712")> -1){
            image = image.replace("EBS_Electronic-200712", "EBS ELECTRONICS DEC 2007");

          }
          else if(image.indexOf("200806")> -1){
            image = image.replace("EBS_Electronic-200806", "EBS ELECTRONICS JUN 2008");

          }

        }

        image = image.replace(pattern2,'');
        image = image.replace(pattern3,'');
        image = image.replace("-"," ");
        image = image.replace("_"," ");
        image = image.toUpperCase();

        return image.trim().replace('.jpg', '').replace('_', ' ').replace('-', ' ').trim() + ' ' + id;// + ' ' + item.toUpperCase();

      }

    }

  }
};

// the default category
var currentCategory = 'ant';
var currentSubcategory = null;

// setting up container element for products, and template
var container = $('.product-grid');
var templateSource = $('#product-template').html();
var template = Handlebars.compile(templateSource);

var navTemplateSource = $('#nav-item-template').html();
var navTemplate = Handlebars.compile(navTemplateSource);

function loadProducts() {
  $.getJSON('data/products.json', function(data){
    data.categories.forEach(function(cat){

      cat.filenames.forEach(function(filename) {
        var parsed = {};
        parsed[categories[cat.name].parser({}, filename)] = filename;
        categories[cat.name].images.push(parsed);
      });
      categories[cat.name].items = cat.products;
    });
    nav();
    route(currentCategory);
  });
}

// changes which category we're looking at based on name (this needs to be the same as the key in the categories object)
function route(path) {
  container.html('');
  $(window).unbind('scroll');
  var params = path.split("/");
  currentCategory = params[0].replace("#", "");
  currentSubcategory = params[1] || null;
  populate(48);
}

// populate the window with new products
function populate(total) {
  if (currentSubcategory == null) {
    for (var i = 0; i < total; i ++) {
      var item = categories[currentCategory].items[Math.floor(Math.random()* categories[currentCategory].items.length)];
      var image = categories[currentCategory].images[Math.floor(Math.random()* categories[currentCategory].images.length)];

      var product = getProduct(item, image);
      var html = template(product);
      container.append(html);
    }
    $(window).bind('scroll', bindScroll);
  } else {
    console.log(categories[currentCategory]);
    categories[currentCategory].items.forEach(function(item){
      var image = '';
      categories[currentCategory].images.forEach(function(img){
        if (img[currentSubcategory]) image = img[currentSubcategory]
      });
      var product = getProduct(item, image);
      var html = template(product);
      container.append(html);
    });
  }

}

/*
expects a category like this:
{
  items:[]
  images:[]
  baseURL: 'http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2F'
  productURL:	'http://bigdatapawnshop.s3.amazonaws.com/antProducts/'
  parser: parser
}
*/
function getProduct(item, image){
  if (typeof image == 'object') {
    for(key in image) {
      if(image.hasOwnProperty(key)) {
        image = image[key];
        //do something with value;
      }
    }
  }
  var category = categories[currentCategory];
  //var item = category.items[Math.floor(Math.random()*category.items.length)];
  //var image = category.images[Math.floor(Math.random()*category.images.length)];

  var zazzleURL = 'http://www.zazzle.com/api/create/at-238269211029758341?'+
                  '?rf=238269211029758341'+
                  '&ax=Linkover'+
                  '&fwd=ProductPage'+
                  '&ed=true'+
                  '&tc='+
                  '&ic='+
                  '&t_image0_iid=' + category.zazzleImageURL + image +
                  '&t_image1_iid=' + category.zazzleImageURL + image +
                  '&pd=' + item.pd;

  var itemImage = '238269211029758341___' + category.baseURL + image + '___' + item.pd + '.jpg';
  var bucketImgURL = category.productURL + itemImage;

  var name = category.parser(item, image);

  return {
    zazzleURL: zazzleURL,
    imageURL: bucketImgURL,
    price: item.price,
    name: name,
    description: item.name,
    pd: item.pd
  }
}

function nav(){
  $('ul.products').html('');
  for (var catName in categories) {
    if (categories.hasOwnProperty(catName)) {
      var cat = categories[catName];
      var items = [];
      cat.images.forEach(function(img){
        var name = Object.keys(img)[0]
        items.push({url: catName + '/' + name, name: name});
      });
      var html = navTemplate({items: items});
      $('.' + catName + '-products').html(html);
    }
  }

  // category switching event handler
  $('.catalog-title a, ul.products a').on('click', function(e){
    route($(this).attr('href'));
  });
}

// lazy loading
function bindScroll(){
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $(window).unbind('scroll');
    populate(16);
  }
}


// hide failed images
function removeMe(el) {
  $(el).parent().remove();
}

// load the default category on page load
loadProducts();

var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

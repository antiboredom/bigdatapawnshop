var categories = {
  ant: {
    items: [],
    images: [],
    productURL:	'http://bigdatapawnshop.s3.amazonaws.com/antProducts/',
    baseURL: 'http%253A%252F%252Fbigdatapawnshop.s3.amazonaws.com%252Fant2%252F',
    zazzleImageURL: 'http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2Fant2%2F',
    parser: function(item, image){
      return image.replace('.jpg', '').replace('_', ' ').replace('-', ' ') + ' ' + item.name.toUpperCase();
    }
  },

  spy: {
    items: [],
    images: [],
    productURL:	'http://bigdatapawnshop.s3.amazonaws.com/spyProducts/',
    baseURL: 'http%253A%252F%252Fbigdatapawnshop.s3.amazonaws.com%252Fspy_files%252F',
    zazzleImageURL: 'http%3A%2F%2Fbigdatapawnshop.s3.amazonaws.com%2Fspy_files%2F',
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
        return image.replace('.jpg', '').replace('_', ' ').replace('-', ' ') + ' ' + item;

      }
      else{
        //spy2_https__www.wikileaks.org_spyfiles_files_0_105_AMESYS-PROP_GEN_SECU_V2.pdf_jpg8.jpg"
        var pattern = /spy\d{1}_https__www\.wikileaks\.org_spyfiles_files_0_\d{1,3}_/
        var pattern2 = /-[a-z][a-z]/
        var pattern3 =/\.pdf_jpg\d{1,3}\.jpg/
        var pattern4 =/\d{6}/


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

        return image.trim().replace('.jpg', '').replace('_', ' ').replace('-', ' ') + ' ' + item.toUpperCase();

      }

    }

  }
};

// the default category
var currentCategory = 'ant';

// setting up container element for products, and template
var container = $('#page-content-wrapper');
var templateSource = $('#product-template').html();
var template = Handlebars.compile(templateSource);


// changes which category we're looking at based on name (this needs to be the same as the key in the categories object)
function switchCategory(categoryName) {
  container.html('');
  $(window).unbind('scroll');

  // load the category products if needed
  if (categories[categoryName].items.length == 0) {
    $.getJSON('data/' + categoryName + '_filenames.json', function(data){
      categories[categoryName].images = data;
      $.getJSON('data/' + categoryName + '_prices_and_descriptions.json', function(data){
        categories[categoryName].items = data;
        populate(categories[categoryName], 48);
      });
    });
  } else {
    // otherwise just populate the html
    populate(categories[categoryName], 48);
  }

}

// populate the window with new products
function populate(category, total) {
  for (var i = 0; i < total; i ++) {
    var product = getRandomProduct(category);
    var html = template(product);
    container.append(html);
  }

  // set up lazy loading
  $(window).bind('scroll', bindScroll);

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
function getRandomProduct(category){

  var item = category.items[Math.floor(Math.random()*category.items.length)];
  var image = category.images[Math.floor(Math.random()*category.images.length)];

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
    pd: item.pd
  }
}

// lazy loading
function bindScroll(){
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $(window).unbind('scroll');
    populate(categories[currentCategory], 16);
  }
}

// category switching event handler
$('.sidebar-nav a').click(function(e){
  currentCategory = $(this).data('cat');
  switchCategory(currentCategory);
});

// hide failed images
$('.product img').on('error', function(e){
  console.log('error');
});

// load the default category on page load
switchCategory(currentCategory);


console.log('hello world')

// var prompt = prompt('Whats your name?');

// console.log(prompt)

// if (8 > 9) {
//   console.log('yes 10 is greater than 9')
// } else {
//   console.log('This is false')
// }


//  var age = prompt('How old are you?');

//  if (age < 18 && typeof age === "string") {
//   alert('You are a minor!')
// } else if (age >= 18 && age <= 60) {
//   alert('You are an adult!')
// } else {
//   alert('DAMN YOUR OLD ASF')
// }

function areYouOldEnough (age) {
  var age = prompt('How old are you?');

  if (age < 18 && typeof age === "string") {
    alert('You are a minor!')
  } else if (age >= 18 && age <= 60) {
    alert('You are an adult!')
  } else {
    alert('DAMN YOUR OLD ASF')
  }
}



function introduction(name, age,location) {
 console.log(name)
 console.log(age)
 console.log(location)
console.log('My name is ' + name + 'my age is ' + age + ' I live in ' + location)
}

introduction('bob ',21 ,'NYC')

 function Uploadandidentifyplantid() {
  // get the photo from the input button
  var photoInput = document.getElementById('photoInput');
  console.log(photoInput); 
  console.log(photoInput.files[0]);

  // if no photo is selected was slelected let the user know
  if (photoInput.files.length === 0) {
    alert('upload a photo');
  return

  }

var selectedFile = photoInput.files[0];

  var Reader = new FileReader();

// Set up event handeler when the submit button is clicked to read the file and set up the API call
  Reader.onload = function (e){
    // Store image in a var
   var base64image = e.target.result;
  console.log(base64image);

    // Create variables for api call
    var apikey = 'MsyfBz4bd54Pa6GTQCvcnwrtU1TG7ULrSDFAeJZSiCklzEBpaA';
    var latitude = 49.207;
    var longitude = 16.608
    var health = 'all';
    var SimliarImages = true;
    var details = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause';
    var language = 'en';
    var apiPLANTIDurl = `https://plant.id/api/v3/identification?details=${details}&language=${language}`;
  }
// Make our first api call to the plant id data base
axios.post(
  apiPLANTIDurl,
  {
    images: [base64image],
   latitude: latitude,
   longitude: longitude,
   health: health,
  SimliarImages: SimliarImages
  },
    {
      headers: {
       'Api-key': apikey, 
        'Content-Type' : 'application/json'
      }
    }  
  )
 } 

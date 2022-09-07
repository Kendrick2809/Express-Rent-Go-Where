require("dotenv").config();
const mongoose = require("mongoose");
const Location = require("../models/locations");

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}`;
const dbName = `${process.env.DB_NAME}`

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,dbName: dbName  } )
  .then(() => {
    console.log("Mongo connection is working");
  })
  .catch((err) => {
    console.log("error conneting to db: ", err);
  });

//some locations first... to include seeding syntax
const seedLocation = [{
    areaName: "Jurong East",
    region: "west",
    properties: []	
},
{
    areaName: "Bukit Batok	",
    region: "west",
    properties: []	
},
{
    areaName: "Bukit Gombak	",
    region: "west",
    properties: []	
},
{
    areaName: "Choa Chu Kang",
    region: "west",
    properties: []	
},
{
    areaName: "Yew Tee	",
    region: "west",
    properties: []	
},
{
    areaName: "Kranji",
    region: "west",
    properties: []	
}]

const seedDB = async () => {
    await Location.deleteMany({});
    await Location.insertMany(seedLocation);
    console.log('seeding done')
  };
  
  seedDB().then(() => {
    mongoose.connection.close();
    console.log('closing connection')
  });
  
// Marsiling		
// Woodlands		
// Admiralty		
// Sembawang		
// Canberra		
// Yishun		
// Khatib		
// Yio Chu Kang		
// Ang Mo Kio		
// Bishan		
// Braddell		
// Toa Payoh		
// Novena		
// Newton		
// Orchard		
// Somerset		
// Dhoby Ghaut		
// City Hall		
// Raffles Place		
// Marina Bay		
// Marina South Pier		
// Pasir Ris	
// Tampines	
// Simei	
// Tanah Merah	
// Bedok	
// Kembangan	
// Eunos	
// Paya Lebar	
// Aljunied	
// Kallang	
// Lavender	
// Bugis	
// City Hall	
// Raffles Place	
// Tanjong Pagar	
// Outram Park	
// Tiong Bahru	
// Redhill	
// Queenstown	
// Commonwealth	
// Buona Vista	
// Dover	
// Clementi	
// Jurong East	
// Chinese Garden	
// Lakeside	
// Boon Lay	
// Pioneer	
// Joo Koon	
// Gul Circle	
// Tuas Crescent	
// Tuas West Road	
// Tuas Link	
// Expo	
// Changi Airport	
// HarbourFront	
// Outram Park	
// Chinatown	
// Clark Quay	
// Dhoby Ghaut	
// Little India	
// Farrer Park	
// Boon Keng	
// Potong Pasir	
// Woodleigh	
// Serangoon	
// Kovan	
// Hougang	
// Buangkok	
// Sengkang	
// Punggol	
// Dhoby Ghaut	
// Bras Basah	
// Esplanade	
// Promenade	
// Nicoll Highway	
// Stadium	
// Mountbatten	
// Dakota	
// EW8	Paya Lebar	
// MacPherson	
// Tai Seng	
// Bartley	
// Serangoon	
// Lorong Chuan	
// Bishan	
// Marymount	
// Caldecott	
// Botanic Gardens	
// Farrer Road	
// Holland Village	
// Buona Vista	
// one-north	
// Kent Ridge	
// Haw Par Villa	
// Pasir Panjang	
// Labrador Park	
// Telok Blangah	
// HarbourFront	
// Bayfront	 
// Marina Bay	 
// Bukit Panjang	
// Cashew	
// Hillview	
// ty World	
//  Albert Park	
// h Avenue	
// Kah Kee	
// Botanic Gardens	
// Stevens	
// Newton	
// Little India	
// Rochor	
// Bugis	
// Promenade	
// Bayfront	
// Downtown	
// Telok Ayer	
// Chinatown	
// Fort Canning	
// Bencoolen	
// Jalan Besar	
// Bendemeer	
// Geylang Bahru	
// Mattar	
// MacPherson	
// Ubi	
// Kaki Bukit	
// Bedok North	
// Bedok Reservoir	
// Tampines West	
// Tampines	
// Tampines East	
// Upper Changi	
// Expo	
// Woodlands North	
// Woodlands	
// Woodlands South	
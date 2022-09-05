require("dotenv").config();
const mongoose = require("mongoose");
const Nationality = require("../models/nationalitys");

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

const seedNationality = [{
    nationality: 'Brunei'
},
{
    nationality: 'Cambodian'
},
{
    nationality: 'Indonesian'
},
{
    nationality: 'Laos'
},
{
    nationality: 'Malaysian'
},
{
    nationality: 'Myanmar'
},
{
    nationality: 'Philippines'
},
{
    nationality: 'Singaporean'
},
{
    nationality: 'Thailand'
},
{
    nationality: 'Vietnamese'
}
]

const seedDB = async () => {
    await Nationality.deleteMany({});
    await Nationality.insertMany(seedNationality);
    console.log('seeding done')
  };
  
  seedDB().then(() => {
    mongoose.connection.close();
    console.log('closing connection')
  });
require("dotenv").config();
const mongoose = require("mongoose");
const Homes = require("../models/homes");

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}`;
const dbName = `${process.env.DB_NAME}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName,
  })
  .then(() => {
    console.log("Mongo connection is working");
  })
  .catch((err) => {
    console.log("error conneting to db: ", err);
  });

const homeData = [
  {
    address: "Mountbatten Rd D15",
    rooms: "5 Beds",
    year: "2016 Freehold",
    price: "$20,000/mo",
    bathrooms: "6 Baths",
    sqf_list: "5,000 sqft / 464.51 sqm",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/20657240/UPHO.87905811.V800/Miro-Newton-Novena-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821974.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23345533/UPHO.126821942.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23345533/UPHO.126821973.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.133232977.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "65 Lloyd Rd ¬∑ D9",
    rooms: "2 Beds",
    year: "2017 ¬∑ Freehold",
    price: "$9,500/mo",
    bathrooms: "3 Baths",
    sqf_list: "1,808 sqft / 167.97 sqm",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821968.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984918.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984918.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984922.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984923.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984927.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "156 Mariam Way ¬∑ D17",
    rooms: "2 Beds",
    year: "2000 ¬∑ Freehold",
    price: "$4,250/mo",
    bathrooms: "2 Baths",
    sqf_list: "990 sqft / 91.97 sqm",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.137208595.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23234801/UPHO.137208584.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23234801/UPHO.125406024.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.125406034.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/5112/ZPPHO.96888382.R550X550/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
    ],
  },
];

const seedDB = async () => {
  await Homes.deleteMany({});
  await Homes.insertMany(homeData);
  console.log("seeding done");
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("closing connection");
});

const homeModel = require('../models/homes')

module.exports = {
    homepage: (req, res) => {
        try {
            res.send('this is the homepage')
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to display homepage'})
        }
    }

    , indexProperties: async (req, res) => {
        let properties = []
        
        try {
            properties = await homeModel.find({})
            // console.log(properties)
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to return indexProperties'})            
            
        }

        return res.json(properties)
    }

}
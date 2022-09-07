

module.exports = {
    homepage: (req, res) => {
        try {
            res.send('this is the homepage')
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to display homepage'})
        }
    },

    indexProperties: async (req, res) => {
        let properties = []
        
        try {
            properties = await 
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to return indexProperties'})            
            
        }
    }

}
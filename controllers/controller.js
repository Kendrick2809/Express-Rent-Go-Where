

module.exports = {
    homepage: (req, res) => {
        try {
            res.send('this is the homepage')
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to display homepage'})
        }
    },

    call: (req, res) => {
        try {
            res.send('call')
        } catch (err) {
            res.status(500)
            return res.json({error: 'failed to display call'})
        }
    }

}
const getTaks = require('../database/queries/getTasks')

const fetchTask = (req, res) => {
    const { id } = req.params;

    return getTaks(id)
        .then(response => res.json(response.rows))
        .catch(() => res.status(500).json({ message: 'server error' }))

}
module.exports = fetchTask;
const handleProfileGet = (req, res,db) => {
    const { id } = req.params;


    db.select('*').from('users').where({ id: id }).then(user => {

        if (user.length) {
            console.log(user[0]);
             res.json(user[0]);
        } else {
            res.status(404).json("not found")
        }

    }).catch(err => res.status(400).json('error getting user'));


}

module.exports= {
handleProfileGet
};
const User = require("../models/User");

// Create
function Create(req, res, next) {
  const user = new User(req.body);
  user
    .save()
    .then((response) => res.status(201).json(response))
    .catch((error) => next(error));
}

// Read
function Read(req, res) {
  User.find().then((users) => res.send(users));
}

// Read by Id
function ReadById(req, res) {
  User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((_) => {
      res.status(404).json({
        id: req.params.id,
        message: "id not found",
      });
    });
}

// Update
function Update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  }).then((response) => res.json(response));
}

// Delete
function Delete(req, res) {
  User.findByIdAndDelete(req.params.id).then((_) => res.status(204).send());
}

module.exports = {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
};

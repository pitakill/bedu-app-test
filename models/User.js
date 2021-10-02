const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Non Binary", "Not inform"],
    },
  },
  { timestamps: true }
);

Schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  },
});

const User = mongoose.model("User", Schema);

// class User {
//   constructor(id, name, address) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//   }
//
//   save() {
//     // Save to database
//   }
// }

module.exports = User;

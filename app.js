const express = require("express");
const User = require("./user");

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// app.get("/users/:id", getUser, (req, res) => {
//   res.json(res.user);
// });

// Create a new user
// app.post("/users", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Update a user
// app.patch("/users/:id", getUser, async (req, res) => {
//   if (req.body.name != null) {
//     res.user.name = req.body.name;
//   }

//   if (req.body.email != null) {
//     res.user.email = req.body.email;
//   }

//   if (req.body.password != null) {
//     res.user.password = req.body.password;
//   }

//   try {
//     const updatedUser = await res.user.save();
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Delete a user
// app.delete("/users/:id", getUser, async (req, res) => {
//   try {
//     await res.user.remove();
//     res.json({ message: "User deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Middleware function to get a single user by ID
// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot find user" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.user = user;
//   next();
// }

// Middleware function to get a single user by ID
// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot find user" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.user = user;
//   next();
// }



app.listen(3003, () => console.log("Server started ..."));

const apiRouter = require("express").Router();
const userController = require("./controllers/userController");
const cors = require("cors");

apiRouter.use(cors());

apiRouter.get("/", (req, res) =>
  res.json(
    "Hello, if you see this message that means your backend is up and running successfully. Congrats! "
  )
);
// apiRouter.post("/login", userController.apiLogin);
apiRouter.post("/register", userController.apiRegister);

module.exports = apiRouter;

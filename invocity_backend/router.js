const apiRouter = require("express").Router();
const userController = require("./controllers/userController");

const cors = require("cors");

apiRouter.use(cors());

apiRouter.get("/", (req, res) =>
  res.json(
    "Hello, if you see this message that means your backend is up and running successfully. Congrats! "
  )
);
apiRouter.post("/checkToken", userController.checkToken);
apiRouter.post("/login", userController.apiLogin);
apiRouter.post("/register", userController.register);

// apiRouter.post("/ifUserExists/:phoneNumber", userController.ifUserExists);

module.exports = apiRouter;

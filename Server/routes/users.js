import express from "express";
import{getUsers,createUsers,deleteUser,updateUser,getUser} from "../controllers/users.js"

const router = express.Router();
router.get("/users", getUsers)

router.post("/user", createUsers)
router.get("/user/:id", getUser)

router.delete("/user/:id", deleteUser)
router.put("/user/:id", updateUser)



export default router;
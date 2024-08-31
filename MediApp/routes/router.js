import { express } from "express";

let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("Hi!");
        res.status(200).json({message: "hi!"});
    }
);

export default router;
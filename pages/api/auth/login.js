import connectBb from "../../../utils/connectBb";
import Users from "../../../models/userModel";
import bcrypt from "bcrypt";
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken"

connectBb();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user)return res.status(400).json({ err: "Sai email." });
    const isMatch =  await bcrypt.compare(password, user.password) 
    if(!isMatch)  return res.status(400).json({ err: "Sai password." });
    const access_token = createAccessToken({id: user._id})
    const refresh_token = createRefreshToken({id: user._id})


    res.json({ msg: "Login Success!",
    access_token,
    refresh_token,
    user: {
        name: user.name,
        email:user.email,
        role: user.role,
        avartar: user.avartar,
        root: user.root,
    }
}) 
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

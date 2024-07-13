import { SHA256 as sha256 } from "crypto-js";
// import prisma client
import prisma from "../../../lib/prisma";
import hashPassword from "./user/create";

export default async function handle(req, res) {
  if (req.method === "POST") {
    //login uer
    await loginUserHandler(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function loginUserHandler(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid inputs" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        // image: true,
      },
    });

    if (user && user.password === hashPassword(password)) {
      // exclude password from json response
      return res.status(200).json(exclude(user, ["password"]));
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

const hashPassword = (string) => {
  return sha256(string).toString();
};

// Function to exclude user password returned from prisma
function exclude(user, keys) {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
import { SHA256 as sha256 } from "crypto-js";
// We impot our prisma client
import prisma from "../../../lib/prisma";
// Prisma will help handle and catch errors
import { Prisma } from "@prisma/client";

export default async function handle(req, res) {
  // Set CORS headers manually
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    // Preflight request response
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    // create user
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}
// We hash the user entered password using crypto.js
export const hashPassword = (string) => {
  return sha256(string).toString();
};
// function to create user in our database
async function createUserHandler(req, res) {
  let errors = [];
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    errors.push("invalid inputs");
    return res.status(400).json({ status: 400, errors });
  }

  if (password.length < 6) {
    errors.push("password length should be more than 6 characters");
    return res.status(400).json({ errors });
  }

  try {
    const user = await prisma.user.create({
      data: { ...req.body, password: hashPassword(req.body.password) },
    });
    // console.log(user);
    // return res.status(201).json({ user });
    return user ? { ...user } : null;
  } catch (e) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(400).json({ message: e.message }); // Send specific error message
      }
      return res.status(400).json({ message: e.message }); // Send generic error message
    }
    return res.status(500).json({ message: "Internal Server Error" }); // Handle unexpected errors
  }
}

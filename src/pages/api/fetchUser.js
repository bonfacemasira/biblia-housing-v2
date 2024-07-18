import prisma from "@/lib/prisma";

export default async function handler(res) {
  const user = await prisma.user.findFirst({
    where: {
      email: "bonface@gmail.com",
    },
  });

  res.json(user);
}

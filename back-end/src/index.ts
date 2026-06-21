import "dotenv/config";
import { prisma } from "../lib/prisma";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* async function main() {
  // Create a new user with a post
  const hero = await prisma.hero.create({
    data: {
      heroTitle: "Alice",
      heroSubTitle: "alice@prisma.io",
      heroDescr: "Lorem....",
    },
  });
  console.log("Created hero:", hero);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
 */

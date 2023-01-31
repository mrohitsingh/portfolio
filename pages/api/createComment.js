import sanityClient from "@sanity/client";
import { client } from "./../../lib/sanity";

// const config = {
//   dataset: "production",
//   projectId: "fgjlw1up",
//   useCdn: true,
// };

// const client = sanityClient(config);

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "comment",
      blog: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Comment submitted successfully" });
}

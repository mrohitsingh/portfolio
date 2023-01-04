import sanityClient from "@sanity/client";

const config = {
  dataset: "production",
  projectId: "fgjlw1up",
  useCdn: true,
  token:
    "skeSVWZZMz2NRrrfgIplBMFPm4Or2VfoT7zMeefpwzwY0m35FdG0OTPYKv6XvtoOGY4u3Vj8YIxmb2vMFDL1E7cWQICpZpn3iAPlxS1JXxuU2rCDn5gIJTCa42YN0px7Pm3PCUosrBRqRDiaboTCzzFg8XszxA2wlTWO5OE7DPEasZav5FxT",
};

const client = sanityClient(config);

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
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

  console.log("Comment submitted successfully");

  res.status(200).json({ message: "Comment submitted successfully" });
}

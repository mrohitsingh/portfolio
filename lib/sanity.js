import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fgjlw1up",
  dataset: "production",
  apiVersion: "2021-08-31",
  token:
    "skeSVWZZMz2NRrrfgIplBMFPm4Or2VfoT7zMeefpwzwY0m35FdG0OTPYKv6XvtoOGY4u3Vj8YIxmb2vMFDL1E7cWQICpZpn3iAPlxS1JXxuU2rCDn5gIJTCa42YN0px7Pm3PCUosrBRqRDiaboTCzzFg8XszxA2wlTWO5OE7DPEasZav5FxT",
  useCdn: true,
});

export const incrementViews = async (id) => {
  const query = `*[_id == "${id}"]{_id, views}`;
  const currentDoc = await Client.fetch(query);
  const updatedViews = currentDoc[0].views + 1;
  const patch = [
    {
      id: currentDoc[0]._id,
      set: { views: updatedViews },
    },
  ];
  await Client.patch(patch);
};

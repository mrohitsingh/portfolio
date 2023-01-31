import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fgjlw1up",
  dataset: "production",
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

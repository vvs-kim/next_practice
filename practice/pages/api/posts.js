export const getPhotosFromDB = () => {
  // DB Query 로직
  const posts = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ];
  return posts;
};

export default function photosHandler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const posts = getPhotosFromDB();
    return response.status(200).json({
      posts,
    });
  }
}

import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <p className="text-black">Post: {id}</p>;
};

export default Post;

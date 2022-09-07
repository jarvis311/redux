
import { useSelector } from "react-redux";
import { selectAllUser } from "./users/userSlice";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUser)

    const author = users.find(user => user.userId == userId);

    return <span>by {author ? author.username : 'Unknown author'}</span>
}
export default PostAuthor
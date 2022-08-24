import { AiFillAlert } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export const Posts = () => {
        return <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }}>
            <AiFillAlert/>
            <AiOutlineGithub/>
        </button>
}
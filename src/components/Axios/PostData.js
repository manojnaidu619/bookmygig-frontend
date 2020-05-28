import axios from 'axios'

const PostData = (data) => (
    axios.post('http://localhost:5000/creator', data)
)

export default PostData
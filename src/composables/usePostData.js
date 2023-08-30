import { ref, onMounted } from 'vue';
import axios from 'axios';


export function usePostData(postId) {
  const post = ref({});
  const comments = ref([]);
  const postImage = ref('');

  onMounted(async () => {
    try {
      console.log('Fetching post:', postId);

      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=5`),
      ]);

      console.log('Post data:', postResponse.data);
      console.log('Comments data:', commentsResponse.data);

      post.value = postResponse.data;
      comments.value = commentsResponse.data;

      // Получаем URL случайного изображения из API Lorem Picsum
      const response = await axios.get('https://picsum.photos/800/600');
      postImage.value = response.request.responseURL;
    } catch (error) {
      console.error('Помилка при отриманні даних з API:', error);
    }
  });

  return { post, comments, postImage };
}

export function usePostsData() {
  const posts = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data.slice(0, 10);
    } catch (error) {
      console.error('Помилка при отриманні даних з API:', error);
    }
  };

  return { posts, fetchPosts };
}
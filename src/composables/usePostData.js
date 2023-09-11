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
  const totalPages = ref(0);
  const currentPage = ref(1); 
  const limit = ref(10); 

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage.value}&_limit=${limit.value}`);
      posts.value = response.data;

      const totalPostsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      totalPages.value = Math.ceil(totalPostsResponse.data.length / limit.value);
    } catch (error) {
      console.error('Помилка при отриманні даних з API:', error);
    }
  };

  const changePage = (newPage) => {
    currentPage.value = newPage;
    fetchPosts();
  };

  onMounted(() => {
    fetchPosts();
  });

  return { posts, totalPages, currentPage, changePage, limit };
}


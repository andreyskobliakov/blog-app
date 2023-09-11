<template>
    <div class="pagination m-10 flex justify-center mt-4">
      <button
        @click="changePage(page - 1)"
        :disabled="page === 1"
        class="px-3 py-1 bg-blue-500 text-white rounded-l hover:bg-blue-600"
      >
        Previous
      </button>
      <span class="px-3 py-1 bg-gray-200">{{ page }} of {{ totalPages }}</span>
      <button
        @click="changePage(page + 1)"
        :disabled="page === totalPages"
        class="px-3 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      page: Number,
      totalPages: Number
    },
    setup(props, { emit }) {
      const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= props.totalPages) {
          emit('page-change', newPage);
        }
      };
  
      return {
        changePage
      };
    }
  };
  </script>
  
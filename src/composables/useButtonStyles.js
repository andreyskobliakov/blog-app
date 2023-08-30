import { ref } from 'vue';

export function useButtonStyles(props) {
  const buttonClasses = ref({
    'px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform hover:bg-blue-400': true,
    'bg-blue-500 hover:bg-blue-600 border border-blue-500 text-white': props.type === 'primary',
    'bg-gray-500 hover:bg-gray-600 border border-gray-500 text-white': props.type === 'secondary',
    'bg-red-500 hover:bg-red-600 border border-red-500 text-white': props.type === 'danger',
  });

  return { buttonClasses };
}

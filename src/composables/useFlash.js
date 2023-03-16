import swal from 'sweetalert';

export function useFlash() {
  const flash = (title, message, level = 'success') => {
    return swal(title, message, level);
  }

  return {flash};
}

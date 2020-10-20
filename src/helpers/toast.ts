const toast = (message: string, duration = 2000): Promise<void> => {
  const toast = document.createElement('ion-toast');
  toast.message = message;
  toast.duration = duration;

  document.body.appendChild(toast);
  return toast.present();
};

export default toast;

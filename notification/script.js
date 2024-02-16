(async () => {
  const button = document.querySelector(".button");

  let promise = await Notification.requestPermission();
  button.addEventListener("click", function () {
    const greeting = new Notification("hello world", {
      body: "this is new notification",
      icon: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      vibrate: true,
    });
  });
})();

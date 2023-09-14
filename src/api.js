export const getComments = async () => {
	return [
		{
			id: "1",
			body: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			username: "amyrobson",
			userId: "1",
			parentId: null,
			image: {
				png: "./images/avatars/image-amyrobson.png",
				webp: "./images/avatars/image-amyrobson.webp",
			},
			score: 4,
			createdAt: "2021-08-16T23:00:33.010+02:00",
		},
		{
			id: "2",
			body: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
			username: "John",
			userId: "2",
			parentId: null,
			image: {
				png: "./images/avatars/image-maxblagun.png",
				webp: "./images/avatars/image-maxblagun.webp",
			},
			score: 2,
			createdAt: "2021-08-16T23:00:33.010+02:00",
		},
		{
			id: "3",
			body: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
			username: "John",
			userId: "2",
			parentId: "2",
			image: {
				png: "./images/avatars/image-ramsesmiron.png",
				webp: "./images/avatars/image-ramsesmiron.webp",
			},
			score: 2,
			createdAt: "2021-08-16T23:00:33.010+02:00",
		},
		{
			id: "4",
			body: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
			username: "John",
			userId: "2",
			parentId: "2",
			image: {
				png: "./images/avatars/image-juliusomo.png",
				webp: "./images/avatars/image-juliusomo.webp",
			},
			score: 1,
			createdAt: "2021-08-16T23:00:33.010+02:00",
		},
	];
};

export const createComment = async (text, parentId = null) => {
	return {
		id: Math.random().toString(36).substr(2, 9),
		body: text,
		parentId,
		userId: "1",
		score: 0,
		username: "Juliusomo",
		createdAt: new Date().toISOString(),
		image: {
			png: "./images/avatars/image-juliusomo.png",
			webp: "./images/avatars/image-juliusomo.webp",
		},
	};
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};

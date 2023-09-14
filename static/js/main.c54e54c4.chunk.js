(this["webpackJsonpmonsterlessons-academy"] =
	this["webpackJsonpmonsterlessons-academy"] || []).push([
	[0],
	{
		17: function (e, t, n) {},
		18: function (e, t, n) {
			"use strict";
			n.r(t);
			var a,
				r,
				c,
				s,
				i = n(1),
				o = n.n(i),
				m = n(10),
				u = n.n(m),
				l = n(9),
				d = n(11),
				b = n(5),
				h = n(0),
				j = function (e) {
					var t = e.handleSubmit,
						n = e.submitLabel,
						a = e.hasCancelButton,
						r = void 0 !== a && a,
						c = e.handleCancel,
						s = e.initialText,
						o = void 0 === s ? "" : s,
						m = e.image,
						u = Object(i.useState)(o),
						l = Object(b.a)(u, 2),
						d = l[0],
						j = l[1],
						p = 0 === d.length;
					return Object(h.jsxs)("form", {
						onSubmit: function (e) {
							e.preventDefault(), t(d), j("");
						},
						className: m ? "image-form" : "",
						children: [
							m &&
								Object(h.jsx)("img", {
									height: "35",
									width: "35",
									src: "/images/avatars/image-juliusomo.png",
								}),
							Object(h.jsx)("textarea", {
								className: "comment-form-textarea",
								placeholder: "Add a comment...",
								value: d,
								onChange: function (e) {
									return j(e.target.value);
								},
							}),
							Object(h.jsx)("button", {
								className: "comment-form-button",
								disabled: p,
								children: n,
							}),
							r &&
								Object(h.jsx)("button", {
									type: "button",
									className: "comment-form-button comment-form-cancel-button",
									onClick: c,
									children: "Cancel",
								}),
						],
					});
				},
				p = function e(t) {
					var n = t.comment,
						a = t.replies,
						r = t.setActiveComment,
						c = t.activeComment,
						s = t.updateComment,
						i = t.deleteComment,
						o = t.addComment,
						m = t.parentId,
						u = void 0 === m ? null : m,
						l = t.currentUserId,
						d = c && c.id === n.id && "editing" === c.type,
						b = c && c.id === n.id && "replying" === c.type,
						p = new Date() - new Date(n.createdAt) > 3e5,
						g = l === n.userId && 0 === a.length && !p,
						v = Boolean(l),
						f = l === n.userId && !p,
						w = u || n.id,
						O = new Date(n.createdAt).toLocaleDateString();
					return Object(h.jsxs)(h.Fragment, {
						children: [
							Object(h.jsxs)(
								"div",
								{
									className: "comment",
									children: [
										Object(h.jsxs)("div", {
											className: "comment-image-container",
											children: [
												Object(h.jsxs)("div", {
													className: "plus-minus-container",
													children: [
														Object(h.jsx)("svg", {
															width: "11",
															height: "11",
															xmlns: "http://www.w3.org/2000/svg",
															children: Object(h.jsx)("path", {
																d: "M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",
																fill: "#C5C6EF",
															}),
														}),
														n.score,
														Object(h.jsx)("svg", {
															width: "11",
															height: "3",
															xmlns: "http://www.w3.org/2000/svg",
															children: Object(h.jsx)("path", {
																d: "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",
																fill: "#C5C6EF",
															}),
														}),
													],
												}),
												Object(h.jsx)("img", { src: n.image.png }),
											],
										}),
										Object(h.jsxs)("div", {
											className: "comment-right-part",
											children: [
												Object(h.jsxs)("div", {
													className: "comment-content",
													children: [
														Object(h.jsx)("div", {
															className: "comment-author",
															children: n.username,
														}),
														Object(h.jsx)("div", { children: O }),
														Object(h.jsxs)("div", {
															className: "comment-actions",
															children: [
																v &&
																	Object(h.jsxs)("div", {
																		className: "comment-action",
																		onClick: function () {
																			return r({ id: n.id, type: "replying" });
																		},
																		children: [
																			Object(h.jsx)("svg", {
																				width: "14",
																				height: "13",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: Object(h.jsx)("path", {
																					d: "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z",
																					fill: "#5357B6",
																				}),
																			}),
																			" ",
																			"Reply",
																		],
																	}),
																f &&
																	Object(h.jsxs)("div", {
																		className: "comment-action",
																		onClick: function () {
																			return r({ id: n.id, type: "editing" });
																		},
																		children: [
																			Object(h.jsx)("svg", {
																				width: "14",
																				height: "14",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: Object(h.jsx)("path", {
																					d: "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z",
																					fill: "#5357B6",
																				}),
																			}),
																			"Edit",
																		],
																	}),
																g &&
																	Object(h.jsxs)("div", {
																		className: "comment-action",
																		onClick: function () {
																			return i(n.id);
																		},
																		children: [
																			Object(h.jsx)("svg", {
																				width: "12",
																				height: "14",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: Object(h.jsx)("path", {
																					d: "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z",
																					fill: "#ED6368",
																				}),
																			}),
																			" ",
																			"Delete",
																		],
																	}),
															],
														}),
													],
												}),
												!d &&
													Object(h.jsx)("div", {
														className: "comment-text",
														children: n.body,
													}),
											],
										}),
									],
								},
								n.id
							),
							d &&
								Object(h.jsx)(j, {
									submitLabel: "Update",
									hasCancelButton: !0,
									initialText: n.body,
									handleSubmit: function (e) {
										return s(e, n.id);
									},
									handleCancel: function () {
										r(null);
									},
								}),
							b &&
								Object(h.jsx)(j, {
									submitLabel: "Reply",
									handleSubmit: function (e) {
										return o(e, w);
									},
								}),
							a.length > 0 &&
								Object(h.jsx)("div", {
									className: "replies",
									children: a.map(function (t) {
										return Object(h.jsx)(
											e,
											{
												comment: t,
												setActiveComment: r,
												activeComment: c,
												updateComment: s,
												deleteComment: i,
												addComment: o,
												parentId: n.id,
												replies: [],
												currentUserId: l,
											},
											t.id
										);
									}),
								}),
						],
					});
				},
				g = n(2),
				v = n(6),
				f = function (e) {
					e.commentsUrl;
					var t = e.currentUserId,
						n = Object(i.useState)([]),
						o = Object(b.a)(n, 2),
						m = o[0],
						u = o[1],
						f = Object(i.useState)(null),
						w = Object(b.a)(f, 2),
						O = w[0],
						x = w[1],
						y = m.filter(function (e) {
							return null === e.parentId;
						}),
						C = function (e, t) {
							(function (e) {
								return (r =
									r ||
									Object(v.a)(
										Object(g.a)().mark(function e(t) {
											var n,
												a = arguments;
											return Object(g.a)().wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n =
																	a.length > 1 && void 0 !== a[1]
																		? a[1]
																		: null),
																e.abrupt("return", {
																	id: Math.random().toString(36).substr(2, 9),
																	body: t,
																	parentId: n,
																	userId: "1",
																	score: 0,
																	username: "Juliusomo",
																	createdAt: new Date().toISOString(),
																	image: {
																		png: "./images/avatars/image-juliusomo.png",
																		webp: "./images/avatars/image-juliusomo.webp",
																	},
																})
															);
														case 2:
														case "end":
															return e.stop();
													}
											}, e);
										})
									)).apply(this, arguments);
							})(e, t).then(function (e) {
								u([e].concat(Object(d.a)(m))), x(null);
							});
						},
						I = function (e, t, n) {
							(function (e) {
								return (c =
									c ||
									Object(v.a)(
										Object(g.a)().mark(function e(t) {
											return Object(g.a)().wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", { text: t });
														case 1:
														case "end":
															return e.stop();
													}
											}, e);
										})
									)).apply(this, arguments);
							})(e).then(function () {
								var a = m.map(function (a) {
									return a.id === t
										? Object(l.a)(Object(l.a)({}, a), {}, { body: e, image: n })
										: a;
								});
								u(a), x(null);
							});
						},
						k = function (e) {
							window.confirm("Are you sure you want to remove comment?") &&
								(function () {
									return (s =
										s ||
										Object(v.a)(
											Object(g.a)().mark(function e() {
												return Object(g.a)().wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt("return", {});
															case 1:
															case "end":
																return e.stop();
														}
												}, e);
											})
										)).apply(this, arguments);
								})().then(function () {
									var t = m.filter(function (t) {
										return t.id !== e;
									});
									u(t);
								});
						};
					return (
						Object(i.useEffect)(function () {
							(function () {
								return (a =
									a ||
									Object(v.a)(
										Object(g.a)().mark(function e() {
											return Object(g.a)().wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", [
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
															]);
														case 1:
														case "end":
															return e.stop();
													}
											}, e);
										})
									)).apply(this, arguments);
							})().then(function (e) {
								u(e);
							});
						}, []),
						Object(h.jsxs)("div", {
							className: "comments",
							children: [
								Object(h.jsx)("div", {
									className: "comments-container",
									children: y.map(function (e) {
										return Object(h.jsx)(
											p,
											{
												comment: e,
												replies:
													((n = e.id),
													m
														.filter(function (e) {
															return e.parentId === n;
														})
														.sort(function (e, t) {
															return (
																new Date(e.createdAt).getTime() -
																new Date(t.createdAt).getTime()
															);
														})),
												activeComment: O,
												setActiveComment: x,
												addComment: C,
												deleteComment: k,
												updateComment: I,
												currentUserId: t,
											},
											e.id
										);
										var n;
									}),
								}),
								Object(h.jsx)(j, {
									submitLabel: "Write",
									handleSubmit: C,
									image: !0,
								}),
							],
						})
					);
				},
				w = function () {
					return Object(h.jsx)("div", {
						children: Object(h.jsx)(f, {
							commentsUrl: "http://localhost:3004/comments",
							currentUserId: "1",
						}),
					});
				};
			n(17);
			u.a.render(
				Object(h.jsx)(o.a.StrictMode, { children: Object(h.jsx)(w, {}) }),
				document.getElementById("root")
			);
		},
	},
	[[18, 1, 2]],
]);
//# sourceMappingURL=main.c54e54c4.chunk.js.map

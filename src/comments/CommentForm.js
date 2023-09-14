import { useState } from "react";

const CommentForm = ({
	handleSubmit,
	submitLabel,
	hasCancelButton = false,
	handleCancel,
	initialText = "",
	image,
}) => {
	const [text, setText] = useState(initialText);
	const isTextareaDisabled = text.length === 0;
	const onSubmit = (event) => {
		event.preventDefault();
		handleSubmit(text);
		setText("");
	};
	return (
		<form onSubmit={onSubmit} className={image ? "image-form" : ""}>
			{image && (
				<img height="35" width="35" src="/images/avatars/image-juliusomo.png" />
			)}
			<textarea
				className="comment-form-textarea"
				placeholder="Add a comment..."
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button className="comment-form-button" disabled={isTextareaDisabled}>
				{submitLabel}
			</button>
			{hasCancelButton && (
				<button
					type="button"
					className="comment-form-button comment-form-cancel-button"
					onClick={handleCancel}
				>
					Cancel
				</button>
			)}
		</form>
	);
};

export default CommentForm;

import React from "react";
import { useCurrentEditor } from "@tiptap/react";

const ToolBar = () => {
	const { editor } = useCurrentEditor();
	if (!editor) {
		return null;
	}
	return (
		<>
			<div className="flex space-x-2 border-b pb-2 mb-2">
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<b>B</b>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<i>I</i>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<s>S</s>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("codeBlock")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					<code>&lt;/&gt;</code>
				</button>
				<button
					onClick={() => editor.chain().focus().setBlockquote().run()}
					disabled={!editor.can().chain().focus().setBlockquote().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("blockquote")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					&quot;
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("paragraph")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					P
				</button>
				<button
					onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("heading", { level: 1 })
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					H1
				</button>
				<button
					onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("heading", { level: 2 })
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					H2
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("bulletList")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					•
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("orderedList")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					1.
				</button>
			</div>
		</>
	);
};

export default ToolBar;

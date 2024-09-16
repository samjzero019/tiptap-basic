import { useCurrentEditor, BubbleMenu } from "@tiptap/react";
import { useState } from "react";

const BubbleMenuPopUp = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const { editor } = useCurrentEditor();
	return (
		<>
			{editor && (
				<BubbleMenu
					editor={editor}
					tippyOptions={{ duration: 50, maxWidth: "fit-content" }}
				>
					<div className="bg-white border border-gray-300 rounded-lg shadow-md flex p-1 space-x-1 w-full">
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className={`px-3 py-1 text-sm`}
						>
							<div className="flex h-7 pr-1 justify-center items-center gap-0.5 hover:bg-gray-200 rounded">
								Heading
								<img
									src="/assets/editor/downArrowIcon.svg"
									className=""
									alt="BoldStyle Icon"
								/>
							</div>
						</button>

						{dropdownOpen && (
							<div className=" z-10 absolute left-0 mt-10 w-18  bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
								<ul className="mb-0 px-3 py-3 space-y-1 text-sm text-[#293269]">
									<li>
										<button
											onClick={() => {
												editor
													.chain()
													.focus()
													.toggleHeading({ level: 1 })
													.run();
												setDropdownOpen(false);
											}}
											className={`px-3 py-1 text-sm ${
												editor.isActive("heading", { level: 1 })
													? "bg-purple-100 italic"
													: ""
											} hover:bg-gray-200 rounded`}
										>
											H1
										</button>
									</li>
									<li>
										<button
											onClick={() => {
												editor
													.chain()
													.focus()
													.toggleHeading({ level: 2 })
													.run();
												setDropdownOpen(false);
											}}
											className={`px-3 py-1 text-sm ${
												editor.isActive("heading", { level: 2 })
													? "bg-purple-100 italic"
													: ""
											} hover:bg-gray-200 rounded`}
										>
											H2
										</button>
									</li>
									<li>
										<button
											onClick={() => {
												editor
													.chain()
													.focus()
													.toggleHeading({ level: 3 })
													.run();
												setDropdownOpen(false);
											}}
											className={`px-3 py-1 text-sm ${
												editor.isActive("heading", { level: 3 })
													? "bg-purple-100 italic"
													: ""
											} hover:bg-gray-200 rounded`}
										>
											H3
										</button>
									</li>
								</ul>
							</div>
						)}

						<button
							onClick={() => editor.chain().focus().toggleBold().run()}
							className={`px-2 py-1 text-sm ${
								editor.isActive("bold") ? "bg-purple-100 font-bold" : ""
							} hover:bg-gray-200 rounded`}
						>
							<img
								src="/assets/editor/boldIcon.svg"
								className=""
								alt="BoldStyle Icon"
							/>
						</button>

						<button
							onClick={() => editor.chain().focus().toggleBulletList().run()}
							className={`px-3 py-1 text-sm ${
								editor.isActive("bulletList") ? "is-active bg-purple-100" : ""
							} hover:bg-gray-200 rounded`}
						>
							<img
								src="/assets/editor/bulletListIcon.svg"
								className=""
								alt="BulletList Icon"
							/>
						</button>
						<button
							onClick={() => editor.chain().focus().toggleOrderedList().run()}
							className={`px-3 py-1 text-sm ${
								editor.isActive("ordered-list") ? "is-active bg-purple-100" : ""
							} hover:bg-gray-200 rounded`}
						>
							<img
								src="/assets/editor/numberListIcon.svg"
								className=""
								alt="NumberedList Icon"
							/>
						</button>
						<button
							onClick={() =>
								editor
									.chain()
									.focus()
									.insertContent(`Type Here!`, {
										parseOptions: {
											preserveWhitespace: false,
										},
									})
									.run()
							}
							className={`px-2 py-1 rounded ${
								editor.isActive("orderedList")
									? "bg-blue-500 text-white"
									: "bg-gray-200"
							}`}
						>
							+
						</button>
					</div>
				</BubbleMenu>
			)}
		</>
	);
};

export default BubbleMenuPopUp;

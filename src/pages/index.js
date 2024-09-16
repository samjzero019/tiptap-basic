import Image from "next/image";
import localFont from "next/font/local";
import Tiptap from "@/components/editor/tipTap";
import TiptapEditor from "@/components/editor/tipTapv2";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function Home() {
	return (
		<div className={`${geistSans.variable} ${geistMono.variable} `}>
			<main className="p-10 bg-red-100">
				{/* <Tiptap /> */}
				<TiptapEditor />
			</main>
		</div>
	);
}

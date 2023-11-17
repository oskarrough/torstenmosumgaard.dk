import { render, html } from "https://cdn.jsdelivr.net/npm/uhtml/+esm";

/**
 * Fetch images from Cloudinary
 * @returns {Promise<Array<Object>}
 */
async function model() {
	try {
		// const response = await fetch('https://torstenmosumgaard-api.vercel.app/api/images')
		const response = await fetch("./images.json");
		const transforms = "q_auto,f_auto,fl_awebp,c_lfill";
		const data = await response.json();
		return data.images.map((item) => {
			const id = `v${item.version}/${item.public_id}`;
			return {
				id,
				src: `https://res.cloudinary.com/torstenmosumgaard/image/upload/w_1440,${transforms}/${id}`,
				width: item.width,
				height: item.height,
			};
		});
	} catch (err) {
		console.log(err);
	}
}

const images = await model();
console.log(images);

const btn = document.querySelector("#ThemeSwitcher");
btn.addEventListener("click", () => {
	document.body.classList.toggle("theme-dark");
});

render(
	document.querySelector("#app"),
	html`
		<section class="Grid">
			${images.map(
				(item) => html`
			<figure style=${`aspect-ratio: ${item.height} / ${item.width}`}>
			<a href=${`https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_1440,c_lfill/${item.id}`}
				data-pswp-width=${item.width}
				data-pswp-height=${item.height}
			>
			<img alt=""
				data-sizes="auto"
				data-srcset=${`
					https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_1440,c_lfill/${item.id} 1024w,
					https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_640,c_lfill/${item.id} 640w,
					https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_320,c_lfill/${item.id} 320w
				`}
				class="lazyload"
				width=${item.width}
				height=${item.height}
			>
			</a>
			</figure>
		`
			)}
		</section>
	`
);

import PhotoSwipeLightbox from "https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "https://unpkg.com/photoswipe/dist/photoswipe.esm.js";

const pswp = new PhotoSwipeLightbox({
	gallery: "#app",
	children: "a",
	pswpModule: PhotoSwipe,
});
pswp.init();

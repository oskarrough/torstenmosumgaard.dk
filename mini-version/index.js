/*
	What we need to do

	get the data
	create minimal html
	enable gallery script

	<img alt=""
		data-sizes="auto"
		data-srcset="
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_1440,c_lfill/v1478906065/IMG_6292_ie44ac 1024w,
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_640,c_lfill/v1478906065/IMG_6292_ie44ac 640w,
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_320,c_lfill/v1478906065/IMG_6292_ie44ac 320w"
		class="lazyload"
		width="1224"
		height="1200">

	<img alt=""
		data-sizes="auto"
		data-srcset="
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_1440,c_lfill/v1478906065/2016-07-03_1286054112878041368_bsqirz 1024w,
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_640,c_lfill/v1478906065/2016-07-03_1286054112878041368_bsqirz 640w,
			https://res.cloudinary.com/torstenmosumgaard/image/upload/q_auto,f_auto,fl_awebp,w_320,c_lfill/v1478906065/2016-07-03_1286054112878041368_bsqirz 320w"
		class="lazyload"
		width="1080"
		height="1080">
		*/

// Fetch images from Cloudinary and return data in a way PhotoSwipe understands.
async function model() {
	const response = await fetch('https://keramik.now.sh')
	try {
		const transforms = 'q_auto,f_auto,fl_awebp,c_lfill'
		const data = await response.json()
		return data.resources.map(item => {
			const id = `v${item.version}/${item.public_id}`
			return {
				pid: item.public_id,
				src: `https://res.cloudinary.com/torstenmosumgaard/image/upload/w_1440,${transforms}/${id}`,
				msrc: `https://res.cloudinary.com/torstenmosumgaard/image/upload/w_320,${transforms}/${id}
					item.version
				}/${item.public_id}`,
				w: item.width,
				h: item.height
			}
		})
	} catch (err) {
		console.log(err)
	}
}

function gallery(items) {
	const options = {
		galleryPIDs: true,
		preload: [1, 3],
		escKey: false,
		closeEl: false,
		clickToCloseNonZoomable: false
	}
	const el = document.querySelectorAll('.pswp')[0]
	return new PhotoSwipe(el, PhotoSwipeUI_Default, items, options)
}

async function start() {
	const images = await model()
	const g = gallery(images)
	g.init()
}

start()

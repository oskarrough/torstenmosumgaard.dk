import Ember from 'ember';

export function cloudinaryUrl([id, ...rest]) {
  let width = 500;
  let quality = 'auto';

  if (rest[0]) {
    width = rest[0];
  }

  // We let Cloudinary decide the quality and format, prefering webp.
  // The "c_lfill" (limited fill) crop makes sure images are not upscaled.
  const transformations = `q_${quality},f_auto,fl_awebp,w_${width},c_lfill`;

  const url = `https://res.cloudinary.com/torstenmosumgaard/image/upload/${transformations}/v1478906065/${id}`;
  return [url];
}

export default Ember.Helper.helper(cloudinaryUrl);

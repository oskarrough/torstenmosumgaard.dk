import Ember from 'ember';

export function cloudinaryUrl(params/*, hash*/) {
  // console.log(params);
  const id = params[0];
  const transformations = `q_auto,f_auto,fl_awebp,w_500`;
  const url = `https://res.cloudinary.com/torstenmosumgaard/image/upload/${transformations}/v1478906065/${id}`;
  return [url];
}

export default Ember.Helper.helper(cloudinaryUrl);

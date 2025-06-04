import React from 'react';

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
      <div className="relative group cursor-pointer">
        <img alt="Man wearing red jacket and black cap looking sideways" className="w-full h-full object-cover" height="300"
             src="https://storage.googleapis.com/a1aa/image/0e4e54ac-1962-44bd-028f-020f41eef6b0.jpg" width="400"/>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-xs font-bold text-center py-3">
          Men's Fashion
        </div>
      </div>
      <div className="relative group cursor-pointer">
        <img alt="Flat lay of women's fashion accessories on white background" className="w-full h-full object-cover"
             height="300" src="https://storage.googleapis.com/a1aa/image/adc8829f-59db-4015-ade8-1ea8d80be014.jpg"
             width="400"/>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-xs font-bold text-center py-3">
          Women's Fashion
        </div>
      </div>
      <div className="relative group cursor-pointer">
        <img alt="Woman wearing pink skirt and white coat holding bag" className="w-full h-full object-cover" height="300"
             src="https://storage.googleapis.com/a1aa/image/6a7942de-3f53-4948-91fb-e4be696cd939.jpg" width="400"/>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-xs font-bold text-center py-3">
          Baby Fashion
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
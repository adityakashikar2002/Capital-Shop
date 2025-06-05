import React from 'react';

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
      {/* Men's Fashion Card */}
      <div className="relative group cursor-pointer overflow-hidden">
        <img
          alt="Man wearing red jacket and black cap looking sideways"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/0e4e54ac-1962-44bd-028f-020f41eef6b0.jpg"
          width="400"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black to-transparent text-white text-[20px] font-bold text-center py-3 transition-all duration-300 ease-in-out">
          <p className='m-6 transition-transform duration-300 ease-in-out group-hover:-translate-y-4'> {/* Added group-hover:-translate-y-4 */}
            Men's Fashion
          </p>
          {/* Shop Now button for Men's Fashion */}
          <p className='text-sm border-b-[2px] border-[#996515] text-[#eecb96] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 ease-in-out delay-150'> {/* Updated group-hover:-translate-y-4 */}
            Shop Now
          </p>
        </div>
      </div>

      {/* Women's Fashion Card */}
      <div className="relative group cursor-pointer overflow-hidden">
        <img
          alt="Flat lay of women's fashion accessories on white background"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/adc8829f-59db-4015-ade8-1ea8d80be014.jpg"
          width="400"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black to-transparent text-white text-[20px] font-bold text-center py-3 transition-all duration-300 ease-in-out">
          <p className='m-6 transition-transform duration-300 ease-in-out group-hover:-translate-y-4'> {/* Added group-hover:-translate-y-4 */}
            Women's Fashion
          </p>
          {/* Shop Now button for Women's Fashion */}
          <p className='text-sm border-b-[2px] border-[#996515] text-[#eecb96] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 ease-in-out delay-150'> {/* Updated group-hover:-translate-y-4 */}
            Shop Now
          </p>
        </div>
      </div>

      {/* Baby Fashion Card */}
      <div className="relative group cursor-pointer overflow-hidden">
        <img
          alt="Woman wearing pink skirt and white coat holding bag"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/6a7942de-3f53-4948-91fb-e4be696cd939.jpg"
          width="400"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black to-transparent text-white text-[20px] font-bold text-center py-3 transition-all duration-300 ease-in-out">
          <p className='m-6 transition-transform duration-300 ease-in-out group-hover:-translate-y-4'> {/* Added group-hover:-translate-y-4 */}
            Baby Fashion
          </p>
          {/* Shop Now button for Baby Fashion */}
          <p className='text-sm border-b-[2px] border-[#996515] text-[#eecb96] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 ease-in-out delay-150'> {/* Updated group-hover:-translate-y-4 */}
            Shop Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
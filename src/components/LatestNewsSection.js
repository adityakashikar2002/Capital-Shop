import React from 'react';

const LatestNewsSection = () => {
  return (
    <section className="py-10 max-w-full mx-auto px-4 bg-[#f8f8f8] font-sans">
      <h2 className="text-center text-sm font-semibold mb-12 text-gray-900 mt-6" style={{fontSize:'32px'}}>Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <article>
          <img alt="Red bottle with JENUN label on a red background" className="w-full object-cover" height="300"
               src="https://storage.googleapis.com/a1aa/image/df592c52-06e0-45df-5b09-bf2dd3c33a81.jpg" width="400"/>
          <p className="text-[14px] text-gray-500 mt-3 mb-3">Fashion Tips</p>
          <h3 className="font-semibold text-[20px] mb-3 leading-tight">What Curling Irons Are The Best Ones</h3>
          <p className="text-[14px] text-gray-500 mb-3 leading-relaxed">
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
          </p>
          <a className="text-[14px] font-bold underline" href="#">Read More</a>
        </article>
        <article>
          <img alt="Flatlay of shoes, clothes, and a book on a white and black patterned surface"
               className="w-full object-cover" height="300"
               src="https://storage.googleapis.com/a1aa/image/44ddc724-059f-4c4c-50bd-5655db02bf1c.jpg" width="400"/>
          <p className="text-[14px] text-gray-500 mt-3 mb-3">Fashion Tips</p>
          <h3 className="font-semibold text-[20px] mb-3 leading-tight">
            Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes
          </h3>
          <p className="text-[14px] text-gray-500 mb-3 leading-relaxed">
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
          </p>
          <a className="text-[14px] font-bold underline" href="#">Read More</a>
        </article>
        <article>
          <img alt="Hand holding a green Maui bottle with another bottle in the background on a white surface with flowers"
               className="w-full object-cover" height="300"
               src="https://storage.googleapis.com/a1aa/image/eb70ed84-4acd-40d0-b0e4-86ce2dc517fc.jpg" width="400"/>
          <p className="text-[14px] text-gray-500 mt-3 mb-3">Fashion Tips</p>
          <h3 className="font-semibold text-[20px] mb-1 leading-tight">What Curling Irons Are The Best Ones</h3>
          <p className="text-[14px] text-gray-500 mb-3 leading-relaxed">
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..
          </p>
          <a className="text-[14px] font-bold underline" href="#">Read More</a>
        </article>
      </div>
    </section>
  );
};

export default LatestNewsSection;
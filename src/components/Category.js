import React from 'react';
import CategorySidebar from './CategorySidebar';

const Category = () => {
  return (
    <div className="bg-[#f3ead0] text-[#1a1a1a] min-h-screen">
      <header className="py-10 text-center">
        <h1 className="text-[30px] font-semibold">Category</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Category</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-full mx-auto px-4 pb-16 flex flex-col md:flex-row gap-8 bg-white">
        {/* Sidebar */}
        {/* <aside className="w-full md:w-64 bg-white p-6 border border-gray-200 rounded-md mt-20 mb-20 ml-48 h-[700px]">
          <form className="space-y-6 text-xs text-[#6b5e3c]">
            <div>
              <select
                aria-label="Category"
                className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
              >
                <option>Category</option>
                <option>Men</option>
                <option>Women</option>
                <option>Baby Fashion</option>
              </select>
            </div>
            <div>
              <select
                aria-label="Type"
                className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
              >
                <option>Type</option>
                <option>Type1</option>
                <option>Type2</option>
                <option>Type3</option>
                <option>Type4</option>
              </select>
            </div>
            <div>
              <select
                aria-label="Size"
                className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
              >
                <option>Size</option>
                <option>Size1</option>
                <option>Size2</option>
                <option>Size3</option>
                <option>Size4</option>
              </select>
            </div>
            <div>
              <select
                aria-label="Color"
                className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
              >
                <option>Color</option>
                <option>Color1</option>
                <option>Color2</option>
                <option>Color3</option>
                <option>Color4</option>
              </select>
            </div>
            <div>
              <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Price</p>
              <div className="flex items-center space-x-2 text-[14px] text-[#6b5e3c] mb-1">
                <span>0</span>
                <div className="flex-1">
                  <input
                    className="w-full h-1 bg-pink-300 rounded-lg appearance-none cursor-pointer"
                    max="500"
                    min="0"
                    type="range"
                    value="250"
                    readOnly // Added readOnly as this is a static component
                  />
                </div>
                <span>500</span>
              </div>
              <div className="flex justify-between text-[10px] text-[#6b5e3c]">
                <span>to</span>
                <span></span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Genres</p>
              <ul className="space-y-1 text-[14px] text-[#6b5e3c]">
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="genres" type="radio" />
                    <span className="ml-2">History</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked
                      className="form-radio text-pink-600"
                      name="genres"
                      type="radio"
                      readOnly // Added readOnly as this is a static component
                    />
                    <span className="ml-2">Horror - Thriller</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="genres" type="radio" />
                    <span className="ml-2">Love Stories</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="genres" type="radio" />
                    <span className="ml-2">Science Fiction</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="genres" type="radio" />
                    <span className="ml-2">Biography</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Brand</p>
              <ul className="space-y-1 text-[14px] text-[#6b5e3c]">
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="brand" type="radio" />
                    <span className="ml-2">Green Publications</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked
                      className="form-radio text-pink-600"
                      name="brand"
                      type="radio"
                      readOnly // Added readOnly as this is a static component
                    />
                    <span className="ml-2">Anondo Publications</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="brand" type="radio" />
                    <span className="ml-2">Rinku Publications</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="brand" type="radio" />
                    <span className="ml-2">Sheba Publications</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-radio text-pink-600" name="brand" type="radio" />
                    <span className="ml-2">Red Publications</span>
                  </label>
                </li>
              </ul>
            </div>
          </form>
        </aside> */}
        <CategorySidebar/>
        {/* Products grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mr-72 mt-20 mb-20">
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Hand holding completely bare go fuzz free product with finger pointing"
              className="mx-auto mb-2 h-full"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/3f65fb26-bd0e-48da-b7bb-a056cd39d6da.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Curiosly white bottle with water splash background"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/95e81d5c-bc65-491a-0280-0fa927170778.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
            {/* <p className="mt-1">
              <span>$98.00</span>
              <span className="line-through text-[#b9a97f] ml-2">$120.00</span>
            </p> */}
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Brown boots belt gray pants white t-shirt sunglasses watch arranged flatlay"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/7d10a598-69cc-4f7f-232e-322f734984e9.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="White smart watch with white strap on gray background"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/6227dc3d-5144-4396-6d07-a8354b8a9e62.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Curiosly white bottle with water splash background grayscale"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/7e80d3a6-5a74-416b-349f-0247e4263c1d.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Black and white photo of woman in white long sleeve shirt with hands behind head"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/d463be4a-f670-4ba6-80df-68c84f4a2ea9.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Side profile of man wearing gray coat with black strap bag"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/f3b65729-f850-431e-d288-f7643d1202e7.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Woman with short black hair wearing white shirt looking down"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/d25227d9-b3b5-4db3-2d99-dbe4c40070cd.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
          <article className="text-center text-xs text-[#6b5e3c]">
            <img
              alt="Red tomato sweater on woman with red hair looking to side"
              className="mx-auto mb-2 h-full"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/45c1ee36-3786-4ffc-7091-badbb5a3e98d.jpg"
              width="300"
            />
            <span className={`block text-[14px] font-normal`}>
              Cashmere Tank + Bag
            </span>
            <span className="mt-4 block text-[16px]">
              <span className="text-black font-semibold mr-2">$98.00</span>{' '}
              <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
            </span>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Category;
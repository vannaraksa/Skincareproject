import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

function Home() {
  return (
    <div className="container p-0">
      <div className="container-fluid p-0">
        <div className="container-fluid p-0 position-relative mx-5">
          <div className="position-absolute z-3 top-50 translate-middle text-end text-dark mx-5">
            <h1 className=" fw-bold fs-5">30-Second Skin Care</h1>
            <p className="m-0 fs-3 text-center">
              Better skin in less time than it takes to send a text.
            </p>
            <button className="btn bg-green-pea-700 text-light mt-3">
              Shop Now
            </button>
          </div>
          <img
            src="https://krete.club/cdn/shop/t/3/assets/img-hero-products.webp?v=82279885606431303601712918033"
            alt=""
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <p className="text-center fw-bold fs-1">
          Products For Every Skin Issue
        </p>
        <div className="d-flex justify-content-start my-3 overflow-auto">
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/t/3/assets/img-home-dryskin-man-light.jpg?v=681970874329122231713255290"
                alt=""
              />
            </div>
            <button className="btn rounded-0 shadow-none border-0">
              <a
                href=""
                className="text-decoration-none text-black text-center fs-1 px-3"
              >
                Dry Skin
                <FiArrowRightCircle className="mx-3" />
              </a>
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/t/3/assets/img-home-redness-man-light.jpg?v=125170324240065743891706677083"
                alt=""
              />
            </div>
            <button className="btn rounded-0 shadow-none border-0">
              <a
                href=""
                className="text-decoration-none text-black text-center fs-1 px-3"
              >
                Under-Eye
                <FiArrowRightCircle className="mx-3" />
              </a>
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/t/3/assets/img-home-eyebags-man-light.jpg?v=20759607969485428081706677088"
                alt=""
              />
            </div>
            <button className="btn rounded-0 shadow-none border-0">
              <a
                href=""
                className="text-decoration-none text-black text-center fs-1 px-3"
              >
                Redness
                <FiArrowRightCircle className="mx-3" />
              </a>
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/t/3/assets/img-home-wrinkles-man-light.jpg?v=44021862822899171011706677083"
                alt=""
              />
            </div>
            <button className="btn rounded-0 shadow-none border-0">
              <a
                href=""
                className="text-decoration-none text-black text-center fs-1 px-3"
              >
                Wrinkles
                <FiArrowRightCircle className="mx-3" />
              </a>
            </button>
          </div>
        </div>
        <p className="fs-1 fw-bold mx-2 px-2">Our Product</p>
        <hr />
        <div className="d-flex justify-content-start my-3 overflow-auto">
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/kit-carousel_520x.jpg?v=1730362693"
                alt=""
              />
            </div>
            <div>
              <h2>The Men's Skincare System</h2>
              <p className="fs-6">
                Our flagship bundle: Cleanser, Serum and Eye Stick
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/eye-stick-collection_d0c973e7-d417-49e0-a2c4-761467263553_520x.jpg?v=1718003982"
                alt=""
              />
            </div>
            <div>
              <h2>Cooling Under-Eye Stick</h2>
              <p className="fs-6">
                Reduce the look of dark circles and eye bags
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/facial-serum-collection_520x.jpg?v=1677216258"
                alt=""
              />
            </div>
            <div>
              <h2>Hydrating Facial Serum</h2>
              <p className="fs-6">
                A concentrated moisturizer with Apple Stem Cell Extract
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start my-3 overflow-auto">
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/cleanser-collection-pic_520x.jpg?v=1698877737"
                alt=""
              />
            </div>
            <div>
              <h2>Probiotic Facial Cleanser</h2>
              <p className="fs-6">
                A foaming facial cleanser for all skin types
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/bodyl-serum-collection_520x.jpg?v=1677216367"
                alt=""
              />
            </div>
            <div>
              <h2>Hydrating Body Serum</h2>
              <p className="fs-6">
                A concentrated moisturizer with Tripeptide-29
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-4 my-3 px-3">
            <div className="card rounded-4 overflow-hidden">
              <img
                className="w-100 h-100  object-fit-cover"
                src="https://krete.club/cdn/shop/files/camo-pen-collection-img_520x.jpg?v=1698096968"
                alt=""
              />
            </div>
            <div>
              <h2>Camo Pen</h2>
              <p className="fs-6">
                Quick-apply concealer matched to your skin tone
              </p>
              <div className="text-bg-green-pea-700 fs-3">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

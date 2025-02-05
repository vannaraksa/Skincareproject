import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

function Home() {
  return (
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
      <p className="text-center fw-bold fs-1">Products For Every Skin Issue</p>
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
    </div>
  );
}

export default Home;

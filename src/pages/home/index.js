import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10">
      {/* <h1 className='text-gray-950 font-bold'>Home</h1> */}
      <div className="w-full bg-orange-50">
        <section className="bg-orange-50 dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 lg:px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 w-full md:w-8/12">
              <div className="flex flex-row">
                <span class="hidden md:block shrink-0">
                  <img
                    alt="achivement"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="shrink-0 rounded-full"
                    style={{ color: "transparent" }}
                    srcset="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?t=st=1721397077~exp=1721400677~hmac=cac5652cc18ab68275e42d8886510f8d6082d040a70ef004b000f8e97c774cc4&w=740"
                    src="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?t=st=1721397077~exp=1721400677~hmac=cac5652cc18ab68275e42d8886510f8d6082d040a70ef004b000f8e97c774cc4&w=740"
                  />
                </span>
                <span className="md:hidden shrink-0">
                  <img
                    alt="achivement"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="shrink-0"
                    style={{ color: "transparent" }}
                    srcset="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?t=st=1721397077~exp=1721400677~hmac=cac5652cc18ab68275e42d8886510f8d6082d040a70ef004b000f8e97c774cc4&w=740"
                    src="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?t=st=1721397077~exp=1721400677~hmac=cac5652cc18ab68275e42d8886510f8d6082d040a70ef004b000f8e97c774cc4&w=740"
                  />
                </span>
                <div className="text-[12px] md:text-[16px] font-normal text-[#6A3A0C] pl-1">
                  WORLD’S LARGEST APP FOR HINDU DEVOTEES
                </div>
              </div>
              <h1 className="inline text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] max-w-2xl mb-4  tracking-tight leading-50 xl:text-[36px] dark:text-white">
                <span className=" whitespace-nowrap">
                  <span>Pray daily with </span>
                  <span className="w-full  md:inline md:pr-1 whitespace-nowrap text-orange-500">
                    Sri Mandir<span className="text-black">.</span>
                  </span>
                </span>
                <span className="block">
                  One App for all your devotional needs.
                </span>
              </h1>
              <div className=" md:hidden my-4">
                <img
                  alt="srimandir banner"
                  title="srimandir banner"
                  fetchpriority="high"
                  loading="eager"
                  width="882"
                  height="744"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcset="https://img.freepik.com/premium-vector/celebrates-birth-lord-hanuman-happy-hanuman-jayanti-vector_620614-738.jpg?w=740"
                  src="https://img.freepik.com/premium-vector/celebrates-birth-lord-hanuman-happy-hanuman-jayanti-vector_620614-738.jpg?w=740"
                />
              </div>
              <div className="flex flex-row w-full justify-center md:justify-start md:mt-10">
                <a
                  href="https://srimandir.app.link/TRGP"
                  className="inline-flex items-center"
                >
                  <span className="hidden md:block w-48 h-16">
                    <img
                      alt="Play Store"
                      fetchpriority="high"
                      loading="eager"
                      width="200"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcset="https://img.freepik.com/premium-vector/mobile_1031082-10268.jpg?w=340"
                      src="https://img.freepik.com/premium-vector/mobile_1031082-10268.jpg?w=340"
                    />
                  </span>
                  <span class="xs:w-36 w-40 h-11 md:hidden">
                    <img
                      alt="Play Store"
                      fetchpriority="high"
                      loading="eager"
                      width="200"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcset="https://img.freepik.com/premium-vector/mobile_1031082-10268.jpg?w=300"
                      src="https://img.freepik.com/premium-vector/mobile_1031082-10268.jpg?w=300"
                    />
                  </span>
                </a>
                <a
                  href="https://srimandir.app.link/TRGP"
                  className="inline-flex items-center pl-4 "
                >
                  <span className="hidden md:block w-48 h-16">
                    <img
                      alt="App Store"
                      fetchpriority="high"
                      loading="eager"
                      width="200"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcset="https://img.freepik.com/premium-vector/available-app-store-get-it-google-play-buttons-go-app-stores-white-background-logotype-logo-ios-android-applications-download-install-user-editorial_661108-8070.jpg?w=740"
                      src="https://img.freepik.com/premium-vector/available-app-store-get-it-google-play-buttons-go-app-stores-white-background-logotype-logo-ios-android-applications-download-install-user-editorial_661108-8070.jpg?w=740"
                    />
                  </span>
                  <span className="xs:w-36 w-40 h-11 md:hidden">
                    <img
                      alt="App Store"
                      fetchpriority="high"
                      loading="eager"
                      width="200"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcset="https://img.freepik.com/premium-vector/available-app-store-get-it-google-play-buttons-go-app-stores-white-background-logotype-logo-ios-android-applications-download-install-user-editorial_661108-8070.jpg?w=740"
                      src="https://img.freepik.com/premium-vector/available-app-store-get-it-google-play-buttons-go-app-stores-white-background-logotype-logo-ios-android-applications-download-install-user-editorial_661108-8070.jpg?w=740"
                    />
                  </span>
                </a>
              </div>       
            </div>
            <div className="hidden md:block order-first md:order-last lg:mt-0 lg:col-span-5 lg:flex">
                <img
                  alt="srimandir banner"
                  title="srimandir banner"
                  fetchpriority="high"
                  loading="eager"
                  width="882"
                  height="744"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcset="https://img.freepik.com/premium-vector/celebrates-birth-lord-hanuman-happy-hanuman-jayanti-vector_620614-738.jpg?w=740"
                  src="https://img.freepik.com/premium-vector/celebrates-birth-lord-hanuman-happy-hanuman-jayanti-vector_620614-738.jpg?w=740"
                />
              </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

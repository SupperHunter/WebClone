import { useState, useEffect , useRef } from "react";
import './App.css'
function App() {
  const classloading = useRef<HTMLDivElement>(null);
  const formEndn = useRef<HTMLDivElement>(null);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const modal = classloading.current;
    if (!modal) return;

    const observer = new MutationObserver(() => {
      if (!modal.classList.contains("hidden")) {
        setProgress1(0);
        setProgress2(0);
        
        let interval1 = setInterval(() => {
          setProgress1((prev) => {
            if (prev >= 100) {
              clearInterval(interval1);
              return 100;
            }
            return prev + 1;
          });
        }, 70);

        let interval2 = setInterval(() => {
          setProgress2((prev) => {
            if (prev >= 100) {
               console.log("da log duoc vao ben trong ham , dung co end" + progress1);
                if (formEndn.current) {
                  formEndn.current.classList.remove("hidden");
              }
              return 100;
            }
            return prev + 1;
          });
        }, 90);

        return () => {
          clearInterval(interval1);
          clearInterval(interval2);
        };
      }
    });

    observer.observe(modal, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 58.5;
  const strokeDashoffset1 = circumference * (1 - progress1 / 100);
  const strokeDashoffset2 = circumference * (1 - progress2 / 100);

  const [inputValue, setInputValue] = useState("");
  const runBtnclick = ()=>{
    if(inputValue === '') return;
    removeClass();
  }
  // Cập nhật progress chính
  const removeClass = () => {
    if (classloading.current) {
      classloading.current.classList.remove("hidden");
    }
  };
  return (
    <>
    <header />
    <main>
      <aside>
        <a href="/" title="Canva" className="logo">
          <img src="images/logo.svg" alt="" />
        </a>
        <div className="menuItem">
          <p className="menuHead">Explore</p>
          <ul>
            <li>
              <a href="javascript:void(0)" title="Recent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M9.5 14.668V9.332a1 1 0 0 1 1.54-.842l4.152 2.669a1 1 0 0 1 0 1.682L11.04 15.51a1 1 0 0 1-1.541-.842"
                  ></path>
                </svg>
                Recent
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Featured">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M10.838 2.727a1.333 1.333 0 0 1 2.324 0l2.136 3.79c.19.338.518.576.897.653l4.265.86a1.333 1.333 0 0 1 .718 2.21l-2.945 3.202c-.262.285-.387.67-.343 1.055l.5 4.322a1.333 1.333 0 0 1-1.88 1.365l-3.955-1.81a1.33 1.33 0 0 0-1.11 0l-3.956 1.81A1.333 1.333 0 0 1 5.61 18.82l.5-4.322c.044-.384-.081-.77-.344-1.055l-2.944-3.203a1.333 1.333 0 0 1 .718-2.21l4.265-.86c.38-.076.707-.314.897-.652z"
                  ></path>
                </svg>
                Featured
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Saved">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.25 3.5h-8.5a3 3 0 0 0-3 3v13.653a.5.5 0 0 0 .742.438l6.025-3.325a1 1 0 0 1 .966 0l6.026 3.325a.5.5 0 0 0 .741-.438V6.5a3 3 0 0 0-3-3Z"
                  ></path>
                </svg>
                Saved
              </a>
            </li>
          </ul>
        </div>
        <div className="menuItem">
          <p className="menuHead">Library</p>
          <ul>
            <li>
              <a href="javascript:void(0)" title="Library">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.976 2c-1.14 0-2.061.003-2.813.065-.812.066-1.514.205-2.16.534a5.5 5.5 0 0 0-2.404 2.404c-.329.646-.468 1.348-.534 2.16a25 25 0 0 0-.062 1.758 1 1 0 0 0-.001.144Q2 9.575 2 10.157v3.686c0 1.224 0 2.203.065 2.994.066.812.205 1.514.534 2.16A5.5 5.5 0 0 0 5.003 21.4c.646.329 1.348.468 2.16.534.791.065 1.77.065 2.994.065h3.686c1.224 0 2.203 0 2.994-.065.812-.066 1.514-.205 2.16-.534a5.5 5.5 0 0 0 2.404-2.404c.329-.646.468-1.348.534-2.16.065-.791.065-1.77.065-2.994v-3.686q0-.582-.002-1.092a1 1 0 0 0-.001-.144 25 25 0 0 0-.062-1.758c-.066-.812-.205-1.514-.534-2.16a5.5 5.5 0 0 0-2.404-2.404c-.646-.329-1.348-.468-2.16-.534C16.046 2 15.067 2 13.843 2H9.976M19.98 8q-.012-.366-.037-.674c-.056-.689-.162-1.098-.323-1.415a3.5 3.5 0 0 0-1.53-1.53c-.308-.157-.704-.261-1.36-.318L15.396 8zm-5.34-4-1.356 4H9.387l1.334-4h3.918M20 10H4v3.8c0 1.277 0 2.174.058 2.874.056.689.162 1.098.323 1.415a3.5 3.5 0 0 0 1.53 1.53c.317.161.726.267 1.415.323.7.057 1.597.058 2.874.058h3.6c1.277 0 2.174 0 2.874-.058.689-.056 1.098-.162 1.415-.323a3.5 3.5 0 0 0 1.53-1.53c.161-.317.267-.726.323-1.415.057-.7.058-1.597.058-2.874V10M4.02 8h3.26l1.33-3.993c-.499.007-.918.021-1.284.051-.689.056-1.098.162-1.415.323a3.5 3.5 0 0 0-1.53 1.53c-.161.317-.267.726-.323 1.415q-.025.308-.037.674"
                    clipRule="evenodd"
                  />
                </svg>
                All videos
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Favorites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5.822c6.504-6.44 17.654 5.52 0 15.178C-5.654 11.342 5.496-.618 12 5.822Z"
                  ></path>
                </svg>
                Favorites
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Uploads">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 18 18"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M1.654 10.323c-.154-1.25-.23-1.876-.046-2.384a2.25 2.25 0 0 1 .856-1.095c.448-.302 1.073-.38 2.324-.533l2.531-.31c1.25-.154 1.876-.23 2.384-.046.446.162.83.462 1.096.856.302.448.379 1.073.532 2.324l.31 2.53c.154 1.252.231 1.877.046 2.385a2.25 2.25 0 0 1-.856 1.095c-.448.302-1.073.38-2.324.533l-2.53.31c-1.251.154-1.877.23-2.384.046a2.25 2.25 0 0 1-1.096-.856c-.302-.448-.379-1.073-.533-2.324z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M14.25 12.102q.065-.017.126-.04a2.25 2.25 0 0 0 1.095-.856c.302-.448.38-1.073.533-2.324l.31-2.53c.154-1.251.23-1.877.046-2.384a2.25 2.25 0 0 0-.856-1.096c-.448-.302-1.073-.379-2.324-.533l-2.531-.31c-1.25-.154-1.876-.23-2.384-.046a2.25 2.25 0 0 0-1.095.856c-.103.152-.18.325-.242.536"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m5.371 12.718-.418-2.973a.563.563 0 0 1 .793-.589l2.52 1.162c.373.171.443.67.132.937l-2.103 1.811a.562.562 0 0 1-.924-.348"
                  ></path>
                </svg>
                Uploads
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <section className="content">
        <p className="contentHead">Recent</p>
        <div className="girdVideos">
          <div className="gridItem">
            <video
              src="media/assetstask_01jhqgfwt9e019rkn8gppvj7sztask_01jhqgfwt9e019rkn8gppvj7sz_genid_9aadb23a-69b1-40c4-a6d9-46773dce7446_25_01_16_12_13_201869videos00000_837086750ld.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhqax63re50sn9aarw34h29ptask_01jhqax63re50sn9aarw34h29p_genid_13e3f7c1-e5ff-45fd-9b96-eab05ca2c3d3_25_01_16_10_36_246537videos00000_674387772ld.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhq2d54ffnwr3g3bc6ahhd9jtask_01jhq2d54ffnwr3g3bc6ahhd9j_genid_289832e1-92d9-41bc-95fa-607d77677d9d_25_01_16_08_07_690414videos00000_535571652ld.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhpqm94mfh4t92fx6549191stask_01jhpqm94mfh4t92fx6549191s_genid_7a0f321c-5c33-4934-8754-b836e21c5d3c_25_01_16_04_58_745382videos00000_890195131ld.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhmft50heb4s9kk7mf8bckq5task_01jhmft50heb4s9kk7mf8bckq5_genid_ca0b1212-0a91-4101-84e2-3198e9f499ab_25_01_15_08_03_986818videos00000_954958459md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhmfesk3ehraykq39qv54nw4task_01jhmfesk3ehraykq39qv54nw4_genid_f2558f21-70d7-4a16-a2ee-89965f57aa66_25_01_15_07_57_110528videos00000_474357621md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhj7qwz1ftpash4gpbs7ygaztask_01jhj7qwz1ftpash4gpbs7ygaz_genid_e93093e5-2ccc-4a02-b12a-3935b11c4493_25_01_14_11_04_176675videos00000_401286508md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjmd49hfx88efsw3pengmbptask_01jhjmd49hfx88efsw3pengmbp_genid_caf94892-0539-4a9f-9734-b66b68fa86a2_25_01_14_14_45_959023videos00000_33077545md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjcq83reverkc1n5bfxb5crtask_01jhjcq83reverkc1n5bfxb5cr_genid_41fa5d71-d3c0-4029-aea2-c87fafa532d8_25_01_14_12_31_129357videos00000_32789165md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1mjfve7darkgxr5b6thdx2Ftask_01jgt1mjfve7darkgxr5b6thdx_genid_82f885af-bfd0-4312-a09d-c7f02c5da781_25_01_05_01_35_3483592Fvideos2F00000_2648932Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjb124bfrabzc4170z4cw82task_01jhjb124bfrabzc4170z4cw82_genid_859f6a43-1fa7-4e08-903d-0cc6e0f03523_25_01_14_12_02_976585videos00000_987911805md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjb124bfrabzc4170z4cw82task_01jhjb124bfrabzc4170z4cw82_genid_859f6a43-1fa7-4e08-903d-0cc6e0f03523_25_01_14_12_02_976585videos00000_987911805md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjgv735f5cv2wv200ykwb99task_01jhjgv735f5cv2wv200ykwb99_genid_dff595cb-3f30-4408-a20f-9fd6540393ec_25_01_14_13_45_481957videos00000_995912334md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1bsb4fmxansdebcc22qww2Ftask_01jgt1bsb4fmxansdebcc22qww_genid_899035fd-c437-421a-ba4b-0f8c54b4ed56_25_01_05_01_35_3685312Fvideos2F00000_2604002Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1k7e2es1aqhm0s230f0692Ftask_01jgt1k7e2es1aqhm0s230f069_genid_c3c23d9d-defd-4ef3-8d32-c367d78fa9ae_25_01_05_01_35_7138142Fvideos2F00000_9162602Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1mk4pfh7basnwrdjyf3z72Ftask_01jgt1mk4pfh7basnwrdjyf3z7_genid_f0a72f26-d6f5-4378-8b0d-1f5f0bdb3843_25_01_05_01_35_1562862Fvideos2F00000_1847212Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhj7vg8yf14r7vqwxhs1nvzztask_01jhj7vg8yf14r7vqwxhs1nvzz_genid_37ba1fb1-1779-42a0-a86a-1a58367a7b55_25_01_14_11_06_348182videos00000_366527480md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1mgdpfvp8c58x8mv8gxyv2Ftask_01jgt1mgdpfvp8c58x8mv8gxyv_genid_ca3b1f16-2c27-4467-8743-aea208a010c8_25_01_05_01_35_0466852Fvideos2F00000_1660342Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhjaf034enfrzv0b4kqc3609task_01jhjaf034enfrzv0b4kqc3609_genid_9ad47b05-0560-4c4e-8349-3a99032ff031_25_01_14_11_51_687480videos00000_777015300md.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assetstask_01jhhs3pyef20vgqdnnvfeek88task_01jhhs3pyef20vgqdnnvfeek88_genid_ff672356-57a0-43a7-9701-2c74fc9baf42_25_01_14_06_48_613119videos00000_125675088ld.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="gridItem">
            <video
              src="media/assets2Ftask_01jgt1gcptea7v0048jv9gpn1c2Ftask_01jgt1gcptea7v0048jv9gpn1c_genid_d794c321-bcce-4bf7-9ba6-2f2775b8c944_25_01_05_01_35_3667162Fvideos2F00000_3633932Fmd.mp4"
              preload="metadata"
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              webkit-playsinline={true}
              x5-playsinline={true}
              autoPlay={true}
              muted={true}
            />
          </div>
        </div>
        <div className="contentActions">
          <div className="images" />
          <div className="input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your video..."
              id="prompt-code"
              autoComplete="off"
            />
          </div>
          <div className="btns">
            <div className="btn">
              <div className="actionMenu">
                <label htmlFor="files">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="none"
                    viewBox="0 0 18 18"
                    className="h-[18px] w-[18px]"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M1.654 10.323c-.154-1.25-.23-1.876-.046-2.384a2.25 2.25 0 0 1 .856-1.095c.448-.302 1.073-.38 2.324-.533l2.531-.31c1.25-.154 1.876-.23 2.384-.046.446.162.83.462 1.096.856.302.448.379 1.073.532 2.324l.31 2.53c.154 1.252.231 1.877.046 2.385a2.25 2.25 0 0 1-.856 1.095c-.448.302-1.073.38-2.324.533l-2.53.31c-1.251.154-1.877.23-2.384.046a2.25 2.25 0 0 1-1.096-.856c-.302-.448-.379-1.073-.533-2.324z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      d="M14.25 12.102q.065-.017.126-.04a2.25 2.25 0 0 0 1.095-.856c.302-.448.38-1.073.533-2.324l.31-2.53c.154-1.251.23-1.877.046-2.384a2.25 2.25 0 0 0-.856-1.096c-.448-.302-1.073-.379-2.324-.533l-2.531-.31c-1.25-.154-1.876-.23-2.384-.046a2.25 2.25 0 0 0-1.095.856c-.103.152-.18.325-.242.536"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m5.371 12.718-.418-2.973a.563.563 0 0 1 .793-.589l2.52 1.162c.373.171.443.67.132.937l-2.103 1.811a.562.562 0 0 1-.924-.348"
                    ></path>
                  </svg>
                  <input type="file" id="files" multiple/>
                  Upload image or video
                </label>
              </div>
              <div className="actionText" id="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="btn">
              <div className="actionMenu">
                <p className="actionMenuHead">Aspect Ratio</p>
                <div className="actionItems">
                  <div className="actionItem active" data-param="16:9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        fill="currentColor"
                        d="M6.759 5H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 14.71 1 14.046 1 13.242v-2.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 5 5.954 5 6.758 5M4.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C3 9.361 3 9.943 3 10.8v2.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C5.361 17 5.943 17 6.8 17h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 7 18.057 7 17.2 7H6.8c-.857 0-1.439 0-1.889.038"
                      ></path>
                    </svg>
                    16:9
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="1:1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        fill="currentColor"
                        d="M6.759 5H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 14.71 1 14.046 1 13.242v-2.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 5 5.954 5 6.758 5M4.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C3 9.361 3 9.943 3 10.8v2.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C5.361 17 5.943 17 6.8 17h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 7 18.057 7 17.2 7H6.8c-.857 0-1.439 0-1.889.038"
                      ></path>
                    </svg>
                    1:1
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="9:16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        fill="currentColor"
                        d="M6.759 5H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 14.71 1 14.046 1 13.242v-2.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 5 5.954 5 6.758 5M4.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C3 9.361 3 9.943 3 10.8v2.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C5.361 17 5.943 17 6.8 17h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 7 18.057 7 17.2 7H6.8c-.857 0-1.439 0-1.889.038"
                      ></path>
                    </svg>
                    9:16
                    <div className="cricle" />
                  </div>
                </div>
              </div>
              <div className="actionText" id="ratio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden h-[18px] w-[18px] desktop:block"
                >
                  <path
                    fill="currentColor"
                    d="M6.759 5H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 14.71 1 14.046 1 13.242v-2.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 5 5.954 5 6.758 5M4.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C3 9.361 3 9.943 3 10.8v2.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C5.361 17 5.943 17 6.8 17h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 7 18.057 7 17.2 7H6.8c-.857 0-1.439 0-1.889.038"
                  ></path>
                </svg>
                <span>16:9</span>
              </div>
            </div>
            <div className="btn">
              <div className="actionMenu">
                <p className="actionMenuHead">Resolution</p>
                <div className="actionItems">
                  <div className="actionItem" data-param="1080p">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.109 4H7.891a1 1 0 0 0-.678.265l-5.448 5.03a1 1 0 0 0-.029 1.441l9.557 9.557a1 1 0 0 0 1.414 0l9.557-9.557a1 1 0 0 0-.029-1.442l-5.448-5.029A1 1 0 0 0 16.11 4ZM2.5 10h19"
                      ></path>
                    </svg>
                    1080p
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="720p">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.109 4H7.891a1 1 0 0 0-.678.265l-5.448 5.03a1 1 0 0 0-.029 1.441l9.557 9.557a1 1 0 0 0 1.414 0l9.557-9.557a1 1 0 0 0-.029-1.442l-5.448-5.029A1 1 0 0 0 16.11 4ZM2.5 10h19"
                      ></path>
                    </svg>
                    720p
                    <div className="cricle" />
                  </div>
                  <div className="actionItem active" data-param="480p">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.109 4H7.891a1 1 0 0 0-.678.265l-5.448 5.03a1 1 0 0 0-.029 1.441l9.557 9.557a1 1 0 0 0 1.414 0l9.557-9.557a1 1 0 0 0-.029-1.442l-5.448-5.029A1 1 0 0 0 16.11 4ZM2.5 10h19"
                      ></path>
                    </svg>
                    480p
                    <div className="cricle" />
                  </div>
                </div>
              </div>
              <div className="actionText" id="resolution">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden h-[18px] w-[18px] desktop:block"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.109 4H7.891a1 1 0 0 0-.678.265l-5.448 5.03a1 1 0 0 0-.029 1.441l9.557 9.557a1 1 0 0 0 1.414 0l9.557-9.557a1 1 0 0 0-.029-1.442l-5.448-5.029A1 1 0 0 0 16.11 4ZM2.5 10h19"
                  ></path>
                </svg>
                <span>480p</span>
              </div>
            </div>
            <div className="btn">
              <div className="actionMenu">
                <p className="actionMenuHead">Duration</p>
                <div className="actionItems">
                  <div className="actionItem" data-param="20 seconds">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <circle
                        cx={12}
                        cy={12}
                        r={9}
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.5 7.67 12 12"
                      />
                    </svg>
                    20 seconds
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="15 seconds">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <circle
                        cx={12}
                        cy={12}
                        r={9}
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.5 7.67 12 12"
                      />
                    </svg>
                    15 seconds
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="10 seconds">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <circle
                        cx={12}
                        cy={12}
                        r={9}
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.5 7.67 12 12"
                      />
                    </svg>
                    10 seconds
                    <div className="cricle" />
                  </div>
                  <div className="actionItem active" data-param="5 seconds">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <circle
                        cx={12}
                        cy={12}
                        r={9}
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.5 7.67 12 12"
                      />
                    </svg>
                    5 seconds
                    <div className="cricle" />
                  </div>
                </div>
              </div>
              <div className="actionText" id="duration">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden h-[18px] w-[18px] desktop:block"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={9}
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.5 7.67 12 12"
                  />
                </svg>
                <span>5s</span>
              </div>
            </div>
            <div className="btn">
              <div className="actionMenu">
                <p className="actionMenuHead">Variations</p>
                <div className="actionItems">
                  <div className="actionItem" data-param="4v">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <rect
                        width={18}
                        height={16}
                        x={3}
                        y={4}
                        stroke="currentColor"
                        strokeWidth={2}
                        rx={3}
                      />
                      <circle cx="9.5" cy={12} r={2} fill="currentColor" />
                      <circle cx="14.5" cy={12} r={2} fill="currentColor" />
                    </svg>
                    4 videos
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="3v">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <rect
                        width={18}
                        height={16}
                        x={3}
                        y={4}
                        stroke="currentColor"
                        strokeWidth={2}
                        rx={3}
                      />
                      <circle cx="9.5" cy={12} r={2} fill="currentColor" />
                      <circle cx="14.5" cy={12} r={2} fill="currentColor" />
                    </svg>
                    3 videos
                    <div className="cricle" />
                  </div>
                  <div className="actionItem active" data-param="2v">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <rect
                        width={18}
                        height={16}
                        x={3}
                        y={4}
                        stroke="currentColor"
                        strokeWidth={2}
                        rx={3}
                      />
                      <circle cx="9.5" cy={12} r={2} fill="currentColor" />
                      <circle cx="14.5" cy={12} r={2} fill="currentColor" />
                    </svg>
                    2 videos
                    <div className="cricle" />
                  </div>
                  <div className="actionItem" data-param="1v">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden h-[18px] w-[18px] desktop:block"
                    >
                      <rect
                        width={18}
                        height={16}
                        x={3}
                        y={4}
                        stroke="currentColor"
                        strokeWidth={2}
                        rx={3}
                      />
                      <circle cx="9.5" cy={12} r={2} fill="currentColor" />
                      <circle cx="14.5" cy={12} r={2} fill="currentColor" />
                    </svg>
                    1 videos
                    <div className="cricle" />
                  </div>
                </div>
              </div>
              <div className="actionText" id="variation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="hidden h-[18px] w-[18px] desktop:block"
                >
                  <rect
                    width={18}
                    height={16}
                    x={3}
                    y={4}
                    stroke="currentColor"
                    strokeWidth={2}
                    rx={3}
                  ></rect>
                  <circle cx="9.5" cy={12} r={2} fill="currentColor" />
                  <circle cx="14.5" cy={12} r={2} fill="currentColor" />
                </svg>
                <span>2v</span>
              </div>
            </div>
            <div className="run">
              <button className="runBtn" onClick={runBtnclick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 8.414V18a1 1 0 1 1-2 0V8.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div ref={classloading} className="modal hidden" id="modal-download">
        <div className="modalBody">
          <div className="videos" data-ratio="16:9">
            <div className="video-item">
              <div className="loading">
                <svg
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                  className="h-20 w-20"
                >
                  <circle
                    stroke="#8b7cc6"
                    strokeWidth={3}
                    fill="transparent"
                    r="58.5"
                    cx={60}
                    cy={60}
                  ></circle>
                  <circle
                    id="progress1"
                    className="origin-center transition-[stroke-dashoffset] -rotate-90"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeDasharray={circumference}
                   strokeDashoffset={strokeDashoffset1}
                    strokeLinecap="round"
                    fill="transparent"
                    r="58.5"
                    cx={60}
                    cy={60}
                    style={{ animationDuration: "25s", strokeDashoffset: 0 }}
                  />
                </svg>
                <div id="percent1" className="percent">
                  {progress1}%
                </div>
              </div>
            </div>
            <div className="video-item">
              <div className="loading">
                <svg
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                  className="h-20 w-20"
                >
                  <circle
                    stroke="#8b7cc6"
                    strokeWidth={3}
                    fill="transparent"
                    r="58.5"
                    cx={60}
                    cy={60}
                  ></circle>
                  <circle
                    id="progress4"
                    className="origin-center transition-[stroke-dashoffset] -rotate-90"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeDasharray={circumference}
                   strokeDashoffset={strokeDashoffset2}
                    strokeLinecap="round"
                    fill="transparent"
                    r="58.5"
                    cx={60}
                    cy={60}
                    style={{ animationDuration: "30s", strokeDashoffset: 0 }}
                  />
                </svg>
                <div id="percent4" className="percent">
                  {progress2}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modalFooter">
          <div id="promptBox" className="promptBox">
            Prompt
            <span id="prompt" />
          </div>
          <div className="playBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M8 16.723V7.277a1.25 1.25 0 0 1 1.921-1.054l7.422 4.723a1.25 1.25 0 0 1 0 2.109L9.92 17.778A1.25 1.25 0 0 1 8 16.723"
              ></path>
            </svg>
            <div className="playBarLine" />
          </div>
          <div className="actionBar">
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M18.292 5.707a2.536 2.536 0 0 0-3.586 0L14.413 6 18 9.586l.293-.293c.99-.99.99-2.595 0-3.586M16.585 11l-3.586-3.585-5.843 5.842c-.564.565-.753.76-.9.973q-.21.309-.339.66c-.089.243-.137.51-.269 1.298l-.432 2.596 2.596-.433c.787-.131 1.055-.18 1.297-.269q.351-.129.66-.34c.214-.145.409-.335.973-.899zm-3.293-6.707a4.536 4.536 0 1 1 6.414 6.414l-7.55 7.55-.062.063c-.478.478-.81.81-1.196 1.074a5 5 0 0 1-1.1.566c-.44.161-.903.238-1.57.35l-.088.014-2.872.479-.028.004c-.161.027-.34.057-.497.07-.17.012-.44.016-.727-.106a1.5 1.5 0 0 1-.787-.788 1.5 1.5 0 0 1-.106-.727c.012-.156.042-.335.069-.496l.005-.029.479-2.872.014-.087c.111-.668.188-1.13.35-1.57q.214-.585.565-1.1c.264-.386.596-.718 1.075-1.197l.062-.062z"
                ></path>
              </svg>
              <span>Edit prompt</span>
            </div>
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M15 5H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM7 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2M17 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"
                ></path>
              </svg>
              <span>View story</span>
            </div>
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <circle
                  cx="5.416"
                  cy="6.25"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <circle
                  cx="5.416"
                  cy="6.25"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <circle
                  cx="5.416"
                  cy="6.25"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <circle
                  cx="5.416"
                  cy="13.75"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <circle
                  cx="5.416"
                  cy="13.75"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <circle
                  cx="5.416"
                  cy="13.75"
                  r="2.083"
                  stroke="currentColor"
                  strokeWidth="1.667"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.667"
                  d="m7.5 12.5 9.166-6.25M7.5 7.5l3.666 2.5m5.5 3.75-2.75-1.875"
                ></path>
              </svg>
              <span>Re-cut</span>
            </div>
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <circle
                  cx={10}
                  cy={10}
                  r={7}
                  stroke="currentColor"
                  strokeWidth="1.556"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.556"
                  d="M11.945 10c0-4.667-9.723-5.833-8.75 1.556"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.556"
                  d="M8.055 10c0 4.667 9.723 5.833 8.75-1.556"
                />
              </svg>
              <span>Remix</span>
            </div>
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.667"
                  d="M14.167 3.333H5.833a2.5 2.5 0 0 0-2.5 2.5v8.334a2.5 2.5 0 0 0 2.5 2.5h8.334a2.5 2.5 0 0 0 2.5-2.5V5.833a2.5 2.5 0 0 0-2.5-2.5Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M4.167 14.167h1.25c.23 0 .416.186.416.416v1.25c-.92 0-1.666-.746-1.666-1.666M7.5 14.583c0-.23.187-.416.417-.416h.833c.23 0 .417.186.417.416v1.25H7.5zM10.833 14.583c0-.23.187-.416.417-.416h.833c.23 0 .417.186.417.416v1.25h-1.667zM14.167 14.583c0-.23.186-.416.416-.416h1.25c0 .92-.746 1.666-1.666 1.666zM4.375 11.333c0-.16.13-.291.292-.291h.666c.161 0 .292.13.292.291V12c0 .161-.13.292-.292.292h-.666A.29.29 0 0 1 4.375 12z"
                ></path>
                <rect
                  width="1.233"
                  height="1.233"
                  x="7.717"
                  y="11.05"
                  fill="currentColor"
                  rx="0.292"
                ></rect>
                <rect
                  width="1.25"
                  height="1.25"
                  x="11.042"
                  y="11.042"
                  fill="currentColor"
                  rx="0.292"
                ></rect>
                <path
                  fill="currentColor"
                  d="M14.375 11.333c0-.16.13-.291.292-.291h.666c.161 0 .292.13.292.291V12c0 .161-.13.292-.292.292h-.666a.29.29 0 0 1-.292-.292z"
                ></path>
                <rect
                  width="1.667"
                  height="1.667"
                  x="5.833"
                  y="12.5"
                  fill="currentColor"
                  rx="0.417"
                />
                <rect
                  width="1.667"
                  height="1.667"
                  x="9.167"
                  y="12.5"
                  fill="currentColor"
                  rx="0.417"
                />
                <path
                  fill="currentColor"
                  d="M12.5 12.917c0-.23.187-.417.417-.417h.833c.23 0 .417.187.417.417v.833c0 .23-.187.417-.417.417h-.833a.417.417 0 0 1-.417-.417z"
                ></path>
                <rect
                  width="0.833"
                  height="0.833"
                  x="6.25"
                  y="9.583"
                  fill="currentColor"
                  rx="0.167"
                />
                <rect
                  width="0.833"
                  height="0.833"
                  x="9.583"
                  y="9.583"
                  fill="currentColor"
                  rx="0.167"
                ></rect>
                <path
                  fill="currentColor"
                  d="M12.917 9.75c0-.092.074-.167.166-.167h.5c.092 0 .167.075.167.167v.5a.167.167 0 0 1-.167.167h-.5a.167.167 0 0 1-.166-.167z"
                ></path>
              </svg>
              <span>Blend</span>
            </div>
            <div className="actionBarItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M8.333 11.818V8.182a.677.677 0 0 1 1.044-.573l2.812 1.818a.683.683 0 0 1 0 1.146l-2.812 1.818a.677.677 0 0 1-1.044-.573"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.667"
                  d="M7.083 13.75H4.167v2.917"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.771"
                  d="M17.029 10.885A7.085 7.085 0 0 1 10 17.083a7.21 7.21 0 0 1-5.56-2.622M2.97 9.115A7.085 7.085 0 0 1 10 2.917a7.2 7.2 0 0 1 5.601 2.672"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.667"
                  d="M15.833 3.333V6.25h-2.916"
                />
              </svg>
              <span>Loop</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={formEndn} className="modal hidden" id="modal-thank">
        <div className="modal-overlay" />
        <div className="modal-content">
          <a href="/">
          <div className="modal-close">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          </a>
          <div className="modal-box">
            <div className="modal-box--logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={80}
                height={30}
                viewBox="0 0 80 30"
              >
                <defs>
                  <radialGradient
                    id="_2002046508__a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.21 -.67353 .2545 .07935 .512 1.109)"
                  >
                    <stop stopColor="#6420FF" />
                    <stop offset={1} stopColor="#6420FF" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="_2002046508__b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.584 .16215 -.3771 1.3582 .024 .666)"
                  >
                    <stop offset=".25" stopColor="#00C4CC" />
                    <stop offset={1} stopColor="#00C4CC" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="_2002046508__c"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.29425 -.739 .3555 .14155 .427 1)"
                  >
                    <stop stopColor="#6420FF" />
                    <stop offset={1} stopColor="#6420FF" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="_2002046508__d"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.3915 -.59869 .4743 .31016 .028 1)"
                  >
                    <stop stopColor="#6420FF" />
                    <stop offset={1} stopColor="#6420FF" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="_2002046508__e"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(34.593 -.1 .2) scale(1.03255 2.80688)"
                  >
                    <stop stopColor="#00C4CC" />
                    <stop offset={1} stopColor="#00C4CC" stopOpacity={0} />
                  </radialGradient>
                  <pattern
                    id="_2002046508__f"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                  >
                    <path fill="#7D2AE7" d="M0 0h1v1H0z" />
                    <path fill="url(#_2002046508__a)" d="M0 0h1v1H0z" />
                    <path fill="url(#_2002046508__b)" d="M0 0h1v1H0z" />
                    <path fill="url(#_2002046508__c)" d="M0 0h1v1H0z" />
                    <path fill="url(#_2002046508__d)" d="M0 0h1v1H0z" />
                    <path fill="url(#_2002046508__e)" d="M0 0h1v1H0z" />
                  </pattern>
                </defs>
                <path
                  fill="url(#_2002046508__f)"
                  d="M79.444 18.096c-.136 0-.26.088-.324.272-.82 2.34-1.928 3.732-2.84 3.732-.524 0-.736-.584-.736-1.5 0-2.292 1.372-7.152 2.064-9.368.08-.268.132-.508.132-.712 0-.644-.352-.96-1.224-.96-.94 0-1.952.368-2.936 2.092-.34-1.52-1.368-2.184-2.804-2.184-1.66 0-3.264 1.068-4.584 2.8-1.32 1.732-2.872 2.3-4.04 2.02.84-2.056 1.152-3.592 1.152-4.732 0-1.788-.884-2.868-2.312-2.868-2.172 0-3.424 2.072-3.424 4.252 0 1.684.764 3.416 2.444 4.256-1.408 3.184-3.464 6.064-4.244 6.064-1.008 0-1.304-4.932-1.248-8.46.036-2.024.204-2.128.204-2.74 0-.352-.228-.592-1.144-.592-2.136 0-2.796 1.808-2.896 3.884a10.233 10.233 0 0 1-.368 2.332c-.892 3.184-2.732 5.6-3.932 5.6-.556 0-.708-.556-.708-1.284 0-2.292 1.284-5.156 1.284-7.6 0-1.796-.788-2.932-2.272-2.932-1.748 0-4.06 2.08-6.248 5.976.72-2.984 1.016-5.872-1.116-5.872A2.886 2.886 0 0 0 36 9.916a.752.752 0 0 0-.432.728c.204 3.176-2.56 11.312-5.18 11.312-.476 0-.708-.516-.708-1.348 0-2.296 1.368-7.144 2.056-9.364.088-.288.136-.536.136-.752 0-.608-.376-.92-1.228-.92-.936 0-1.952.356-2.932 2.08-.344-1.52-1.372-2.184-2.808-2.184-2.356 0-4.988 2.492-6.144 5.74-1.548 4.336-4.668 8.524-8.868 8.524-3.812 0-5.824-3.172-5.824-8.184C4.068 8.312 9.38 2.4 13.32 2.4c1.884 0 2.784 1.2 2.784 3.04 0 2.228-1.244 3.264-1.244 4.112 0 .26.216.516.644.516 1.712 0 3.728-2.012 3.728-4.756S17.004.56 13.064.56C6.552.56 0 7.112 0 15.508c0 6.68 3.296 10.708 8.996 10.708 3.888 0 7.284-3.024 9.116-6.552.208 2.924 1.536 4.452 3.56 4.452 1.8 0 3.256-1.072 4.368-2.956.428 1.972 1.564 2.936 3.04 2.936 1.692 0 3.108-1.072 4.456-3.064-.02 1.564.336 3.036 1.692 3.036.64 0 1.404-.148 1.54-.708 1.428-5.904 4.956-10.724 6.036-10.724.32 0 .408.308.408.672 0 1.604-1.132 4.892-1.132 6.992 0 2.268.964 3.768 2.956 3.768 2.208 0 4.452-2.704 5.948-6.656.468 3.692 1.48 6.672 3.064 6.672 1.944 0 5.396-4.092 7.488-8.424.82.104 2.052.076 3.236-.76-.504 1.276-.8 2.672-.8 4.068 0 4.02 1.92 5.148 3.572 5.148 1.796 0 3.252-1.072 4.368-2.956.368 1.7 1.308 2.932 3.036 2.932 2.704 0 5.052-2.764 5.052-5.032 0-.6-.256-.964-.556-.964zM23.32 21.888c-1.092 0-1.52-1.1-1.52-2.74 0-2.848 1.948-7.604 4.008-7.604.9 0 1.24 1.06 1.24 2.356 0 2.892-1.852 7.988-3.728 7.988zm37.404-8.5c-.652-.776-.888-1.832-.888-2.772 0-1.16.424-2.14.932-2.14s.664.5.664 1.196c0 1.164-.416 2.864-.708 3.716zm8.468 8.5c-1.092 0-1.52-1.264-1.52-2.74 0-2.748 1.948-7.604 4.024-7.604.9 0 1.22 1.052 1.22 2.356 0 2.892-1.82 7.988-3.724 7.988z"
                ></path>
              </svg>
            </div>
            <div className="modal-box--content">
              <div className="modal-title">Your File is Ready to Download !</div>
              <div className="modal-desc">
                Success! Your file is ready. Download now to discover amazing
                results in seconds. Don't miss out ! Photos are in 4K quality so
                the capacity will be heavy, please wait !
              </div>
              {/*LINK AI*/}
              <a
                href="https://xmetavn.com/Video_for_you.mp4 - Canva.com"
                className="modal-download"
              >
                Download File
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="modal hidden" id="modal-verify">
        <div className="modal-overlay" />
        <div className="modal-content">
          <div className="loading">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <path
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth={15}
                transform-origin="center"
                d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="spline"
                  dur={2}
                  values="0;120"
                  keyTimes="0;1"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                ></animateTransform>
              </path>
            </svg>
          </div>
          <div className="verify-capcha">
            <div className="verify-capcha--image">
              <img src="images/i-am-not-robot.jpg" alt="Capcha" />
              <a
                href="javascript:void(0)"
                className="privacy privacy"
                target="_self"
              >
                Privacy
              </a>
              <a
                href="javascript:void(0)"
                className="privacy terms"
                target="_self"
              >
                Terms
              </a>
            </div>
            <div className="verify-capcha--video">
              <video
                poster="https://content.pancake.vn/1/s800x451/ef/04/07/95/8402bd2aeb67b101436dc836c54020059546d8d211d5b7172671b0cb.jpeg"
                preload="metadata"
                loop={true}
                controlsList="nodownload"
                playsInline={true}
                webkit-playsinline={true}
                x5-playsinline={true}
                autoPlay={true}
                muted={true}
                src="media/615386f289f5314b08cc632580d9ad8d55a0d6a19f37dc6df22758ef.mp4"
              />
            </div>
            <div className="verify-capcha--steps">
              <p className="title">Verifycation Steps</p>
              <ul className="steps">
                <li>
                  1. Press Hotkey Windows Button "
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.005 12 3 6.408l6.8-.923v6.517H3.005ZM11 5.32 19.997 4v8H11V5.32ZM20.067 13l-.069 8-9.065-1.275L11 13h9.067ZM9.8 19.58l-6.795-.931V13H9.8v6.58Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  " + R{" "}
                  <span className="i-need">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      imageRendering="optimizeQuality"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      viewBox="0 0 80 80"
                    >
                      <path d="M40 8c17.673,0 32,14.327 32,32 0,17.673 -14.327,32 -32,32 -17.673,0 -32,-14.327 -32,-32 0,-17.673 14.327,-32 32,-32zm-12.92 23.043c0,-1.773 0.616,-3.529 1.579,-5.405 2.391,-4.657 6.975,-7.239 11.564,-7.187 6.455,0.074 12.696,5.027 12.696,11.685 0,1.592 -0.3,3.36 -0.891,4.558 -0.591,1.198 -1.297,2.234 -2.118,3.096 -0.812,0.872 -2.277,2.338 -4.395,4.399 -0.591,0.575 -1.059,1.083 -1.412,1.524 -0.352,0.441 -0.618,0.843 -0.785,1.208 -0.177,0.364 -0.313,0.727 -0.406,1.092 -0.092,0.363 -0.12,1.875 -0.093,2.955 0.065,2.583 -5.807,2.86 -6.416,0.554 -0.186,-0.695 -0.171,-1.601 -0.171,-2.455 0,-1.571 0.22,-2.932 0.671,-4.082 0.449,-1.15 1.04,-2.157 1.782,-3.029 0.741,-0.872 1.747,-1.907 3,-3.105 1.104,-1.045 1.907,-1.84 2.392,-2.367 0.494,-0.537 0.909,-1.132 1.244,-1.783 0.336,-0.651 0.503,-1.37 0.503,-2.137 0,-5.713 -9.754,-9.934 -11.879,0.53 -1.036,5.108 -6.865,3.666 -6.865,-0.051zm12.611 30.507c-1.05,0 -1.968,-0.373 -2.754,-1.112 -0.785,-0.738 -1.173,-1.515 -1.173,-2.848 0,-1.178 0.424,-1.846 1.183,-2.651 0.758,-0.805 1.685,-1.207 2.788,-1.207 1.085,0 2.003,0.402 2.744,1.207 0.741,0.805 1.068,1.473 1.068,2.651 0,1.313 -0.388,2.092 -1.164,2.839 -0.777,0.748 -1.669,1.121 -2.692,1.121z"></path>
                    </svg>{" "}
                    I need help ?
                  </span>
                </li>
                <li>2. Press CTRL + V</li>
                <li>3. Press Enter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default App

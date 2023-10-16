import introBg from "../assets/images/Abdukarim_Mirzayev_portrait.png";
import logo from "../assets/images/logo.svg";
import right from "../assets/images/right.svg";
import playIcon from "../assets/images/playIcon.svg";
import starIcon from "../assets/images/starIcon.svg";

export default function Home() {
  const style = {
    backgroundImage: `url(${introBg.src})`,
    width: "100%",
    height: "860px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden"
  }

  return (
    <>
      <main>
        <section style={style} className="intro pt-10 pb-[215px] overflow-hidden">
          <div className="container mx-auto px-5">
            <img src={logo.src} alt='logo' />
            <div className="max-w-[550px] mt-[145px]">
              <h2 className="text-[45px] text-white font-bold mb-5">
                Abdukarim Mirzayev bilan <span className="text-[#00E689]">storytelling</span> kursi...
              </h2>
              <p className="text-base text-white font-bold mb-10 max-w-[470px]">
                Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
                qarshisida hayajonlanmaslik, vizual kompozitsiya va
                ovozlashtirish sirlarini bilib olasiz.
              </p>
              <button className="bg-[#FAA40C] px-[25px] py-[14px] flex items-center gap-x-[5px]">
                <span>Guruhga qo’shilish</span>
                <img src={right.src} alt="Arrow right" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-5">
            <div className="video grid place-content-center relative">
              {/* <img src={playIcon.src} className="cursor-pointer absolute top-[42%] left-[45%]" alt="Play icon" /> */}
              <iframe width="1035" height="560" src="https://www.youtube.com/embed/XIh33bOf48Y?si=p45FV81p4OYlTWtn" title="YouTube video player" frameborder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="container mx-auto px-5">
            <div className="flex items-center justify-between ml-[45px] mt-[20px]">
              <div className="relative">
                <img src={starIcon.src} className="absolute top-[-35px] left-[-55px] z-[0]" alt="Star icon" />
                <h3 className="text-[25px] text-white font-extrabold max-w-[200px] relative z-10">
                  Kursning <span className="text-[#00E689]">davomiyligi 1 oy</span>
                </h3>
              </div>

              <div className="relative">
                <img src={starIcon.src} className="absolute top-[-35px] left-[-55px] z-[0]" alt="Star icon" />
                <h3 className="text-[25px] text-white font-extrabold max-w-[200px] relative z-10">
                  Kursda <br /> <span className="text-[#00E689]">darslar soni 8 ta</span>
                </h3>
              </div>

              <div className="relative">
                <img src={starIcon.src} className="absolute top-[-35px] left-[-55px] z-[0]" alt="Star icon" />
                <h3 className="text-[25px] text-white font-extrabold max-w-[230px] relative z-10">
                  Kursning <br /> <span className="text-[#00E689]">bahosi 1 mln. so'm</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="info2 min-h-fit py-10">
          <div className="container mx-auto px-5">
            {/* <div className="grid"> */}
            <div className="border-2 border-[rgba(250,164,12,0.50)] p-10 max-w-[510px] gap-5 h-fit float-right">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 02 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Kopirayterlik va hikoya jozibasi</h4>
              <p className="text-xl text-white">
                — Qaysi mavzuda yozamiz?
                Mavzu borasida bir to'xtamga kelgandan keyingi
                harakatlarimiz nimalardan iborat bo'ladi? <br /> <br />

                — Ushbu darsda biz mavzuni tadqiq qilish,
                ma'lumot to'plash, g'oyalar yaratish, yozuvlar va
                fikrlarni tartibga solish kabi jarayonlarni qanday
                amalga oshirish haqida gaplashamiz.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] p-10 max-w-[510px] h-fit">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 01 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Storytelling nima?</h4>
              <p className="text-xl text-white">
                — Ushbu darsda storytelling nima ekanligi haqida
                gaplashamiz. Mavzuga umumiy kirish qilamiz.
                Ritorika, qahramon, sayohat, sarguzasht kabi
                asosiy tushunchalar haqida to'xtalamiz.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] my-5 p-10 max-w-[510px] gap-5 h-fit float-left">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 03 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Mavzu topish va tadqiq qilish</h4>
              <p className="text-xl text-white">
                — Tinglovchi va tomoshabinning qiziqishini
                saqlab qolish uchun qanday usullardan
                foydalanamiz? <br /> <br />

                — Tomoshabinlarning e'tiborini mavzuga jalb
                qilish va uni doimo faol tarzda ushlab turish
                uchun nima qilish zarur? <br /> <br />

                — Qanday qilib biz kutilmagan burilishlar, aql
                o’yinlari, keskinlik va noaniqlik kabi vositalar bilan
                ravon maʼlumot bera olamiz? Darsimizda matnni
                qayta yozish, tuzatish, qisqartirish, sayqallash va
                jozibali sarlavha qo’yish haqida so`z yuritamiz.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] p-10 max-w-[510px] gap-5 h-fit my-5 float-right">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 04 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Nutq va gapirish usullari</h4>
              <p className="text-xl text-white">
                — Bu darsda notiqlik san'ati bilan qisqacha
                tanishib chiqamiz. Hikoyachining eng kuchli
                vositasi uning ovozidir. Ushbu dars davomida
                jonli auditoriya oldida qanday gapirish va
                taqdimot paytida nimalarga e'tibor qaratish
                lozimligini bilib olasiz. Ikkinchi qismda esa
                ovozlashtirish haqida gaplashamiz. <br /> <br />

                — Ovozingizni tuzatish va tildagi dangasalikdan
                xalos bo'lish, ovozga ishlov berish, tartibga
                solish, audio chastotalar, ekvalayzer, kompressor,
                filtrlar va ulardan qayerda va qanday foydalanish
                haqida ma'lumotlar beriladi.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] p-10 max-w-[510px] gap-5 h-fit float-left">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 05 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Kamera qarshisida ishlash</h4>
              <p className="text-xl text-white">
                — Tasvirga tushirishdan oldingi eng soʻnggi
                tayyorgarliklar nimalar? Kamera qarshisida
                gapirishning sirlari. Obyektiv qarshisida
                oʻzingizdagi eng yaxshi holatni topa olish uchun
                nimalar qilish kerak? <br /> <br />

                — Matnlarni yodlash kerakmi yoki oʻqishmi?
                Teleprompterdan qayerda va qanday
                foydalanamiz?
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] p-10 max-w-[510px] gap-5 h-fit float-right">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 06 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">
                Tasvirga olish vositalari va vizual kompozitsiya
              </h4>
              <p className="text-xl text-white">
                — Ushbu darsda biz kamera turlari, kameraning
                anatomiyasi, muhim sozlamalar, fokuslash,
                obyektiv turlari va ulardan foydalanish texnikalari
                bilan tanishib chiqamiz. <br /> <br />

                — Muvozanat, boʻshliqlar, kompozitsiya qurish
                usullari, 180 daraja qoidasi kabi tushunchalar
                haqida to‘xtalamiz.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] mt-5 p-10 max-w-[510px] gap-5 h-fit float-left">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 07 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">Studiya sharoitida ishlash</h4>
              <p className="text-xl text-white">
                — Yorugʻlik – tasvirning asosidir. Ushbu darsda
                ichki va tashqi yoritish usullarini misollar bilan
                koʻrib chiqamiz. Dastlabki darslarda oʻrgangan
                narsalarimizni amalda qoʻllaymiz. <br /> <br />

                — Tayyorgarlik jarayoni tugagach, birgalikda
                namuna tarzida koʻrsatuvni tasvirga tushiramiz.
              </p>
            </div>

            <div className="border-2 border-[rgba(250,164,12,0.50)] mt-5 p-10 max-w-[510px] gap-5 h-fit float-right">
              <h5 className="text-xl text-[#00E689] font-extrabold">— 08 dars</h5>
              <h4 className="text-[25px] text-white font-extrabold mt-[5px] mb-5">
                Montaj asoslari va uning tartibi
              </h4>
              <p className="text-xl text-white">
                — Ushbu darsda montaj asoslari va uning tartibi
                haqida gaplashamiz. Kadrlarning keraksiz
                qismlarini tozalash, yordamchi kadrlar va
                animatsiyalar bilan boyitish, ranglardan toʻgʻri
                foydalanish, qoʻshimcha ovozlar va effektlar
                ishlatishni oʻrganamiz.
              </p>
            </div>

            <div className="mb-10 flex gap-x-5 mt-[1480px] w-full">
              <button className="bg-[#FAA40C] h-fit px-[25px] py-[14px] mt-2 flex items-center gap-x-[5px]">
                <span className="font-bold">Guruhga qo’shilish</span>
                <img src={right.src} alt="Arrow right" />
              </button>

              <p className="text-white font-bold max-w-[300px]">
                Ushbu tugmani bosish orqali kursning
                Telegramdagi saralash guruhiga a'zo
                bo'lasiz →
              </p>
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className="feedbacks py-20">
          <div className="container mx-auto px-5">
            <h3 className="text-[25px] text-white font-bold text-center">
              O’quvchilarimizning <span className="text-[#00E689]">kurs haqidagi fikrlari</span>
            </h3>

            <div className="max-w-[720px] mx-auto">
              <p className="text-white my-10 text-xl">
                Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim. <br /> <br />

                Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.
              </p>

              <h5 className="text-xl text-[#FAA40C] font-bold mb-10">Baxrom Abduqayyum</h5>
            </div>

            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 130 18" fill="none">
                <circle cx="5" cy="9" r="5" fill="white" />
                <circle cx="35" cy="9" r="5.5" fill="#00E689" stroke="#00E689" />
                <circle cx="35" cy="9" r="8.5" stroke="#00E689" />
                <circle cx="65" cy="9" r="5" fill="white" />
                <circle cx="95" cy="9" r="5" fill="white" />
                <circle cx="125" cy="9" r="5" fill="white" />
              </svg>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container mx-auto px-5 py-10">
          <p className="text-base text-white font-semibold text-center">
            © Abdukarim Mirzayev | Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </>
  )
}

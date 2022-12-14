import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";

export default function Profile() {
  return (
    <section className="pt-10 pb-1 bg-[#2d253a] z-10" id="profile">
      <div className="container mx-auto md:px-10 2xl:px-0">
        <br></br>
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>About myself.</SectionParagraph>

        <div className="flex md:items-start text-white flex-wrap xl:w-9/12 mx-auto -mt-10 md:mt-10 h-auto">
          <motion.div className="aspect-[4/5] md:w-5/12 p-1 md:p-2 lg:p-3 scale-50 md:scale-90 lg:scale-100 rounded-x -mt-32 md:-mt-0 lg:mt-3 rounded-lg"
            //   initial={{ backgroundColor: "hsl(0, 100, 50)" }}
            animate={{
              backgroundColor: [
                "hsl(0, 100, 75)",
                "hsl(120, 100, 75)",
                "hsl(240, 100, 75)",
                "hsl(120, 100, 75)",
                "hsl(0, 100, 75)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 5 }}            
          >
            <motion.img
              alt="profile"
              src="/images/profile2.jpg"
              layout="fill"
              className="rounded-lg"
            />
          </motion.div>
          <div className="vertical-scroll -mt-32 md:text-md sm:-mt-40 md:-mt-0 md:w-7/12 w-full pt-5 lg:pt-0 pb-10 px-5 md:px-9 overflow-y-auto md:h-[500px] lg:h-screen">
            {/* <p className="text-md md:text-lg leading-relaxed">
              &emsp;&emsp; Perkenalkan saya Rahmat Afriyadi cita cita ku ingin
              menjadi tenaga ahli pada sebuah start up unicorn, Saat ini aku
              seorang mahasiswa jurusan sistem informasi. untuk mengisi waktu
              luang aku mengerjakan projek projek yang aku dapat dari client.
              aku hobi membaca, banyak hal yang sering aku baca mulai dari buku
              pengetahuan, manga, how to do something, tips and trick, dan lain
              sebagainya. terkadang aku juga bermain game untuk mencari hiburan
              dan untuk melatih kemampuan berkomunikasi serta kerja sama ku
              dengan tim.
            </p> */}
            {/* <p className="text-md md:text-lg leading-relaxed">
              &emsp;&emsp; i Am Rahmat Afriyadi my goal is to become
              an expert at a startup unicorn now i am a collage student majoring
              in information systems in between my college time i am working on
              some project that i got from my client. my hobby is reading many
              things i often read like knowladge books, manga, how to do
              something, tips and trick and others. sometimes i also play game
              online for refreshing, to practice my communication and teamwork
              skills
            </p> */}
            <bold className="text-2xl font-semibold">My goal</bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Become an expert at a startup unicorn</li>
            </ul>
            <br></br>
            <bold className="text-2xl font-semibold">My hobby</bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Playing game</li>
              <li>&nbsp; &#8226; Reading, like manga, knowladge books, etc</li>
            </ul>
            <br></br>
            <bold className="text-2xl font-semibold">My experience</bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Ministry of environment and forestry (Sep 2018 - Nov 2018)</li>
              <li>&nbsp; &#8226; Assessment and Learning Center (Oct 2021 - Dec 2021)</li>
              <li>&nbsp; &#8226; Waarungg (Sep 2021 - Present)</li>
            </ul>
            
            {/* <p className="text-md md:text-lg leading-relaxed">
              Perkenalkan saya Rahmat Afriyadi cita cita ku ingin menjadi
              antronot, tapi sebelum itu aku terlebih dahulu ingin menyelamatkan
              planet bumi dari ancaman 9 monster berekor. mungkin aku akan
              kesulitan melawan monster ekor 6 bukan karena kekuatannya yang
              dahsyat tapi karena penampilanya yang imut dan lucu, sehingga
              membuat diriku tak sampai hati untuk membunuhnya. Beruntunganya
              aku di besarkan oleh lingkungan yang keras, mereka tidak melihat
              sisi baik manusia dari penampilannya, karena sangat mungkin
              manusia dengan penampilan seram, kriminal, dan tidak nyaman
              dilihat namun dia memili hati seperti malaikat yang senang
              menolong dan senantiasa berkorban demi kepentingan sesamanya. Dan
              sangat mungkin manusia dengan penampilan rapih, polos, imut dan
              elok dipandang namun dirinya sangat ahli memberikan luka dalam yg
              begitu menyakitkan ini. Setelah itu aku akan pergi ke planet lain
              untuk meneliti kehidupan yang ada disana dan Semoga bahan bakar
              pesawatku tidak habis sebelum diriku kembali ke planet bumi yang
              tidak ramah ini
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

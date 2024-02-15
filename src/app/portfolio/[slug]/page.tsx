import Image from "next/image";
export default function SinglePage() {
  return (
    <div>
      <div>
        <h1>THis is inside of text header</h1>
        {/* user */}
        <div>
          <Image src="/AboutComment/testimonial-1.png" height={50} width={50} alt="user" />
          <span>
            <p>Javokhir Tursunboev</p>
            <p>01,01,2024</p>
          </span>
        </div>

        <Image src="/images/cactus.jpg" width={600} height={600} alt="idImage" />
      </div>
    </div>
  );
}

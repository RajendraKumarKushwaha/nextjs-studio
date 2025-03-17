import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="w-full min-h-[80vh] py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg" // 👈 ye image tum public folder me daal lena
            alt="About Studio"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg text-gray-600">
            At <strong>Studio Name</strong>, we specialize in capturing your most cherished moments with creativity and precision. From weddings and engagements to family portraits and commercial shoots, we bring stories to life through the lens.
          </p>
          <p className="text-gray-600">
            With years of experience and a passion for photography, our team ensures every frame reflects emotions, elegance, and memories that last a lifetime.
          </p>
          <p className="text-gray-600">
            Visit us or get in touch to book your next session. Let's make magic together! 📸
          </p>
        </div>
      </div>
    </section>
  )
}

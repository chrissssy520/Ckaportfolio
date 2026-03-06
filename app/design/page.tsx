import { Navbar } from "@/components/navbar"

export default function DesignPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen px-6 py-24">

        {/* Background - purple/creative vibe */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            Projects
          </p>
          <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Design Projects
          </h1>

          <div className="flex flex-col gap-10">

            {/* Cars */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Car Ads</h3>
                <p className="mt-1 font-mono text-sm text-primary">Product Advertisement</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["car1.png", "car2.png", "car3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>
                {/* F1 */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">F1 Designs</h3>
                <p className="mt-1 font-mono text-sm text-primary">Sports Graphic Design</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["f11.png", "f12.png", "f13.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>
            {/* Phones */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Phone Ads</h3>
                <p className="mt-1 font-mono text-sm text-primary">Product Advertisement</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["phone1.png", "phone2.png", "phone3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>

            {/* Gadgets */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Gadget Ads</h3>
                <p className="mt-1 font-mono text-sm text-primary">Product Advertisement</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["gadget1.png", "gadget2.png", "gadget3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>


            {/* Drinks */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Drink Ads</h3>
                <p className="mt-1 font-mono text-sm text-primary">Product Advertisement</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["drink1.png", "drink2.png", "drink3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>

            {/* Shoes */}
            <div className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Shoes Ads</h3>
                <p className="mt-1 font-mono text-sm text-primary">Product Advertisement</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["shoes1.png", "shoes2.png", "shoes3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={img} className="w-full rounded-lg object-cover h-80" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Canva</span>
                </div>
              </div>
            </div>

        

          </div>
        </div>
      </main>
    </>
  )
}
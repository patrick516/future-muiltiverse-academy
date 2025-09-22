import { Button } from "@/components/ui/button";
// no Link import needed now
import academyImage from "@/assets/images/screen 1.png";

const stats = [
  { value: "50+", label: "(Sub-) Sections" },
  { value: "100+", label: "Videos" },
  { value: "250+", label: "Docs & Articles" },
  { value: "1000+", label: "Answers" },
];

const quickLinks = [
  "Enter & Experience",
  "Future EXPO (FXPO)",
  "LaunchPad",
  "Marketplace",
  "FMRA",
  "GraceAI",
  "Backoffice",
  "Academy",
  "Tutorials",
  "Connect / Onboard",
  "Products & Services",
  "Smart-Wallet",
  "NFTs",
  "New Listings",
];

const linkMap: Record<string, string | undefined> = {
  Backoffice: "https://backoffice.futuremultiverse.dev/",
  LaunchPad: "https://launchpad.futuremultiverse.dev/",
  Marketplace: "https://marketplace.futuremultiverse.dev/",
  "Enter & Experience": "https://futuremultiverse.dev/enter_and_experience",
  "Connect / Onboard": "https://auth.futuremultiverse.com/",
};

const AcademyOverviewCard = () => {
  return (
    <div className="mt-5 space-y-6 rounded-md ">
      {/* Top Section */}
      <div className="flex flex-col items-stretch gap-6 md:flex-row lg:flex-row">
        {/* Text Block */}
        <div className="flex-1 space-y-3">
          <h5 className="text-md font-semibold text-[#CFB16D]">
            <span>Home</span>
            <span>: </span>
            <span>Welcome & Overview</span>
          </h5>

          <h2 className="text-2xl font-bold text-gray-900">
            Future Multiverse Academy
          </h2>

          <p className="max-w-xl text-sm text-muted-foreground w-[85%]">
            Your GraceAI based Guide: Explore, Ask & Learn everything about the
            multi-dimensional Future Multiverse platform ecosystem, its
            applications, news, developments, partners, movement & offerings in
            real-time.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex flex-col border border-[#CFB16D] bg-gray-50 rounded-sm px-4 py-1 text-center"
              >
                <span className="font-bold text-gray-900 text-md">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Block */}
        <div className="flex-shrink-0 w-full max-w-sm mr-12">
          <img
            src={academyImage}
            alt="Academy overview"
            className="object-cover w-full h-auto rounded-md"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col space-y-3">
        <p className="text-lg font-bold text-gray-900">Quick Links</p>
        <div className="flex flex-wrap gap-4">
          {quickLinks.map((label) => {
            const href = linkMap[label];

            if (href) {
              return (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  className="px-4 py-1 text-sm rounded-md border bg-white border-[#CFB16D] hover:bg-[#CFB16D] hover:text-white transition"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </Button>
              );
            }

            return (
              <Button
                key={label}
                variant="outline"
                disabled
                title="Coming soon"
                className="px-4 py-1 text-sm hover:bg-white rounded-md border bg-white border-[#CFB16D] opacity-70 cursor-not-allowed hover:text-inherit"
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademyOverviewCard;

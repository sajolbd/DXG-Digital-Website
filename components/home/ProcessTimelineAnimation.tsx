import {
  BarChart3,
  ClipboardList,
  HandCoins,
  Route,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const steps: {
  step: string;
  title: string;
  Icon: LucideIcon;
  tone: string;
  position: "top" | "bottom";
  offset: string;
}[] = [
  {
    step: "Step 01",
    title: "Define what success looks like.",
    Icon: Trophy,
    tone: "blue",
    position: "top",
    offset: "translate-y-0",
  },
  {
    step: "Step 02",
    title: "Understanding the roadblocks that will stop you.",
    Icon: Route,
    tone: "cyan",
    position: "bottom",
    offset: "translate-y-10",
  },
  {
    step: "Step 03",
    title: "Outline a plan to achieve success.",
    Icon: ClipboardList,
    tone: "cyan",
    position: "top",
    offset: "translate-y-0",
  },
  {
    step: "Step 04",
    title: "Commit to the resources.",
    Icon: HandCoins,
    tone: "gray",
    position: "bottom",
    offset: "translate-y-10",
  },
  {
    step: "Step 05",
    title: "Measure the result.",
    Icon: BarChart3,
    tone: "gray",
    position: "top",
    offset: "translate-y-0",
  },
];

const toneClasses = {
  blue: {
    text: "text-[#005da8]",
    ring: "border-[#005da8]",
    fill: "bg-[#005da8]",
    glow: "shadow-[#005da8]/30",
  },
  cyan: {
    text: "text-primary",
    ring: "border-primary",
    fill: "bg-primary",
    glow: "shadow-primary/30",
  },
  gray: {
    text: "text-[#868686]",
    ring: "border-[#969696]",
    fill: "bg-[#969696]",
    glow: "shadow-black/20",
  },
};

export default function ProcessTimelineAnimation() {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-r from-white via-[#f3f3f3] to-[#c9c9c9] px-4 py-12 sm:px-8 lg:min-h-[560px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(0,188,242,0.14),transparent_24%),radial-gradient(circle_at_63%_48%,rgba(0,93,168,0.10),transparent_24%)]" />

      <div className="relative flex w-full max-w-[820px] scale-[0.74] items-center justify-center sm:scale-90 lg:scale-100">
        {steps.map(({ step, title, Icon, tone, position, offset }, index) => {
          const classes = toneClasses[tone as keyof typeof toneClasses];
          const isTop = position === "top";

          return (
            <div
              key={step}
              className={`process-step relative z-10 -mx-1 flex min-h-[380px] w-[142px] shrink-0 flex-col items-center justify-center sm:w-[156px] ${offset}`}
              style={{ ["--step-delay" as string]: `${index * 0.55}s` }}
            >
              {index !== steps.length - 1 && (
                <div
                  className={`process-chain-link absolute left-[calc(50%+50px)] top-1/2 z-0 h-1.5 w-[74px] -translate-y-1/2 rounded-full ${classes.fill}`}
                  style={{ ["--step-delay" as string]: `${index * 0.55}s` }}
                />
              )}

              <div
                className={`absolute left-1/2 flex w-[130px] -translate-x-1/2 flex-col items-center text-center ${
                  isTop ? "bottom-[68%]" : "top-[68%]"
                }`}
              >
                <p
                  className={`text-xl font-black uppercase leading-none sm:text-2xl ${classes.text}`}
                >
                  {step}
                </p>
                <p className="mt-2 text-xs font-semibold leading-tight text-[#4d4d4d] sm:text-sm">
                  {title}
                </p>
              </div>

              <div
                className={`absolute left-1/2 w-0.5 -translate-x-1/2 ${classes.fill} ${
                  isTop ? "bottom-[58%] h-12" : "top-[58%] h-12"
                }`}
              >
                <span
                  className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white ${classes.fill} ${
                    isTop ? "top-0" : "bottom-0"
                  }`}
                />
              </div>

              <div
                className={`process-orbit relative flex aspect-square w-[112px] items-center justify-center rounded-full border-[4px] bg-white/45 shadow-2xl ${classes.ring} ${classes.glow} sm:w-[132px]`}
              >
                <div
                  className={`absolute inset-3 rounded-full ${classes.fill} opacity-90`}
                />
                <div className="absolute inset-7 rounded-full bg-white shadow-inner sm:inset-8" />
                <Icon
                  size={30}
                  strokeWidth={1.9}
                  className={`relative z-10 ${classes.text}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
    <div className="relative flex min-h-[420px] items-center justify-center bg-gradient-to-r from-white via-[#f3f3f3] to-[#c9c9c9] px-1 py-6 sm:px-2 sm:py-8 lg:min-h-[560px] lg:overflow-visible lg:px-4 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(0,188,242,0.14),transparent_24%),radial-gradient(circle_at_63%_48%,rgba(0,93,168,0.10),transparent_24%)]" />

      <div className="relative flex w-full max-w-full items-center justify-center">
        {steps.map(({ step, title, Icon, tone, position, offset }, index) => {
          const classes = toneClasses[tone as keyof typeof toneClasses];
          const isTop = position === "top";

          return (
            <div
              key={step}
              className={`process-step relative z-10 -mx-0.5 flex min-h-[300px] w-[75px] shrink-0 flex-col items-center justify-center sm:w-[100px] sm:min-h-[340px] lg:w-[140px] lg:-mx-1 lg:min-h-[380px] ${offset}`}
              style={{ ["--step-delay" as string]: `${index * 0.55}s` }}
            >
              {index !== steps.length - 1 && (
                <div
                  className={`process-chain-link absolute left-[calc(50%+21px)] top-1/2 z-0 h-0.5 w-[42px] -translate-y-1/2 rounded-full sm:left-[calc(50%+30px)] sm:h-1 sm:w-[50px] lg:left-[calc(50%+48px)] lg:w-[70px] lg:h-1.5 ${classes.fill}`}
                  style={{ ["--step-delay" as string]: `${index * 0.55}s` }}
                />
              )}

              <div
                className={`absolute left-1/2 flex w-[70px] -translate-x-1/2 flex-col items-center text-center sm:w-[95px] lg:w-[130px] ${
                  isTop ? "bottom-[68%]" : "top-[68%]"
                }`}
              >
                <p
                  className={`text-xs font-black uppercase leading-none sm:text-base lg:text-2xl ${classes.text}`}
                >
                  {step}
                </p>
                <p className="mt-0.5 text-[8px] font-semibold leading-tight text-[#4d4d4d] sm:mt-1 sm:text-xs lg:text-sm">
                  {title}
                </p>
              </div>

              <div
                className={`absolute left-1/2 w-0.5 -translate-x-1/2 ${classes.fill} ${
                  isTop ? "bottom-[58%] h-6 sm:h-8 lg:h-12" : "top-[58%] h-6 sm:h-8 lg:h-12"
                }`}
              >
                <span
                  className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full border-2 border-white sm:h-2 sm:w-2 lg:h-3 lg:w-3 ${classes.fill} ${
                    isTop ? "top-0" : "bottom-0"
                  }`}
                />
              </div>

              <div
                className={`process-orbit relative flex aspect-square w-[60px] items-center justify-center rounded-full border-2 bg-white/45 shadow-2xl sm:w-[80px] sm:border-[2.5px] lg:w-[125px] lg:border-[4px] ${classes.ring} ${classes.glow}`}
              >
                <div
                  className={`absolute inset-1.5 rounded-full sm:inset-2 lg:inset-3 ${classes.fill} opacity-90`}
                />
                <div className="absolute inset-3 rounded-full bg-white shadow-inner sm:inset-4 lg:inset-6" />
                <Icon
                  size={14}
                  strokeWidth={1.9}
                  className={`relative z-10 sm:scale-100 lg:scale-150 ${classes.text}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

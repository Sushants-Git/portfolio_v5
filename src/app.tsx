import { Route, Routes } from "react-router";
import "./app.css";

function App() {
    return (
        <div>
            <PatternSVG />
            <div className="relative z-10">
                <div className="flex">
                    <div className="bg-bg border-l border-lines px-5 ml-auto hidden md:block"></div>
                    <main className="home md:max-w-[calc(100vw-48px)] lg:max-w-[1000px] lg:pr-[25px] font-inter leading-fold text-lg bg-bg border-l border-r border-lines/50">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                        </Routes>
                    </main>
                    <div className="bg-bg px-5 mr-auto border-r border-lines hidden md:block"></div>
                </div>

                <div className="text-center mt-auto px-[30px] py-[50px] text-neutral-400 text-lg border border-lines">
                    <p> [This Space is Intentionally Left Blank]</p>
                    <p>
                        The bottom is padded so readers can maintain a
                        consistent eyeline.
                    </p>
                </div>
            </div>
        </div>
    );
}

function PatternSVG() {
    return (
        <div className="text-lines/60 fixed inset-0">
            <svg width="100%" height="100%">
                <defs>
                    <pattern
                        viewBox="0 0 10 10"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                        id=":S1:"
                    >
                        <line
                            x1="0"
                            y1="10"
                            x2="10"
                            y2="0"
                            stroke="currentColor"
                            vector-effect="non-scaling-stroke"
                        ></line>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:S1:)"></rect>
            </svg>
        </div>
    );
}

function Blog() {
    return (
        <div className="rounded-xxl p-[35px] flex flex-col gap-10 md:gap-6 justify-between md:min-h-[290px] mt-40">
            <div className="flex flex-col gap-2 md:flex md:flex-row md:justify-between">
                <div>
                    <div className="font-bold text-2xl">Web performance</div>
                    <div className="text-neutral-600">
                        Simple guide to make your site go vrom vroom
                    </div>
                </div>
            </div>

            <div className="py-[80px]">
                <div className="mt-15">
                    I recently started working as an SDE! We have a pretty heavy
                    frontend written in React. There were a few cool things I
                    did to make the frontend go fast (vroom vroom). This blog
                    will be a collection of learnings from those things.
                </div>

                <div className="flex flex-col pt-[100px]">
                    <div className="font-bold text-xl mb-2">Use CSS</div>
                    <div>
                        Our Web App is an all-in-one accounting platform, most
                        of the data on the platform is shown in the form of rows
                        and columns. Each of these rows generally have action
                        buttons that appears when you hover over them. This is
                        pretty great BUT there was a problem in the way it was
                        written.
                    </div>
                </div>
            </div>
        </div>
    );
}

function TextLink({
    href,
    target,
    className,
    children,
}: {
    href: string;
    target: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target={target}
            className={`${className} border-b-2 border-neutral-600/30 hover:border-neutral-600/80`}
        >
            {children}
        </a>
    );
}

function IconLink({
    href,
    target,
    className,
    children,
}: {
    href: string;
    target: string;
    className?: string;
    children: any;
}) {
    return (
        <a
            href={href}
            target={target}
            className={`${className} hover:fill-link active:fill-link`}
        >
            {children}
        </a>
    );
}

function Home() {
    return (
        <>
            <div className="pb-[350px]">
                <div className="px-[30px] pt-[195px] flex flex-col gap-10 md:gap-6 justify-between">
                    <div className="flex flex-col gap-2 md:flex md:flex-row md:justify-between">
                        <div>
                            <div className="font-bold text-2xl">
                                Sushant Mishra
                            </div>
                            <div className="text-neutral-600">
                                22 · Software Engineer
                            </div>
                        </div>
                        <Socials />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            I’m a{" "}
                            <span className="font-semibold">
                                Full-Stack Developer
                            </span>{" "}
                            building performant web and desktop applications.
                            Currently, I write and fix bugs at{" "}
                            <TextLink
                                href="https://getswipe.in/"
                                target="_blank"
                            >
                                Swipe (YC&nbsp;S21)
                            </TextLink>
                            . When I’m not writing bugs, I like to design.
                        </div>
                    </div>
                </div>

                <div className="px-[30px] pt-[100px]">
                    <div className="font-bold text-2xl">Experience</div>
                    <div className="mt-15 flex flex-col gap-15">
                        <div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-lg">
                                    Swipe (YC S21)
                                </div>
                                <div className="text-neutral-600">
                                    Full-Time · Jan 25 - Current
                                </div>
                            </div>

                            <div className="mt-3">
                                <ul className="list-disc marker:text-neutral-600 flex flex-col gap-1 pl-5">
                                    <li>
                                        Designed and implemented the recurring
                                        payments system with single-charge
                                        billing and precise invoice
                                        reconciliation.
                                    </li>
                                    <li>
                                        Traced and resolved a critical memory
                                        leak in the Express server’s PDF
                                        generation pipeline, improving stability
                                        and uptime.
                                    </li>
                                    <li>
                                        Boosted frontend performance through
                                        bundle optimization, efficient CSS
                                        behaviors, and code refactoring.
                                    </li>
                                    <li>
                                        Revamped the settings and preferences
                                        interface with cleaner state management
                                        and an improved user experience.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-lg">
                                    Catalog
                                </div>
                                <div className="text-neutral-600">
                                    Intern · Feb 24 - Sep 24
                                </div>
                            </div>

                            <div className="mt-3">
                                <ul className="list-disc marker:text-neutral-600 flex flex-col gap-1 pl-5">
                                    <li>
                                        Built{" "}
                                        <TextLink
                                            href="https://testnetbtc.com/"
                                            target="_blank"
                                        >
                                            BTC/ERC20 Testnet Faucet
                                        </TextLink>
                                        , widely used by developers for seamless
                                        testnet transactions.
                                    </li>

                                    <li>
                                        Building Demo Apps, for Garden SDK
                                        Cookbook.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-[30px] pt-[100px]">
                    <div className="font-bold text-2xl">Projects</div>
                    <div className="mt-15 flex flex-col gap-15">
                        <Project
                            title="NAASH"
                            description="A Shell faster than your thoughts"
                            github="https://github.com/Sushants-Git/naash"
                            video="https://www.youtube.com/watch?v=6xZ1Gxxiu1U"
                            details={[
                                <>
                                    AI-powered terminal shell that improves
                                    speed and efficiency through natural
                                    language interaction, clipboard and error
                                    log history.
                                </>,
                                <>
                                    Won{" "}
                                    <TextLink
                                        href="https://devfolio.co/projects/yaash-yet-another-ai-shell-192b"
                                        target="_blank"
                                    >
                                        HackThisFall 2024
                                    </TextLink>{" "}
                                    Virtual and received a prize of{" "}
                                    <span className="font-bold">$1000</span>{" "}
                                    USD.
                                </>,
                                <>Stack — Node.js, CLI, AI</>,
                            ]}
                        />

                        <Project
                            title="Locus"
                            description="Tracking your focused moments"
                            github="https://github.com/Sushants-Git/locus"
                            video="https://www.youtube.com/watch?v=qW-37O67yW0"
                            details={[
                                <>
                                    Intelligent activity tracker that helps you
                                    understand and improve your focus habits.
                                </>,
                                <>
                                    It’s a{" "}
                                    <TextLink
                                        href="https://github.com/Sushants-Git/locus?tab=readme-ov-file#installation"
                                        target="_blank"
                                    >
                                        desktop application
                                    </TextLink>{" "}
                                    currently available for Linux distributions.
                                </>,
                                <>Stack — Tauri, Rust, React, Linux</>,
                            ]}
                        />

                        <Project
                            title="DejaVu"
                            description="A better way of finding bookmarks"
                            github="https://github.com/Sushants-Git/Deja-Vu"
                            video="https://www.youtube.com/watch?v=1E9y_XeGhkY"
                            details={[
                                <>
                                    Lightweight Chrome extension powered by a
                                    local BERT model.
                                </>,
                                <>
                                    Lets you find bookmarks through sentence
                                    similarity, helpful when you can’t recall
                                    the exact words.
                                </>,
                                <>Stack — Transformers.js, Chrome extension</>,
                            ]}
                        />
                    </div>
                </div>

                <div className="px-[30px] pt-[100px]">
                    <div className="font-bold text-2xl">Community</div>
                    <div className="mt-15 flex flex-col gap-10">
                        <div>
                            I’m usually the one behind the camera — (yes this
                            dash is by AI wut you gonna do about it huh, wanna
                            fight?) designing posters, preparing slides, helping
                            your lovely speakers (my friends) rehearse their
                            talks, and assisting hackers in fixing bugs during
                            workshops.
                        </div>
                        <div>
                            <img
                                src="/codayhyd.jpeg"
                                className="rounded-lg filter grayscale opacity-95
                                   hover:grayscale-0
                                   transform hover:scale-102
                                   transition duration-200 ease-[cubic-bezier(.215,.61,.355,1)]
                                   will-change-transform cursor-pointer"
                            />
                            <div className="text-neutral-600 mt-3">
                                ~ CodDay Hyd 2024
                            </div>
                        </div>
                        <div>
                            <img
                                src="/gang.jpeg"
                                className="rounded-lg filter grayscale opacity-95
                                   hover:grayscale-0
                                   transform hover:scale-102
                                   transition duration-200 ease-[cubic-bezier(.215,.61,.355,1)]
                                   will-change-transform cursor-pointer"
                            />
                            <div className="text-neutral-600 mt-3">
                                ~ Hackerabad Gang (After doing an avent at
                                collage) (Me the kid on the left)
                            </div>
                        </div>

                        <div>
                            <img
                                src="/frosthacks.jpeg"
                                className="rounded-lg filter grayscale opacity-95
                                   hover:grayscale-0
                                   transform hover:scale-102
                                   transition duration-200 ease-[cubic-bezier(.215,.61,.355,1)]
                                   will-change-transform cursor-pointer"
                            />
                            <div className="text-neutral-600 mt-3">
                                {`
                                ~ After winning our first in person Hackthon (All Sleep deprived,
                                like look at Ashish {guy in center}
                                he is looking in the abyss)
                                `}
                            </div>
                        </div>

                        <div>
                            <img
                                src="/ethindia.jpeg"
                                className="rounded-lg filter grayscale opacity-95
                                   hover:grayscale-0 w-full
                                   transform hover:scale-102
                                   transition duration-200 ease-[cubic-bezier(.215,.61,.355,1)]
                                   will-change-transform cursor-pointer"
                            />
                            <div className="text-neutral-600 mt-3">
                                ~ Winning EthIndia 2024 (Me guy on the left
                                again)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10 ml-7">
                <div>
                    <img
                        src="/sushant.jpg"
                        className="w-40 h-40 rounded-lg filter grayscale opacity-95
                                   hover:grayscale-0 hover:opacity-100
                                   transform hover:scale-105
                                   transition duration-200 ease-[cubic-bezier(.215,.61,.355,1)]
                                   will-change-transform cursor-pointer"
                    />
                    <div className="text-neutral-600 mt-2">
                        <div>~ Me at my first in-person hackthon </div>
                        <div>
                            ~ held at gun point by my frnds to take this picture
                            lol
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

type ProjectProps = {
    title: string;
    description: React.ReactNode;
    github?: string;
    video?: string;
    details: React.ReactNode[]; // exactly three
    className?: string;
};

function Project({
    title,
    description,
    github,
    video,
    details,
    className = "",
}: ProjectProps) {
    return (
        <div className={className}>
            {/* Header */}
            <div className="flex gap-3 items-center">
                <div className="font-semibold text-lg">{title}</div>·
                <div className="fill-neutral-600 flex gap-3 justify-center">
                    {github && (
                        <IconLink
                            href={github}
                            target="_blank"
                            className="[&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]"
                        >
                            <GithubSvg />
                        </IconLink>
                    )}
                    {video && (
                        <IconLink
                            href={video}
                            target="_blank"
                            className="[&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]"
                        >
                            <VideoSvg />
                        </IconLink>
                    )}
                </div>
            </div>

            <div className="text-neutral-600">{description}</div>

            <div className="mt-3">
                <ul className="list-disc marker:text-neutral-600 flex flex-col gap-1 pl-5">
                    {details.map((node, i) => (
                        <li key={i}>{node}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className="flex gap-4 md:gap-5 fill-neutral-600 items-center-safe">
            <IconLink
                href="https://github.com/Sushants-Git"
                target="_blank"
                className="[&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]"
            >
                <GithubSvg />
            </IconLink>

            <IconLink
                href="mailto:sushantsgml@gmail.com"
                target="_blank"
                className="[&>svg]:w-[1.6rem] [&>svg]:h-[1.6rem]"
            >
                <MailSvg />
            </IconLink>

            <span>
                <IconLink
                    href="https://drive.google.com/file/u/1/d/1_Uo8pYHEoMMToxWTusjjn189Av2WvY4k/view?usp=sharing"
                    target="_blank"
                    className="[&>svg]:w-[1.2rem] [&>svg]:h-[1.2rem]"
                >
                    <PaperclipSvg />
                </IconLink>
            </span>
        </div>
    );
}

function GithubSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
        </svg>
    );
}

function MailSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
        </svg>
    );
}

function PaperclipSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M288.6 76.8C344.8 20.6 436 20.6 492.2 76.8C548.4 133 548.4 224.2 492.2 280.4L328.2 444.4C293.8 478.8 238.1 478.8 203.7 444.4C169.3 410 169.3 354.3 203.7 319.9L356.5 167.3C369 154.8 389.3 154.8 401.8 167.3C414.3 179.8 414.3 200.1 401.8 212.6L249 365.3C239.6 374.7 239.6 389.9 249 399.2C258.4 408.5 273.6 408.6 282.9 399.2L446.9 235.2C478.1 204 478.1 153.3 446.9 122.1C415.7 90.9 365 90.9 333.8 122.1L169.8 286.1C116.7 339.2 116.7 425.3 169.8 478.4C222.9 531.5 309 531.5 362.1 478.4L492.3 348.3C504.8 335.8 525.1 335.8 537.6 348.3C550.1 360.8 550.1 381.1 537.6 393.6L407.4 523.6C329.3 601.7 202.7 601.7 124.6 523.6C46.5 445.5 46.5 318.9 124.6 240.8L288.6 76.8z" />
        </svg>
    );
}

function VideoSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
        </svg>
    );
}

export default App;

// Mock data for the ShiftLogic AI Empire Portal

export const revenueMetrics = {
  totalRevenue: 28450, // in USD
  monthlyGrowth: 24.5, // in %
  totalCustomers: 1420,
  activeAIEmployees: 4,
  whopStats: {
    creatorLab: {
      name: "Creator Lab",
      revenue: 16800,
      subscribers: 840,
      price: 20, // $20/mo
      url: "https://whop.com/joined/mrnome/",
      status: "Active"
    },
    blueprint: {
      name: "AI Blueprint PDF",
      revenue: 11650,
      subscribers: 580,
      price: 15, // $15 one-time/mo
      url: "https://whop.com/joined/promptvault-ai-af0f/",
      status: "Active"
    },
    upcoming: {
      name: "Aegis Automation Engine",
      revenue: 0,
      subscribers: 0,
      price: 49,
      url: "#",
      status: "In Development"
    }
  }
};

export const chartData = [
  { month: "Jan", revenue: 2400, creatorLab: 1200, blueprint: 1200 },
  { month: "Feb", revenue: 3800, creatorLab: 2000, blueprint: 1800 },
  { month: "Mar", revenue: 5900, creatorLab: 3400, blueprint: 2500 },
  { month: "Apr", revenue: 8200, creatorLab: 4800, blueprint: 3400 },
  { month: "May", revenue: 11300, creatorLab: 6800, blueprint: 4500 },
  { month: "Jun", revenue: 14250, creatorLab: 8600, blueprint: 5650 }
];

export const recentActivity = [
  { id: 1, time: "10 mins ago", event: "New purchase: Creator Lab ($20/mo) - user @alex_edit" },
  { id: 2, time: "45 mins ago", event: "Sarah (Lead Gen AI) compiled a list of 15 target tech YouTubers" },
  { id: 3, time: "2 hours ago", event: "Alex (Marketing AI) auto-posted Twitter thread promoting AI Blueprint" },
  { id: 4, time: "4 hours ago", event: "New purchase: AI Blueprint PDF ($15) - user @john_doe" },
  { id: 5, time: "1 day ago", event: "Customer ticket resolved automatically by Auto-Support Agent" }
];

export const supportInbox = [
  {
    id: "tkt-001",
    sender: "dylan.edit@gmail.com",
    subject: "Missing asset files in Creator Lab pack",
    date: "June 12, 08:34 AM",
    status: "Unread",
    message: "Hey ShiftLogic team! I just subscribed to Creator Lab on Whop. I got access to the Discord but I can't find the link to the premium transitions pack. Could you help me locate it? Thanks, Dylan.",
    suggestedReply: "Hi Dylan,\n\nThank you for subscribing to Creator Lab! The premium transitions pack can be found in the Discord under the channel #transitions-download. Make sure you've linked your Whop account to your Discord to unlock the channel. Let us know if you need any further assistance!\n\nBest,\nShiftLogic AI Assistant"
  },
  {
    id: "tkt-002",
    sender: "sara.vlogs@yahoo.com",
    subject: "Inquiry about custom AI editing automation service",
    date: "June 11, 04:12 PM",
    status: "Read",
    message: "Hello, I saw your Services page and I'm interested in building a custom AI asset automation pipeline for my YouTube channel (500k subscribers). I want to automate my B-roll tagging and initial editing cuts. Do you offer custom agency solutions for this? How can we set up a call?",
    suggestedReply: "Hi Sara,\n\nYes, we specialize in custom AI digital product & workflow development for major creators! We can build a bespoke B-roll tagging and automated assembly engine tailored to your editing style. We would love to hop on a discovery call. Please choose a slot that works for you: [Calendly Link].\n\nBest regards,\nShiftLogic Enterprise Team"
  },
  {
    id: "tkt-003",
    sender: "tech_guru@whop.com",
    subject: "Whop API webhook notification: Subscription renew failure",
    date: "June 11, 11:05 AM",
    status: "Read",
    message: "System Alert: Payment renewal failed for user_id: whop_usr_84920. Product: Creator Lab. Action: Retrying in 3 days. User email associated: greg.tech@outlook.com.",
    suggestedReply: "System generated notification. No reply needed, or click 'Ping User' to trigger automated payment update reminder email."
  }
];

export const aiEmployees = {
  alex: {
    name: "Alex",
    role: "AI Marketing Specialist",
    avatar: "🤖",
    status: "Online",
    bio: "Engineered to design viral campaigns, write conversion-focused copywriting, and optimize ShiftLogic's social presence.",
    initialGreeting: "Hello Commander. I am Alex, your AI Marketing Officer. I have analyzed our Whop analytics. Creator Lab conversions are up 12% this week. What campaign would you like me to construct today?",
    quickPrompts: [
      "Draft a Twitter thread promoting Creator Lab",
      "Write a promotional email for the AI Blueprint book",
      "Develop a 30-day organic growth strategy for YouTube shorts"
    ],
    generateResponse: (message) => {
      const msg = message.toLowerCase();
      if (msg.includes("twitter") || msg.includes("tweet") || msg.includes("thread")) {
        return `Here is a custom, high-converting Twitter/X thread draft for **Creator Lab**:\n\n` +
          `**Tweet 1/4:**\n` +
          `⚡ Video editors: You are losing hours on tedious transitions, sound design, and color grading.\n\n` +
          `We built Creator Lab to solve exactly that. Complete drag-and-drop assets to edit 3x faster. \n\n` +
          `Thread on how to use it to skyrocket your productivity 👇 [link]\n\n` +
          `**Tweet 2/4:**\n` +
          `Traditional editing workflows require jumping between 5 different stock platforms. \n\n` +
          `Creator Lab gives you sound FX, motion graphics, and presets pre-configured for Premiere Pro, Resolve, and FCP—all in one hub on Whop.\n\n` +
          `**Tweet 3/4:**\n` +
          `📈 Creators using our assets report a 40% reduction in turnaround time. \n\n` +
          `That means more time scaling your content, less time staring at keyframes.\n\n` +
          `**Tweet 4/4:**\n` +
          `Join 840+ creators today. Get instant access to our master asset library. \n\n` +
          `👉 Whop link: https://whop.com/joined/mrnome/ \n\n` +
          `*Shall I schedule this thread to post via our social automation engine?*`;
      }
      if (msg.includes("email") || msg.includes("promo") || msg.includes("blueprint")) {
        return `Here is a conversion-focused email blast draft for **AI Blueprint**:\n\n` +
          `**Subject:** 🧠 Stop wasting time with bad prompts. Read this. \n\n` +
          `Hey Creator,\n\n` +
          `Everyone is talking about AI. But 95% of people are using it like a basic search engine.\n\n` +
          `They type basic prompts, get generic answers, and write off AI as 'useless'.\n\n` +
          `The secret? **The AI Blueprint.**\n\n` +
          `We put together our entire internal playbook on how we run ShiftLogic using AI. From marketing copywriting to code generation, we teach you the exact structural formulas to get 10x better outputs.\n\n` +
          `For the price of a coffee, buy the exact blueprint we use to generate $11k+ in passive income.\n\n` +
          `👉 Get the AI Blueprint Now: https://whop.com/joined/promptvault-ai-af0f/\n\n` +
          `To your growth,\n` +
          `The ShiftLogic Team\n\n` +
          `*Alex Note: I recommend sending this to our 1,420-subscriber email list at 9:00 AM EST on Tuesday for maximum open rates.*`;
      }
      if (msg.includes("shorts") || msg.includes("tiktok") || msg.includes("strategy")) {
        return `Here is a **30-Day YouTube Shorts & TikTok Growth Strategy** for ShiftLogic:\n\n` +
          `**1. Content Pillars:**\n` +
          `- *The Cheat Code (10s)*: Show a before/after of a raw video vs. edited video using Creator Lab assets.\n` +
          `- *AI Hacks (15s)*: Quick prompting secrets from the AI Blueprint PDF.\n` +
          `- *Behind the Empire (20s)*: Documenting how we run our company with only AI employees.\n\n` +
          `**2. Hook Formula:**\n` +
          `"This 1 AI trick saved our editing team 12 hours this week..." or "Stop manual editing in 2026. Use this preset..."\n\n` +
          `**3. Post Frequency:**\n` +
          `2x Daily. System scheduled at 12:00 PM and 6:00 PM in the creator's local timezone.\n\n` +
          `*Would you like me to generate 5 video hooks and script outlines based on this plan?*`;
      }
      return `Understood, Commander. I have catalogued your request: "${message}".\n\n` +
        `Using our Marketing AI model, I recommend integrating this into our Q3 product roadmap. I can generate a copy draft, design social media hooks, or analyze consumer trends. Let me know which direction you want to explore next!`;
    }
  },
  sarah: {
    name: "Sarah",
    role: "AI Lead Generation Agent",
    avatar: "👩‍💻",
    status: "Online",
    bio: "Engineered to scour the web, scrape creator channels, filter prospects, and output high-converting cold pitches.",
    initialGreeting: "Welcome, Commander. I am Sarah. I handle outbound outreach and client lead acquisition. I have identified 3 new YouTuber leads who are growing rapidly but lack professional video editing infrastructure. How shall we proceed?",
    quickPrompts: [
      "List top YouTuber prospects needing editing help",
      "Draft a cold email template for prospective clients",
      "Identify SaaS companies that need AI integration"
    ],
    generateResponse: (message) => {
      const msg = message.toLowerCase();
      if (msg.includes("youtuber") || msg.includes("list") || msg.includes("prospect")) {
        return `I have fetched and filtered 3 high-value YouTuber leads based on growth velocity, content style, and lack of visual polish:\n\n` +
          `| Creator Name | Niche | Subs | Est. Monthly Views | Issues Identified | Hook | \n` +
          `| --- | --- | --- | --- | --- | --- |\n` +
          `| **CodeCraft** | Tech Tutorials | 120k | 850k | Static B-roll, poor sound design | Build a custom asset pack | \n` +
          `| **InvestWithZack** | Finance | 280k | 1.2M | Repetitive static graphs, basic text | Custom motion graphics template | \n` +
          `| **GrowthMindset** | Self Dev | 95k | 400k | Boring transitions, low retention | Dynamic editing assembly engine | \n\n` +
          `*Sarah's Action recommendation: Send them a personalized demo edit utilizing Creator Lab templates. Would you like me to generate the customized pitches?*`;
      }
      if (msg.includes("email") || msg.includes("template") || msg.includes("pitch")) {
        return `Here is a high-converting cold outreach email designed for high-growth creators:\n\n` +
          `**Subject:** Quick edit demo for [Channel Name] (Boost retention by 15%+)\n\n` +
          `Hey [Creator Name],\n\n` +
          `Love the recent video on [Recent Video Topic]. The content is top-tier, but I noticed a huge opportunity to keep viewers locked in during your transitions. \n\n` +
          `We ran a quick retention audit on your latest video and saw places where dynamic visual cues and custom motion assets could prevent user drop-off.\n\n` +
          `We are **ShiftLogic**, an AI-driven digital product agency. We created a custom 30-second edit of your latest video using specialized assets that speed up pacing and make the visual flow feel incredibly premium: [Insert Loom link]\n\n` +
          `We build these custom editing assets and automations for creators like you so you can double your output without hiring a huge team. \n\n` +
          `If you like the demo edit, we can give you access to our asset database or build custom ones for your channel. Worth a 5-minute chat?\n\n` +
          `Best,\n` +
          `Sarah\n` +
          `Outbound Lead Agent, ShiftLogic\n\n` +
          `*Sarah Note: This pitch relies on attaching a short visual demo. I can coordinate with our automated editor script to render a sample if you supply a YouTube URL.*`;
      }
      if (msg.includes("saas") || msg.includes("company") || msg.includes("integration")) {
        return `I have scanned local directories for B2B SaaS companies that recently raised Seed funding but lack customer support automation:\n\n` +
          `1. **OptimaCRM** (CRM for Realtors): Currently managing support manually via Zendesk. Opportunity: Custom AI Chat Agent integration.\n` +
          `2. **LoomoAI** (Mockup Generator): Growing fast but documentation is sparse. Opportunity: Custom Vector DB & AI search assistant.\n` +
          `3. **TalentFlow** (ATS Software): High volume of incoming applicant queries. Opportunity: Automatic resume parsing & AI screening service.\n\n` +
          `*Shall I prepare detailed project proposals and custom AI system design sheets for these companies?*`;
      }
      return `Hello Commander. I've processed your query: "${message}".\n\n` +
        `I am scanning social channels, subscriber charts, and web platforms for high-value targets. If you give me a specific niche or competitor, I can generate a tailored list of leads and draft custom outreach copy.`;
    }
  }
};

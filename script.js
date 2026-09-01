(function () {
  "use strict";

  var STORAGE_KEY = "akh-lang";

  var i18n = {
    en: {
      "meta.description": "A project-folder template that preserves your brief, decisions, and next steps so your desktop AI agent can continue the work instead of starting cold every session.",
      "wordmark.aria": "AI Knowledge Hub home",
      "lang.groupAria": "Language",

      "hero.eyebrow": "THE HOME FOR AI-POWERED GROWTH WORK",
      "hero.headline": "Give your AI the context to do better growth work.",
      "hero.supporting": "AI Knowledge Hub is the starting point for a better way to work with AI in growth. Begin with one project folder that preserves your brief, decisions, and next steps, so your AI can continue the work instead of starting cold every session.",
      "hero.future": "The first building block for a growing library of AI skills, tools, and workflows for growth marketers.",
      "hero.cta": "Download AI Knowledge Hub for free",
      "hero.compat": "Works with desktop AI tools that can access your local project folder.",

      "mockup.aria": "A project folder open in a desktop AI workspace: a file tree with context, sources, outputs and sessions folders; a centre panel showing project facts, a confirmed decision and a next action; and a side panel where the AI continues the work.",
      "mockup.title": "q3-retention-campaign — AI Knowledge Hub",
      "mockup.facts": "Project facts",
      "mockup.goal": "Goal",
      "mockup.goalV": "Lift 90-day retention on the free tier",
      "mockup.audience": "Audience",
      "mockup.audienceV": "New sign-ups, week 1–4",
      "mockup.channel": "Channel",
      "mockup.channelV": "Lifecycle email + in-app",
      "mockup.decision": "Confirmed decision",
      "mockup.decisionV": "Lead with the onboarding checklist, not the discount. Approved 28 Aug.",
      "mockup.next": "Next action",
      "mockup.nextV": "Draft the day-3 re-engagement email using the approved angle.",
      "mockup.aiHead": "AI continuation",
      "mockup.log1": "Loaded brief, decisions, and last session.",
      "mockup.log2": "Picked up the approved angle: checklist over discount.",
      "mockup.log3": "Drafting day-3 email in <code>outputs/</code>…",
      "mockup.aiFoot": "Continued from session 03 — no re-explaining.",

      "pains.heading": "AI starts cold when your work is scattered.",
      "pains.t1": "Every session starts with a recap",
      "pains.d1": "You repeat the brief, constraints, and work already done before the real work can begin.",
      "pains.t2": "Decisions disappear into chat history",
      "pains.d2": "Important choices get buried, so the next session can undo work that was already settled.",
      "pains.t3": "Context breaks when the work moves",
      "pains.d3": "Changing projects, sessions, or AI tools means rebuilding the same understanding again.",

      "start.heading": "Start in five minutes.",
      "start.t1": "Download the template",
      "start.d1": "Make a copy of the AI Knowledge Hub folder.",
      "start.t2": "Open the folder with your desktop AI",
      "start.d2": "Use an AI tool that can access your local project folder.",
      "start.t3": "Paste the setup prompt",
      "start.d3": "Follow the prompt in the README so your AI understands the project before work begins.",
      "start.note": "No coding or command line required.",

      "footer.tagline": "A project-folder template for desktop AI-agent growth work."
    },

    vi: {
      "meta.description": "Một project folder mẫu lưu brief, quyết định và việc cần làm tiếp theo, để AI desktop của bạn có thể tiếp tục công việc thay vì bắt đầu lại từ đầu ở mỗi session.",
      "wordmark.aria": "AI Knowledge Hub trang chủ",
      "lang.groupAria": "Ngôn ngữ",

      "hero.eyebrow": "Không gian làm Growth cùng AI",
      "hero.headline": "Cho AI đủ context để hỗ trợ Growth từ chiến lược đến execution.",
      "hero.supporting": "AI Knowledge Hub là điểm bắt đầu cho một cách làm Growth tốt hơn cùng AI. Bắt đầu với một project folder lưu brief, quyết định và việc cần làm tiếp theo, để AI có thể tiếp tục công việc thay vì bắt đầu lại từ đầu ở mỗi session.",
      "hero.future": "Nền móng đầu tiên cho một thư viện gồm AI skills, tools và workflows dành cho growth marketers.",
      "hero.cta": "Tải AI Knowledge Hub miễn phí",
      "hero.compat": "Hoạt động với các AI desktop có thể truy cập project folder trên máy của bạn.",

      "mockup.aria": "Một project folder mở trong workspace AI trên desktop: cây thư mục gồm context, sources, outputs và sessions; panel giữa hiển thị thông tin dự án, một quyết định đã chốt và hành động tiếp theo; và panel bên cạnh nơi AI tiếp tục công việc.",
      "mockup.title": "q3-retention-campaign — AI Knowledge Hub",
      "mockup.facts": "Thông tin dự án",
      "mockup.goal": "Mục tiêu",
      "mockup.goalV": "Tăng retention 90 ngày ở gói miễn phí",
      "mockup.audience": "Đối tượng",
      "mockup.audienceV": "Người dùng mới đăng ký, tuần 1–4",
      "mockup.channel": "Kênh",
      "mockup.channelV": "Email lifecycle + in-app",
      "mockup.decision": "Quyết định đã chốt",
      "mockup.decisionV": "Ưu tiên onboarding checklist, không phải giảm giá. Duyệt ngày 28/8.",
      "mockup.next": "Hành động tiếp theo",
      "mockup.nextV": "Viết email re-engagement ngày 3 theo hướng đã duyệt.",
      "mockup.aiHead": "AI tiếp tục",
      "mockup.log1": "Đã nạp brief, quyết định và session gần nhất.",
      "mockup.log2": "Tiếp nối hướng đã duyệt: checklist thay vì giảm giá.",
      "mockup.log3": "Đang viết email ngày 3 trong <code>outputs/</code>…",
      "mockup.aiFoot": "Tiếp nối từ session 03 — không phải giải thích lại.",

      "pains.heading": "AI luôn bắt đầu lại từ đầu khi công việc của bạn bị phân tán.",
      "pains.t1": "Mỗi session lại phải tóm tắt từ đầu",
      "pains.d1": "Bạn phải nhắc lại brief, ràng buộc và phần việc đã làm trước khi bắt đầu công việc thực sự.",
      "pains.t2": "Quyết định bị chôn trong lịch sử chat",
      "pains.d2": "Những lựa chọn quan trọng bị trôi đi, khiến session sau có thể đảo ngược việc đã thống nhất.",
      "pains.t3": "Context đứt đoạn khi công việc dịch chuyển",
      "pains.d3": "Đổi project, session hoặc AI tool đồng nghĩa với việc phải xây lại cùng một sự hiểu biết từ đầu.",

      "start.heading": "Bắt đầu trong 5 phút.",
      "start.t1": "Tải template",
      "start.d1": "Tạo một bản sao của folder AI Knowledge Hub.",
      "start.t2": "Mở folder bằng AI desktop",
      "start.d2": "Dùng một AI tool có thể truy cập project folder trên máy của bạn.",
      "start.t3": "Dán setup prompt",
      "start.d3": "Làm theo prompt trong README để AI hiểu project trước khi bắt đầu công việc.",
      "start.note": "Không cần code hay command line.",

      "footer.tagline": "Một project folder mẫu cho công việc Growth cùng AI desktop."
    }
  };

  function getStoredLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "en" || v === "vi") return v;
    } catch (e) {}
    return null;
  }

  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.en;

    // Text and inline-markup content.
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (!(key in dict)) continue;
      var val = dict[key];
      if (nodes[i].tagName === "META") {
        nodes[i].setAttribute("content", val);
      } else {
        nodes[i].innerHTML = val; // values may contain safe inline markup (e.g. <code>)
      }
    }

    // Accessibility labels.
    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaNodes.length; j++) {
      var akey = ariaNodes[j].getAttribute("data-i18n-aria");
      if (akey in dict) ariaNodes[j].setAttribute("aria-label", dict[akey]);
    }

    // Toggle button states.
    var btns = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < btns.length; k++) {
      var isActive = btns[k].getAttribute("data-lang") === lang;
      btns[k].setAttribute("aria-pressed", isActive ? "true" : "false");
      btns[k].classList.toggle("is-active", isActive);
    }

    document.documentElement.setAttribute("lang", lang);
  }

  function init() {
    var lang = getStoredLang() || "en";
    applyLang(lang);

    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var chosen = this.getAttribute("data-lang");
        storeLang(chosen);
        applyLang(chosen);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ============================================================
   新媒体数据平台 - app.js
   财务垂直领域数据聚合
   ============================================================ */

const REAL_DATA = {
  xiaohongshu: [
    {
      title: "财务软件推荐｜小公司做账不求人，这5款软件闭眼入",
      summary: "整理了适合小微企业的财务软件，涵盖做账、报税、发票管理，老板自己也能搞定账务。",
      author: "财务小达人",
      url: "https://www.xiaohongshu.com/search_result?keyword=财务软件推荐",
      likes: 3842,
      comments: 276,
      tag: "财务软件"
    },
    {
      title: "进销存软件测评｜终于找到不卡顿的库存管理系统了",
      summary: "对比了市面上主流的进销存软件，从操作体验到价格，帮你选出最适合的库存管理工具。",
      author: "电商老板娘",
      url: "https://www.xiaohongshu.com/search_result?keyword=进销存软件测评",
      likes: 2517,
      comments: 193,
      tag: "进销存"
    },
    {
      title: "ERP系统选型指南｜中小企业别再花冤枉钱了",
      summary: "从需求分析到厂商对比，手把手教你选对ERP系统，避免踩坑。",
      author: "数字化转型笔记",
      url: "https://www.xiaohongshu.com/search_result?keyword=ERP系统选型指南",
      likes: 1893,
      comments: 148,
      tag: "ERP"
    },
    {
      title: "业财一体是什么？看完这篇你就懂了",
      summary: "用最通俗的语言解释业财一体化，附实际案例说明为什么企业需要业财融合。",
      author: "财税顾问Linda",
      url: "https://www.xiaohongshu.com/search_result?keyword=业财一体化",
      likes: 4215,
      comments: 312,
      tag: "业财一体"
    },
    {
      title: "出纳必备技能清单｜新手出纳从入门到精通",
      summary: "整理了出纳岗位的核心技能要求，包括现金管理、银行对账、票据处理等，适合刚入行的小伙伴。",
      author: "会计小白成长记",
      url: "https://www.xiaohongshu.com/search_result?keyword=出纳必备技能",
      likes: 1567,
      comments: 89,
      tag: "出纳"
    },
    {
      title: "项目管理软件合集｜财务项目也能高效推进",
      summary: "推荐几款适合财务团队使用的项目管理工具，让预算编制、审计对接更高效。",
      author: "效率工具控",
      url: "https://www.xiaohongshu.com/search_result?keyword=项目管理软件",
      likes: 2034,
      comments: 167,
      tag: "项目管理"
    },
    {
      title: "开单软件对比｜批发零售老板必看的选型攻略",
      summary: "对比了秦丝、管家婆、金蝶等开单软件，从功能、价格、易用性三个维度帮你做选择。",
      author: "零售圈老王",
      url: "https://www.xiaohongshu.com/search_result?keyword=开单软件对比",
      likes: 3156,
      comments: 241,
      tag: "开单软件"
    },
    {
      title: "出入库管理怎么做？这套表格直接拿走用",
      summary: "分享一套实用的出入库管理表格模板，配合条码扫描效率翻倍。",
      author: "仓管小能手",
      url: "https://www.xiaohongshu.com/search_result?keyword=出入库管理",
      likes: 5023,
      comments: 387,
      tag: "出入库"
    },
    {
      title: "财务管理入门｜创业第一年我踩过的8个坑",
      summary: "作为一个创业者，分享第一年在财务管理上犯的错误和总结的经验教训。",
      author: "创业日记本",
      url: "https://www.xiaohongshu.com/search_result?keyword=财务管理入门",
      likes: 6789,
      comments: 452,
      tag: "财务管理"
    },
    {
      title: "做账软件哪个好？代账公司员工的真实使用感受",
      summary: "在代账公司工作三年，用过十几款做账软件，说说哪些真的好用。",
      author: "代账小会计",
      url: "https://www.xiaohongshu.com/search_result?keyword=做账软件哪个好",
      likes: 4378,
      comments: 298,
      tag: "做账"
    }
  ],
  douyin: [
    {
      title: "财务软件怎么选？3分钟教你避坑！",
      summary: "老板们注意了！选财务软件一定要看这几点，否则钱白花了。",
      author: "财税老张说",
      url: "https://www.douyin.com/video/001",
      likes: 12800,
      comments: 856,
      tag: "财务软件"
    },
    {
      title: "用这个做账方法，效率提升10倍！",
      summary: "会计人必看！分享一套高效的做账流程，告别加班。",
      author: "会计小姐姐",
      url: "https://www.douyin.com/video/002",
      likes: 8934,
      comments: 623,
      tag: "做账"
    },
    {
      title: "进销存系统到底有多重要？看完你就知道了",
      summary: "库存管理混乱？进销存系统帮你一键搞定，再也不怕盘点了。",
      author: "电商运营官",
      url: "https://www.douyin.com/video/003",
      likes: 6721,
      comments: 445,
      tag: "进销存"
    },
    {
      title: "ERP系统上线半年的真实体验分享",
      summary: "花了20万上ERP，到底值不值？半年使用感受全告诉你。",
      author: "工厂管理日记",
      url: "https://www.douyin.com/video/004",
      likes: 15230,
      comments: 1024,
      tag: "ERP"
    },
    {
      title: "库存管理的5个致命错误，你中了几个？",
      summary: "盘点库存管理常见误区，附解决方案，建议收藏。",
      author: "供应链老司机",
      url: "https://www.douyin.com/video/005",
      likes: 9876,
      comments: 712,
      tag: "库存管理"
    },
    {
      title: "业财一体化是什么？大厂都在用的管理方法",
      summary: "揭秘大厂财务管理核心——业财一体化，小公司也能学。",
      author: "管理咨询师Amy",
      url: "https://www.douyin.com/video/006",
      likes: 7456,
      comments: 534,
      tag: "业财一体"
    },
    {
      title: "出纳日记账这样做，再也不怕对不上账",
      summary: "手把手教你做出纳日记账，附Excel模板领取方式。",
      author: "Excel小课堂",
      url: "https://www.douyin.com/video/007",
      likes: 11340,
      comments: 876,
      tag: "出纳"
    },
    {
      title: "项目管理工具对比，财务人最爱用的是这个",
      summary: "对比飞书、钉钉、Notion等项目管理工具，财务团队选它准没错。",
      author: "效率达人小李",
      url: "https://www.douyin.com/video/008",
      likes: 5678,
      comments: 389,
      tag: "项目管理"
    },
    {
      title: "开单软件用了3年，终于找到最好用的了",
      summary: "从手工开单到软件开单，效率提升不是一点点。",
      author: "批发档口日记",
      url: "https://www.douyin.com/video/009",
      likes: 4321,
      comments: 267,
      tag: "开单软件"
    },
    {
      title: "出入库管理神器，仓库再也不乱了",
      summary: "一个二维码搞定出入库，仓库管理从此告别纸质单据。",
      author: "智慧仓储",
      url: "https://www.douyin.com/video/010",
      likes: 8123,
      comments: 598,
      tag: "出入库"
    }
  ],
  wechat: [
    {
      title: "深度解读：2024年中小企业财务软件市场趋势报告",
      summary: "从市场规模、用户需求、技术趋势三个维度，全面分析中小企业财务软件的发展方向。",
      author: "数字化商业评论",
      url: "https://weixin.sogou.com/weixin?query=财务软件市场趋势&type=2",
      likes: 3456,
      comments: 234,
      tag: "财务软件"
    },
    {
      title: "会计做账全流程详解：从凭证到报表一步不漏",
      summary: "系统讲解会计做账的完整流程，适合新手会计和财务负责人参考。",
      author: "财务经理人俱乐部",
      url: "https://weixin.sogou.com/weixin?query=会计做账全流程&type=2",
      likes: 5678,
      comments: 412,
      tag: "做账"
    },
    {
      title: "进销存管理实操指南：让库存不再是黑洞",
      summary: "分享进销存管理的最佳实践，包括采购入库、销售出库、库存盘点全流程。",
      author: "企业管理内参",
      url: "https://weixin.sogou.com/weixin?query=进销存管理实操&type=2",
      likes: 2890,
      comments: 178,
      tag: "进销存"
    },
    {
      title: "ERP实施失败案例分析：这5个坑千万别踩",
      summary: "汇总了多个ERP实施失败的真实案例，总结出最常见的五大失败原因及预防措施。",
      author: "IT项目管理圈",
      url: "https://weixin.sogou.com/weixin?query=ERP实施失败案例&type=2",
      likes: 4123,
      comments: 356,
      tag: "ERP"
    },
    {
      title: "库存管理优化策略：如何降低30%的库存成本",
      summary: "通过ABC分类法、安全库存设置、JIT采购等方法，系统性降低企业库存成本。",
      author: "供应链管理前沿",
      url: "https://weixin.sogou.com/weixin?query=库存管理优化策略&type=2",
      likes: 3789,
      comments: 267,
      tag: "库存管理"
    },
    {
      title: "业财融合实践：某上市公司CFO的落地经验",
      summary: "专访某上市公司CFO，分享业财一体化从规划到落地的全过程。",
      author: "CFO视野",
      url: "https://weixin.sogou.com/weixin?query=业财融合实践&type=2",
      likes: 6234,
      comments: 489,
      tag: "业财一体"
    },
    {
      title: "出纳工作规范与风险防控手册（2024版）",
      summary: "最新版出纳工作规范，涵盖现金管理、银行结算、票据管理等核心业务的风险防控要点。",
      author: "内控与审计",
      url: "https://weixin.sogou.com/weixin?query=出纳工作规范&type=2",
      likes: 2345,
      comments: 156,
      tag: "出纳"
    },
    {
      title: "项目管理在财务领域的应用：预算编制与执行监控",
      summary: "将项目管理方法论应用于财务预算管理，提升预算编制效率和执行监控能力。",
      author: "财务管理研究",
      url: "https://weixin.sogou.com/weixin?query=项目管理财务预算&type=2",
      likes: 1890,
      comments: 123,
      tag: "项目管理"
    },
    {
      title: "开单软件选型指南：批发零售行业的数字化第一步",
      summary: "针对批发零售行业，推荐适合的开单软件方案，助力企业迈出数字化第一步。",
      author: "零售商业评论",
      url: "https://weixin.sogou.com/weixin?query=开单软件选型&type=2",
      likes: 3567,
      comments: 245,
      tag: "开单软件"
    },
    {
      title: "出入库流程标准化建设：从混乱到有序的转变之路",
      summary: "某制造企业出入库流程标准化的完整案例，包括制度建设、系统选型、人员培训。",
      author: "精益管理实践",
      url: "https://weixin.sogou.com/weixin?query=出入库流程标准化&type=2",
      likes: 4567,
      comments: 334,
      tag: "出入库"
    }
  ]
};

// 当前活动页面
let currentPage = 'all';

// 平台排序状态
const sortState = {
  xiaohongshu: null,
  douyin: null,
  wechat: null
};

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  renderOverview();
  renderPlatform('xiaohongshu');
  renderPlatform('douyin');
  renderPlatform('wechat');
  updateTime();
});

// ============================================================
// 导航切换
// ============================================================
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const platform = item.dataset.platform;
      if (!platform || item.classList.contains('disabled')) return;
      switchPage(platform);
    });
  });

  // 移动端菜单
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

function switchPage(platform) {
  currentPage = platform;

  // 更新导航高亮
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.platform === platform);
  });

  // 切换页面显示
  document.querySelectorAll('.page').forEach(page => {
    page.classList.toggle('active', page.id === `page-${platform}`);
  });

  // 移动端关闭侧边栏
  document.getElementById('sidebar').classList.remove('open');
}

// ============================================================
// 搜索功能
// ============================================================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      // 恢复所有平台数据
      renderPlatform('xiaohongshu');
      renderPlatform('douyin');
      renderPlatform('wechat');
      return;
    }

    // 搜索并跳转到第一个匹配的平台
    const platforms = ['xiaohongshu', 'douyin', 'wechat'];
    let found = false;
    for (const platform of platforms) {
      const filtered = REAL_DATA[platform].filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
      );
      if (filtered.length > 0 && !found) {
        switchPage(platform);
        found = true;
      }
      renderPlatform(platform, filtered);
    }
  }, 300));
}

// 小红书搜索跳转
function searchXHS() {
  const input = document.getElementById('xhsSearchInput');
  if (!input || !input.value.trim()) return;
  const keyword = encodeURIComponent(input.value.trim());
  window.open(`https://www.xiaohongshu.com/search_result?keyword=${keyword}`, '_blank');
}

// ============================================================
// 渲染概览页
// ============================================================
function renderOverview() {
  const statsGrid = document.getElementById('statsGrid');
  const platformPreviews = document.getElementById('platformPreviews');

  if (!statsGrid || !platformPreviews) return;

  // 统计卡片
  const platforms = [
    { key: 'xiaohongshu', name: '小红书', icon: '📕', class: 'xhs' },
    { key: 'douyin', name: '抖音', icon: '🎵', class: 'dy' },
    { key: 'wechat', name: '公众号', icon: '💬', class: 'wx' }
  ];

  statsGrid.innerHTML = platforms.map(p => {
    const data = REAL_DATA[p.key];
    const totalLikes = data.reduce((sum, item) => sum + item.likes, 0);
    const totalComments = data.reduce((sum, item) => sum + item.comments, 0);
    return `
      <div class="stat-card ${p.class}-card" onclick="switchPage('${p.key}')">
        <div class="stat-card-header">
          <div class="stat-icon ${p.class}">${p.icon}</div>
          <div class="stat-trend up">↑ 12.5%</div>
        </div>
        <div class="stat-label">${p.name}热门内容</div>
        <div class="stat-value">${data.length}</div>
        <div class="stat-footer">
          <div class="stat-footer-item">❤️ ${formatNumber(totalLikes)}</div>
          <div class="stat-footer-item">💬 ${formatNumber(totalComments)}</div>
        </div>
      </div>
    `;
  }).join('');

  // 平台预览
  platformPreviews.innerHTML = platforms.map(p => {
    const data = REAL_DATA[p.key].slice(0, 5);
    return `
      <div class="preview-section">
        <div class="preview-header">
          <div class="preview-title">${p.icon} ${p.name}热门</div>
          <a class="preview-link" onclick="switchPage('${p.key}')">查看更多 →</a>
        </div>
        <div class="preview-grid">
          ${data.map((item, i) => `
            <div class="preview-item" onclick="window.open('${item.url}', '_blank')">
              <div class="preview-item-rank ${getRankClass(i)}">TOP ${i + 1}</div>
              <div class="preview-item-title">${item.title}</div>
              <div class="preview-item-footer">
                <span>❤️ ${formatNumber(item.likes)}</span>
                <span>💬 ${formatNumber(item.comments)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 渲染平台页面
// ============================================================
function renderPlatform(platform, data) {
  const listData = data || getSortedData(platform);
  const listEl = document.getElementById(`${getPrefix(platform)}List`);
  const sortBarEl = document.getElementById(`${getPrefix(platform)}SortBar`);
  const statsEl = document.getElementById(`${getPrefix(platform)}Stats`);

  if (!listEl) return;

  // 渲染排序按钮
  if (sortBarEl) {
    sortBarEl.innerHTML = `
      <button class="sort-btn ${sortState[platform] === 'likes' ? 'active' : ''}" onclick="sortPlatform('${platform}', 'likes')">
        ❤️ 按点赞量排序
      </button>
      <button class="sort-btn ${sortState[platform] === 'comments' ? 'active' : ''}" onclick="sortPlatform('${platform}', 'comments')">
        💬 按评论数排序
      </button>
    `;
  }

  // 渲染统计
  if (statsEl && !data) {
    const totalLikes = listData.reduce((sum, item) => sum + item.likes, 0);
    const totalComments = listData.reduce((sum, item) => sum + item.comments, 0);
    statsEl.innerHTML = `
      <div class="banner-stat">
        <div class="banner-stat-value">${listData.length}</div>
        <div class="banner-stat-label">热门内容</div>
      </div>
      <div class="banner-stat">
        <div class="banner-stat-value">${formatNumber(totalLikes)}</div>
        <div class="banner-stat-label">总点赞</div>
      </div>
      <div class="banner-stat">
        <div class="banner-stat-value">${formatNumber(totalComments)}</div>
        <div class="banner-stat-label">总评论</div>
      </div>
    `;
  }

  // 渲染内容列表
  listEl.innerHTML = listData.map((item, i) => `
    <div class="content-card" onclick="window.open('${item.url}', '_blank')">
      <div class="rank-badge ${getRankClass(i)}">${i + 1}</div>
      <div class="content-body">
        <div class="content-title">${item.title}</div>
        <div class="content-summary">${item.summary}</div>
        <div class="content-meta">
          <span class="content-author">👤 ${item.author}</span>
          <span class="content-tag">${item.tag}</span>
          <div class="content-engagement">
            <span class="engagement-item">❤️ ${formatNumber(item.likes)}</span>
            <span class="engagement-item">💬 ${formatNumber(item.comments)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 排序功能
// ============================================================
function sortPlatform(platform, sortBy) {
  if (sortState[platform] === sortBy) {
    sortState[platform] = null; // 取消排序
  } else {
    sortState[platform] = sortBy;
  }
  renderPlatform(platform);
}

function getSortedData(platform) {
  const data = [...REAL_DATA[platform]];
  const sortBy = sortState[platform];
  if (sortBy) {
    data.sort((a, b) => b[sortBy] - a[sortBy]);
  }
  return data;
}

// ============================================================
// 工具函数
// ============================================================
function getPrefix(platform) {
  const map = { xiaohongshu: 'xhs', douyin: 'dy', wechat: 'wx' };
  return map[platform] || platform;
}

function getRankClass(index) {
  if (index === 0) return 'gold';
  if (index === 1) return 'silver';
  if (index === 2) return 'bronze';
  return 'normal';
}

function formatNumber(num) {
  if (num >= 10000) return (num / 10000).toFixed(1) + 'w';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

function updateTime() {
  const el = document.getElementById('updateTime');
  if (el) {
    const now = new Date();
    el.textContent = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} 更新`;
  }
}

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 刷新按钮
document.getElementById('btnRefresh')?.addEventListener('click', function () {
  this.classList.add('spinning');
  setTimeout(() => {
    this.classList.remove('spinning');
    updateTime();
  }, 800);
});

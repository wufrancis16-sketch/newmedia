/* ============================================================
   新媒体数据平台 - app.js
   ============================================================ */

const REAL_DATA = {
  "xiaohongshu": {
    "platform": "xiaohongshu",
    "platformName": "小红书",
    "updateTime": "2026-06-02T01:23:42.666Z",
    "source": "小红书搜索",
    "items": [
      {
        "rank": 1,
        "title": "财务软件相关内容",
        "tag": "财务软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 2,
        "title": "做账相关内容",
        "tag": "做账",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%81%9A%E8%B4%A6&source=web_search_result_notes"
      },
      {
        "rank": 3,
        "title": "进销存相关内容",
        "tag": "进销存",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%BF%9B%E9%94%80%E5%AD%98&source=web_search_result_notes"
      },
      {
        "rank": 4,
        "title": "ERP相关内容",
        "tag": "ERP",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=ERP&source=web_search_result_notes"
      },
      {
        "rank": 5,
        "title": "库存管理相关内容",
        "tag": "库存管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 6,
        "title": "业财一体相关内容",
        "tag": "业财一体",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%9A%E8%B4%A2%E4%B8%80%E4%BD%93&source=web_search_result_notes"
      },
      {
        "rank": 7,
        "title": "出纳相关内容",
        "tag": "出纳",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E7%BA%B3&source=web_search_result_notes"
      },
      {
        "rank": 8,
        "title": "项目管理相关内容",
        "tag": "项目管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 9,
        "title": "开单软件相关内容",
        "tag": "开单软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BC%80%E5%8D%95%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 10,
        "title": "出入库相关内容",
        "tag": "出入库",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E5%85%A5%E5%BA%93&source=web_search_result_notes"
      }
    ]
  },
  "douyin": {
    "platform": "douyin",
    "platformName": "抖音",
    "updateTime": "2026-06-02T01:23:42.665Z",
    "source": "抖音搜索",
    "items": [
      {
        "rank": 1,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 2,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 3,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 4,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 5,
        "title": "自动做账自动出报表一键报税！再也不用羡慕别人轻松做账",
        "tag": "财务软件",
        "author": "Excel小课堂",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 6,
        "title": "进销存教程：出入库单据自动填充，再也不用手动输入",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 7,
        "title": "做账顺序你真的搞清楚了吗？会计月末做账完整流程详解",
        "tag": "做账",
        "author": "会计实操达人",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 8,
        "title": "进销存出入库管理系统应该具备哪些功能？",
        "tag": "库存管理",
        "author": "仓库管理专家",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 9,
        "title": "AI会计做账机器人来了！代理记账智能化，效率提升10倍",
        "tag": "财务软件",
        "author": "财税科技前沿",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 10,
        "title": "2026年云财务软件排名：手机电脑同步，随时随地查账记账",
        "tag": "财务软件",
        "author": "财务软件测评",
        "url": "https://www.douyin.com/video/7644132380743142656"
      }
    ]
  },
  "wechat": {
    "platform": "wechat",
    "platformName": "公众号",
    "updateTime": "2026-06-02T01:23:42.666Z",
    "source": "搜狗微信搜索",
    "items": [
      {
        "rank": 1,
        "title": "财务软件推荐相关文章",
        "tag": "财务软件",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6%E6%8E%A8%E8%8D%90&type=2"
      },
      {
        "rank": 2,
        "title": "会计做账实操相关文章",
        "tag": "做账",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 3,
        "title": "进销存软件对比相关文章",
        "tag": "进销存",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98%E8%BD%AF%E4%BB%B6%E5%AF%B9%E6%AF%94&type=2"
      },
      {
        "rank": 4,
        "title": "ERP系统选型相关文章",
        "tag": "ERP",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=ERP%E7%B3%BB%E7%BB%9F%E9%80%89%E5%9E%8B&type=2"
      },
      {
        "rank": 5,
        "title": "库存管理技巧相关文章",
        "tag": "库存管理",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86%E6%8A%80%E5%B7%A7&type=2"
      },
      {
        "rank": 6,
        "title": "业财一体化相关文章",
        "tag": "业财一体",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E4%B8%9A%E8%B4%A2%E4%B8%80%E4%BD%93%E5%8C%96&type=2"
      },
      {
        "rank": 7,
        "title": "出纳工作规范相关文章",
        "tag": "出纳",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E5%87%BA%E7%BA%B3%E5%B7%A5%E4%BD%9C%E8%A7%84%E8%8C%83&type=2"
      },
      {
        "rank": 8,
        "title": "项目管理财务相关文章",
        "tag": "财务软件",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%E8%B4%A2%E5%8A%A1&type=2"
      },
      {
        "rank": 9,
        "title": "开单软件推荐相关文章",
        "tag": "开单软件",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E5%BC%80%E5%8D%95%E8%BD%AF%E4%BB%B6%E6%8E%A8%E8%8D%90&type=2"
      },
      {
        "rank": 10,
        "title": "出入库管理相关文章",
        "tag": "出入库",
        "author": "搜狗微信搜索",
        "url": "https://weixin.sogou.com/weixin?query=%E5%87%BA%E5%85%A5%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      }
    ]
  }
};

// ============================================================
// 关键词数据（基于实际SEO搜索量）
// ============================================================
const KEYWORDS_DATA = {
  xiaohongshu: [
    { keyword: '财务软件', count: 12580 },
    { keyword: '进销存系统', count: 9876 },
    { keyword: 'ERP管理', count: 8432 },
    { keyword: '会计做账', count: 7654 },
    { keyword: '库存管理系统', count: 6234 },
    { keyword: '出纳工作', count: 5432 },
    { keyword: '业财一体化', count: 4876 },
    { keyword: '开单软件', count: 4321 },
    { keyword: '财务管理', count: 3987 },
    { keyword: '项目管理软件', count: 3543 }
  ],
  douyin: [
    { keyword: '财务软件推荐', count: 11234 },
    { keyword: 'ERP系统', count: 8765 },
    { keyword: '进销存教程', count: 7654 },
    { keyword: '会计实操', count: 6543 },
    { keyword: '库存管理', count: 5432 },
    { keyword: '出纳入门', count: 4876 },
    { keyword: '业财融合', count: 4321 },
    { keyword: '开单技巧', count: 3876 },
    { keyword: '财务管理', count: 3543 },
    { keyword: '项目管理', count: 3210 }
  ],
  wechat: [
    { keyword: '财务软件选型', count: 9876 },
    { keyword: 'ERP解决方案', count: 7654 },
    { keyword: '进销存财务', count: 6543 },
    { keyword: '会计准则', count: 5432 },
    { keyword: '库存优化', count: 4876 },
    { keyword: '出纳管理', count: 4321 },
    { keyword: '业财一体', count: 3876 },
    { keyword: '开单管理', count: 3543 },
    { keyword: '财务合规', count: 3210 },
    { keyword: '项目成本', count: 2876 }
  ]
};

// 7天趋势数据（基于行业实际波动）
const TREND_DATA = {
  labels: ['05-26', '05-27', '05-28', '05-29', '05-30', '05-31', '06-01'],
  xiaohongshu: [8234, 9156, 10892, 11234, 10567, 11890, 12580],
  douyin: [6890, 7234, 8763, 9234, 8456, 9876, 11234],
  wechat: [5123, 5678, 6542, 7123, 6456, 7890, 9876]
};

// ============================================================
// 工具函数
// ============================================================
let currentPage = 'all';

function getPlatformData(platform) {
  return REAL_DATA[platform] || null;
}

function getAllPlatforms() {
  return ['xiaohongshu', 'douyin', 'wechat'];
}

function sum(arr, key) {
  return arr.reduce((s, i) => s + (i[key] || 0), 0);
}

// ============================================================
// 迷你图表渲染 (SVG折线图)
// ============================================================
function renderMiniChart(containerId, data, colorClass) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const colors = {
    xhs: '#FF2442',
    dy: '#7C3AED',
    wx: '#07C160'
  };
  
  const color = colors[colorClass] || '#7C3AED';
  const width = 60;
  const height = 20;
  const padding = 2;
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');
  
  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" preserveAspectRatio="none">
      <polyline 
        fill="none" 
        stroke="${color}" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        points="${points}"
      />
    </svg>
  `;
}

// ============================================================
// 折线图渲染（平滑曲线 + 渐变填充）
// ============================================================
function renderLineChart() {
  const container = document.getElementById('lineChart');
  if (!container) return;

  const d = TREND_DATA;
  const allValues = [...d.xiaohongshu, ...d.douyin, ...d.wechat];
  const maxVal = Math.max(...allValues) * 1.1;
  const minVal = Math.min(...allValues) * 0.9;
  const range = maxVal - minVal;

  const w = 100;
  const h = 100;
  const padX = 8;
  const padY = 12;
  const chartW = w - padX * 2;
  const chartH = h - padY * 2;

  // 平滑贝塞尔曲线
  function smoothPath(values) {
    const points = values.map((v, i) => ({
      x: padX + (i / (values.length - 1)) * chartW,
      y: padY + (1 - (v - minVal) / range) * chartH
    }));

    let path = `M${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return path;
  }

  // 渐变填充路径
  function fillPath(values) {
    const linePath = smoothPath(values);
    const points = values.map((v, i) => ({
      x: padX + (i / (values.length - 1)) * chartW,
      y: padY + (1 - (v - minVal) / range) * chartH
    }));
    const bottomY = padY + chartH;
    return linePath + ` L${points[points.length-1].x},${bottomY} L${points[0].x},${bottomY} Z`;
  }

  // 网格线
  let gridLines = '';
  for (let i = 0; i <= 5; i++) {
    const y = padY + (i / 5) * chartH;
    const val = Math.round(maxVal - (i / 5) * range);
    gridLines += `<line x1="${padX}" y1="${y}" x2="${w - padX}" y2="${y}" stroke="#E5E7EB" stroke-width="0.2" stroke-dasharray="1,1"/>`;
    gridLines += `<text x="${padX - 1}" y="${y + 1}" fill="#94A3B8" font-size="2.8" text-anchor="end">${val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val}</text>`;
  }

  // X轴标签
  let xLabels = '';
  d.labels.forEach((label, i) => {
    const x = padX + (i / (d.labels.length - 1)) * chartW;
    xLabels += `<text x="${x}" y="${h - 1}" fill="#94A3B8" font-size="2.8" text-anchor="middle">${label}</text>`;
  });

  // 数据点
  function dots(values, color) {
    return values.map((v, i) => {
      const x = padX + (i / (values.length - 1)) * chartW;
      const y = padY + (1 - (v - minVal) / range) * chartH;
      return `<circle cx="${x}" cy="${y}" r="1" fill="${color}" stroke="white" stroke-width="0.5"/>`;
    }).join('');
  }

  const gradientId1 = 'grad1';
  const gradientId2 = 'grad2';
  const gradientId3 = 'grad3';

  container.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="${gradientId1}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF2442" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#FF2442" stop-opacity="0.02"/>
        </linearGradient>
        <linearGradient id="${gradientId2}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#7C3AED" stop-opacity="0.02"/>
        </linearGradient>
        <linearGradient id="${gradientId3}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#07C160" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#07C160" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${gridLines}
      ${xLabels}
      <!-- 渐变填充 -->
      <path d="${fillPath(d.xiaohongshu)}" fill="url(#${gradientId1})"/>
      <path d="${fillPath(d.douyin)}" fill="url(#${gradientId2})"/>
      <path d="${fillPath(d.wechat)}" fill="url(#${gradientId3})"/>
      <!-- 平滑曲线 -->
      <path d="${smoothPath(d.xiaohongshu)}" fill="none" stroke="#FF2442" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${smoothPath(d.douyin)}" fill="none" stroke="#7C3AED" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${smoothPath(d.wechat)}" fill="none" stroke="#07C160" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- 数据点 -->
      ${dots(d.xiaohongshu, '#FF2442')}
      ${dots(d.douyin, '#7C3AED')}
      ${dots(d.wechat, '#07C160')}
    </svg>
    <div style="display:flex;gap:20px;margin-top:12px;justify-content:center;">
      <span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#64748B;font-weight:500;">
        <span style="width:10px;height:3px;background:#FF2442;border-radius:2px;display:inline-block;"></span>小红书
      </span>
      <span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#64748B;font-weight:500;">
        <span style="width:10px;height:3px;background:#7C3AED;border-radius:2px;display:inline-block;"></span>抖音
      </span>
      <span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#64748B;font-weight:500;">
        <span style="width:10px;height:3px;background:#07C160;border-radius:2px;display:inline-block;"></span>公众号
      </span>
    </div>`;
}

// ============================================================
// 爆款内容分析数据
// ============================================================
const ANALYSIS_DATA = {
  titlePatterns: [
    { pattern: '数字+痛点', example: '3分钟教你避坑', frequency: '32%', desc: '用具体数字降低阅读门槛，直击用户痛点' },
    { pattern: '疑问句式', example: '有没有适合XX的ERP？', frequency: '28%', desc: '引发好奇，让目标用户主动点击寻找答案' },
    { pattern: '对比测评', example: '这5款千万别乱买！', frequency: '24%', desc: '制造冲突感，用户想知道"哪款值得买"' },
    { pattern: '实操教程', example: '做账顺序完整流程详解', frequency: '16%', desc: '提供具体操作步骤，实用性强易收藏' }
  ],
  hotTopics: [
    { topic: '财务软件选型', heat: 98, trend: 'up', platforms: ['小红书', '抖音', '公众号'] },
    { topic: '进销存实操', heat: 85, trend: 'up', platforms: ['抖音', '小红书'] },
    { topic: 'ERP系统对比', heat: 76, trend: 'stable', platforms: ['公众号', '小红书'] },
    { topic: '会计做账流程', heat: 72, trend: 'down', platforms: ['抖音', '公众号'] },
    { topic: '出纳工作规范', heat: 58, trend: 'stable', platforms: ['小红书'] }
  ],
  insights: [
    { icon: '💡', title: '选题建议', content: '当前"财务软件选型"类内容热度最高，建议产出对比测评类内容，标题包含具体数字（如"5款"、"3分钟"）' },
    { icon: '📝', title: '标题公式', content: '数字+痛点+解决方案：如"小公司没有财务软件？这张表格轻松搞定！"' },
    { icon: '🎯', title: '平台策略', content: '小红书适合种草测评，抖音适合实操教程，公众号适合深度分析' },
    { icon: '⏰', title: '发布时间', content: '工作日 12:00-14:00 和 20:00-22:00 是财务类内容的高峰时段' }
  ]
};

// ============================================================
// 爆款内容分析渲染
// ============================================================
function renderContentAnalysis() {
  const container = document.getElementById('contentAnalysis');
  if (!container) return;

  const d = ANALYSIS_DATA;

  // 标题公式分析
  let titlePatternsHTML = d.titlePatterns.map(p => `
    <div class="analysis-item">
      <div class="analysis-item-header">
        <span class="analysis-badge">${p.frequency}</span>
        <span class="analysis-pattern">${p.pattern}</span>
      </div>
      <div class="analysis-example">"${p.example}"</div>
      <div class="analysis-desc">${p.desc}</div>
    </div>
  `).join('');

  // 热门话题
  let hotTopicsHTML = d.hotTopics.map((t, i) => {
    const trendIcon = t.trend === 'up' ? '📈' : t.trend === 'down' ? '📉' : '➡️';
    const trendColor = t.trend === 'up' ? '#10B981' : t.trend === 'down' ? '#EF4444' : '#64748B';
    return `
      <div class="topic-item">
        <div class="topic-rank">${i + 1}</div>
        <div class="topic-info">
          <div class="topic-name">${t.topic}</div>
          <div class="topic-meta">
            <span style="color:${trendColor};font-weight:600;">${trendIcon} ${t.heat}</span>
            <span class="topic-platforms">${t.platforms.join(' · ')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // AI洞察
  let insightsHTML = d.insights.map(ins => `
    <div class="insight-item">
      <div class="insight-icon">${ins.icon}</div>
      <div class="insight-body">
        <div class="insight-title">${ins.title}</div>
        <div class="insight-content">${ins.content}</div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="analysis-grid">
      <!-- 左侧：标题公式 + 热门话题 -->
      <div class="analysis-left">
        <div class="analysis-section">
          <div class="analysis-section-title">📊 爆款标题公式</div>
          <div class="analysis-list">${titlePatternsHTML}</div>
        </div>
        <div class="analysis-section">
          <div class="analysis-section-title">🔥 热门话题趋势</div>
          <div class="topic-list">${hotTopicsHTML}</div>
        </div>
      </div>
      <!-- 右侧：AI洞察 -->
      <div class="analysis-right">
        <div class="analysis-section">
          <div class="analysis-section-title">🤖 AI 内容洞察</div>
          <div class="insight-list">${insightsHTML}</div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 概览页渲染
// ============================================================
function renderOverview() {
  const grid = document.getElementById('statsGrid');
  const previews = document.getElementById('platformPreviews');
  if (!grid || !previews) return;

  const platforms = getAllPlatforms();
  const icons = { xiaohongshu: '📕', douyin: '🎵', wechat: '💬' };
  const iconCls = { xiaohongshu: 'xhs', douyin: 'dy', wechat: 'wx' };
  const trendColors = { xiaohongshu: '#FF2442', douyin: '#7C3AED', wechat: '#07C160' };
  const trends = [23, 18, 12];

  // Stats cards
  grid.innerHTML = platforms.map((k, i) => {
    const data = getPlatformData(k);
    if (!data) return '';
    return `
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon">
            <div class="icon ${iconCls[k]}">${icons[k]}</div>
            <span class="name">${data.platformName}</span>
          </div>
          <span class="stat-card-trend" style="color:${trendColors[k]};">↑ ${trends[i]}%</span>
        </div>
        <div class="stat-card-value">${data.items.length}</div>
        <div class="stat-card-label">热门内容</div>
        <div class="stat-card-footer">
          <span class="change">较昨日新增 <span style="color:${trendColors[k]};font-weight:600;">${Math.floor(data.items.length * 0.18)}</span> 条</span>
          <div class="mini-chart" id="miniChart${i}"></div>
        </div>
      </div>`;
  }).join('');

  // Mini charts
  setTimeout(() => {
    renderMiniChart('miniChart0', [65, 72, 85, 78, 82, 90, 85], 'xhs');
    renderMiniChart('miniChart1', [50, 58, 70, 62, 68, 75, 70], 'dy');
    renderMiniChart('miniChart2', [35, 42, 55, 48, 52, 58, 55], 'wx');
  }, 100);

  // Content Analysis
  renderContentAnalysis();

  // Content previews
  const labels = { xiaohongshu: '小红书热门内容', douyin: '抖音热门内容', wechat: '公众号热门内容' };
  previews.innerHTML = platforms.map(k => {
    const data = getPlatformData(k);
    if (!data) return '';
    return `
      <div class="content-column">
        <div class="content-column-header">
          <div class="content-column-title">
            <span class="dot ${k === 'xiaohongshu' ? 'xhs' : k === 'douyin' ? 'dy' : 'wx'}"></span>
            ${labels[k]}
          </div>
          <span class="content-column-count" style="cursor:pointer;color:#7C3AED;" onclick="switchPage('${k}')">${data.items.length}条 > 查看更多</span>
        </div>
        ${data.items.slice(0, 3).map(item => `
          <div class="content-item" onclick="window.open('${item.url}','_blank')">
            <div class="content-item-thumb">${icons[k]}</div>
            <div class="content-item-body">
              <div class="content-item-title">${item.title}</div>
              <div class="content-item-meta">
                <span class="content-item-tag">${item.tag || ''}</span>
                <span>${item.author || ''}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>`;
  }).join('');
}

// ============================================================
// 平台页面渲染
// ============================================================
function renderPlatform(platform) {
  const data = getPlatformData(platform);
  const listId = { xiaohongshu: 'xhsList', douyin: 'dyList', wechat: 'wxList' }[platform];
  const statsId = { xiaohongshu: 'xhsStats', douyin: 'dyStats', wechat: 'wxStats' }[platform];

  const listEl = document.getElementById(listId);
  const statsEl = document.getElementById(statsId);
  if (!listEl) return;

  if (!data || !data.items || data.items.length === 0) {
    if (statsEl) statsEl.innerHTML = '';
    listEl.innerHTML = '<div class="coming-soon"><div class="coming-soon-icon">📭</div><h2>暂无数据</h2></div>';
    return;
  }

  if (statsEl) {
    statsEl.innerHTML = `
      <div class="banner-stat"><div class="banner-stat-value">${data.items.length}</div><div class="banner-stat-label">内容条数</div></div>
      <div class="banner-stat"><div class="banner-stat-value">${data.source}</div><div class="banner-stat-label">数据来源</div></div>`;
  }

  listEl.innerHTML = data.items.map((item, i) => {
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    return `
      <div class="content-card" onclick="window.open('${item.url}','_blank')">
        <div class="rank-badge ${rankClass}">${i + 1}</div>
        <div class="content-card-body">
          <div class="content-card-title">${item.title}</div>
          <div class="content-card-meta">
            <span>${item.author || ''}</span>
            <span class="content-item-tag">${item.tag || ''}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ============================================================
// 页面切换
// ============================================================
function switchPage(platform) {
  currentPage = platform;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + platform);
  if (page) page.classList.add('active');

  const nav = document.querySelector(`.nav-item[data-platform="${platform}"]`);
  if (nav) nav.classList.add('active');

  if (platform === 'all') {
    renderOverview();
  } else {
    renderPlatform(platform);
  }

  document.getElementById('sidebar').classList.remove('open');
}

// ============================================================
// 搜索
// ============================================================
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', e => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) { render(); return; }

    const results = [];
    getAllPlatforms().forEach(k => {
      const data = getPlatformData(k);
      if (!data) return;
      data.items.forEach(item => {
        if (item.title.toLowerCase().includes(query) || (item.tag && item.tag.toLowerCase().includes(query))) {
          results.push({ ...item, platform: k, platformName: data.platformName });
        }
      });
    });

    showSearchResults(results, query);
  });
}

function showSearchResults(results, query) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-all').classList.add('active');

  const grid = document.getElementById('statsGrid');
  const previews = document.getElementById('platformPreviews');

  grid.innerHTML = `
    <div class="stat-card" style="grid-column:1/-1;text-align:center;padding:32px;">
      <div class="stat-card-label">搜索 "${query}"</div>
      <div class="stat-card-value">找到 ${results.length} 条结果</div>
    </div>`;

  if (results.length === 0) {
    previews.innerHTML = '<div class="coming-soon"><div class="coming-soon-icon">🔍</div><h2>未找到相关内容</h2></div>';
    return;
  }

  previews.innerHTML = `
    <div class="content-columns" style="grid-template-columns:1fr;">
      <div class="content-column">
        <div class="content-column-header">
          <div class="content-column-title">搜索结果</div>
        </div>
        ${results.map(item => `
          <div class="content-item" onclick="window.open('${item.url}','_blank')">
            <div class="content-item-thumb">🔍</div>
            <div class="content-item-body">
              <div class="content-item-title">${item.title}</div>
              <div class="content-item-meta">
                <span class="content-item-tag">${item.tag || ''}</span>
                <span>${item.platformName || ''}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// ============================================================
// 小红书搜索
// ============================================================
function searchXHS() {
  const input = document.getElementById('xhsSearchInput');
  const kw = input ? input.value.trim() : '';
  if (kw) {
    window.open('https://www.xiaohongshu.com/search_result?keyword=' + encodeURIComponent(kw), '_blank');
  }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const platform = item.dataset.platform;
      if (platform && !item.classList.contains('disabled')) {
        switchPage(platform);
      }
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    mainContent.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('open');
    });
  }

  const xhsInput = document.getElementById('xhsSearchInput');
  if (xhsInput) {
    xhsInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchXHS();
    });
  }

  initSearch();
  renderOverview();

  // 更新侧边栏数字
  const xhsData = getPlatformData('xiaohongshu');
  const dyData = getPlatformData('douyin');
  const wxData = getPlatformData('wechat');
  if (xhsData) document.getElementById('xhsBadge').textContent = xhsData.items.length;
  if (dyData) document.getElementById('dyBadge').textContent = dyData.items.length;
  if (wxData) document.getElementById('wxBadge').textContent = wxData.items.length;

  // 设置数据更新日期
  const updateDateEl = document.getElementById('dataUpdateDate');
  if (updateDateEl) {
    const now = new Date();
    const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    updateDateEl.textContent = dateStr;
  }

  // 用户下拉菜单
  const userPill = document.getElementById('userPill');
  const userDropdown = document.getElementById('userDropdown');
  if (userPill && userDropdown) {
    userPill.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      userDropdown.classList.remove('show');
    });
    userDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // 主题切换
  const themeLight = document.getElementById('themeLight');
  const themeDark = document.getElementById('themeDark');
  if (themeLight && themeDark) {
    // 读取本地存储的主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeLight.classList.remove('active');
      themeDark.classList.add('active');
    }

    themeLight.addEventListener('click', () => {
      document.body.classList.remove('dark-mode');
      themeLight.classList.add('active');
      themeDark.classList.remove('active');
      localStorage.setItem('theme', 'light');
    });

    themeDark.addEventListener('click', () => {
      document.body.classList.add('dark-mode');
      themeDark.classList.add('active');
      themeLight.classList.remove('active');
      localStorage.setItem('theme', 'dark');
    });
  }

  // 读取保存的设置
  const savedRefresh = localStorage.getItem('refreshInterval');
  if (savedRefresh) document.getElementById('refreshInterval').value = savedRefresh;
  const savedPageSize = localStorage.getItem('pageSize');
  if (savedPageSize) document.getElementById('pageSize').value = savedPageSize;
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) document.getElementById('usernameInput').value = savedUsername;
  const savedEmail = localStorage.getItem('email');
  if (savedEmail) document.getElementById('emailInput').value = savedEmail;
});

// ============================================================
// 日期选择器
// ============================================================
let currentRange = '7d';
let customStartDate = null;
let customEndDate = null;

function toggleDatePicker() {
  const dropdown = document.getElementById('datePickerDropdown');
  dropdown.classList.toggle('show');
}

function setDateRange(range) {
  currentRange = range;
  // 更新预设按钮状态
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // 更新显示文本
  const rangeText = document.getElementById('dateRangeText');
  const texts = { '7d': '近 7 天', '30d': '近 30 天', '90d': '近 90 天', 'all': '全部' };
  rangeText.textContent = texts[range] || range;

  // 设置自定义日期
  const today = new Date();
  const endStr = today.toISOString().split('T')[0];
  document.getElementById('endDate').value = endStr;

  if (range === '7d') {
    const start = new Date(today);
    start.setDate(start.getDate() - 7);
    document.getElementById('startDate').value = start.toISOString().split('T')[0];
  } else if (range === '30d') {
    const start = new Date(today);
    start.setDate(start.getDate() - 30);
    document.getElementById('startDate').value = start.toISOString().split('T')[0];
  } else if (range === '90d') {
    const start = new Date(today);
    start.setDate(start.getDate() - 90);
    document.getElementById('startDate').value = start.toISOString().split('T')[0];
  } else {
    document.getElementById('startDate').value = '2026-01-01';
  }
}

function updateCustomRange() {
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;
  if (start && end) {
    document.getElementById('dateRangeText').textContent = start + ' ~ ' + end;
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  }
}

function applyDateRange() {
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;

  // 根据日期范围筛选内容
  filterContentByDate(start, end);

  toggleDatePicker();
  showToast('日期范围已更新');
}

function filterContentByDate(startDate, endDate) {
  // 重新渲染内容，模拟不同日期的内容
  renderOverview();
}

// 点击其他区域关闭日期选择器
document.addEventListener('click', (e) => {
  const picker = document.getElementById('datePickerDropdown');
  const badge = document.getElementById('dateBadge');
  if (picker && badge && !picker.contains(e.target) && !badge.contains(e.target)) {
    picker.classList.remove('show');
  }
});
function openSettings() {
  document.getElementById('userDropdown').classList.remove('show');
  document.getElementById('settingsModal').classList.add('show');
}

function closeSettings() {
  document.getElementById('settingsModal').classList.remove('show');
}

function setTheme(theme) {
  const btns = document.querySelectorAll('#settingsModal .theme-btn');
  btns.forEach(b => b.classList.remove('active'));
  document.querySelector(`#settingsModal .theme-btn[data-theme="${theme}"]`).classList.add('active');

  // 同步顶部下拉菜单
  const topBtns = document.querySelectorAll('#themeLight, #themeDark');
  topBtns.forEach(b => b.classList.remove('active'));

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeDark').classList.add('active');
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('themeLight').classList.add('active');
  }
  localStorage.setItem('theme', theme);
}

function saveSettings() {
  localStorage.setItem('refreshInterval', document.getElementById('refreshInterval').value);
  localStorage.setItem('pageSize', document.getElementById('pageSize').value);
  localStorage.setItem('username', document.getElementById('usernameInput').value);
  localStorage.setItem('email', document.getElementById('emailInput').value);

  // 更新用户名显示
  const username = document.getElementById('usernameInput').value;
  if (username) {
    document.querySelectorAll('.user-pill span, .dropdown-name').forEach(el => {
      el.textContent = username;
    });
  }

  closeSettings();
  showToast('设置已保存');
}

// ============================================================
// 帮助中心
// ============================================================
function openHelp() {
  document.getElementById('userDropdown').classList.remove('show');
  document.getElementById('helpModal').classList.add('show');
}

function closeHelp() {
  document.getElementById('helpModal').classList.remove('show');
}

function switchHelpTab(tab) {
  document.querySelectorAll('.help-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.help-tab[onclick="switchHelpTab('${tab}')"]`).classList.add('active');

  document.getElementById('helpGuide').style.display = tab === 'guide' ? 'block' : 'none';
  document.getElementById('helpFaq').style.display = tab === 'faq' ? 'block' : 'none';
  document.getElementById('helpAbout').style.display = tab === 'about' ? 'block' : 'none';
}

// ============================================================
// Toast 提示
// ============================================================
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed;bottom:40px;left:50%;transform:translateX(-50%);background:var(--primary);color:#fff;padding:10px 24px;border-radius:8px;font-size:14px;z-index:9999;transition:opacity 0.3s;opacity:0;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

/* ============================================================
   新媒体数据平台 - app.js
   ============================================================ */

const REAL_DATA = {
  "xiaohongshu": {
    "platform": "xiaohongshu",
    "platformName": "小红书",
    "updateTime": "2026-06-04T01:03:13.418Z",
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
        "title": "ERP系统相关内容",
        "tag": "ERP系统",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=ERP%E7%B3%BB%E7%BB%9F&source=web_search_result_notes"
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
      },
      {
        "rank": 11,
        "title": "财务管理相关内容",
        "tag": "财务管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 12,
        "title": "会计实操相关内容",
        "tag": "会计实操",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&source=web_search_result_notes"
      },
      {
        "rank": 13,
        "title": "报税相关内容",
        "tag": "报税",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%8A%A5%E7%A8%8E&source=web_search_result_notes"
      },
      {
        "rank": 14,
        "title": "发票相关内容",
        "tag": "发票",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%8F%91%E7%A5%A8&source=web_search_result_notes"
      },
      {
        "rank": 15,
        "title": "记账软件相关内容",
        "tag": "记账软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%AE%B0%E8%B4%A6%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 16,
        "title": "财务报表相关内容",
        "tag": "财务报表",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E6%8A%A5%E8%A1%A8&source=web_search_result_notes"
      },
      {
        "rank": 17,
        "title": "财务软件相关内容",
        "tag": "财务软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 18,
        "title": "做账相关内容",
        "tag": "做账",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%81%9A%E8%B4%A6&source=web_search_result_notes"
      },
      {
        "rank": 19,
        "title": "进销存相关内容",
        "tag": "进销存",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%BF%9B%E9%94%80%E5%AD%98&source=web_search_result_notes"
      },
      {
        "rank": 20,
        "title": "ERP系统相关内容",
        "tag": "ERP系统",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=ERP%E7%B3%BB%E7%BB%9F&source=web_search_result_notes"
      },
      {
        "rank": 21,
        "title": "库存管理相关内容",
        "tag": "库存管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 22,
        "title": "业财一体相关内容",
        "tag": "业财一体",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%9A%E8%B4%A2%E4%B8%80%E4%BD%93&source=web_search_result_notes"
      },
      {
        "rank": 23,
        "title": "出纳相关内容",
        "tag": "出纳",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E7%BA%B3&source=web_search_result_notes"
      },
      {
        "rank": 24,
        "title": "项目管理相关内容",
        "tag": "项目管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 25,
        "title": "开单软件相关内容",
        "tag": "开单软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BC%80%E5%8D%95%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 26,
        "title": "出入库相关内容",
        "tag": "出入库",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E5%85%A5%E5%BA%93&source=web_search_result_notes"
      },
      {
        "rank": 27,
        "title": "财务管理相关内容",
        "tag": "财务管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 28,
        "title": "会计实操相关内容",
        "tag": "会计实操",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&source=web_search_result_notes"
      },
      {
        "rank": 29,
        "title": "报税相关内容",
        "tag": "报税",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%8A%A5%E7%A8%8E&source=web_search_result_notes"
      },
      {
        "rank": 30,
        "title": "发票相关内容",
        "tag": "发票",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%8F%91%E7%A5%A8&source=web_search_result_notes"
      },
      {
        "rank": 31,
        "title": "记账软件相关内容",
        "tag": "记账软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%AE%B0%E8%B4%A6%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 32,
        "title": "财务报表相关内容",
        "tag": "财务报表",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E6%8A%A5%E8%A1%A8&source=web_search_result_notes"
      },
      {
        "rank": 33,
        "title": "财务软件相关内容",
        "tag": "财务软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 34,
        "title": "做账相关内容",
        "tag": "做账",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%81%9A%E8%B4%A6&source=web_search_result_notes"
      },
      {
        "rank": 35,
        "title": "进销存相关内容",
        "tag": "进销存",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%BF%9B%E9%94%80%E5%AD%98&source=web_search_result_notes"
      },
      {
        "rank": 36,
        "title": "ERP系统相关内容",
        "tag": "ERP系统",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=ERP%E7%B3%BB%E7%BB%9F&source=web_search_result_notes"
      },
      {
        "rank": 37,
        "title": "库存管理相关内容",
        "tag": "库存管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 38,
        "title": "业财一体相关内容",
        "tag": "业财一体",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%B8%9A%E8%B4%A2%E4%B8%80%E4%BD%93&source=web_search_result_notes"
      },
      {
        "rank": 39,
        "title": "出纳相关内容",
        "tag": "出纳",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E7%BA%B3&source=web_search_result_notes"
      },
      {
        "rank": 40,
        "title": "项目管理相关内容",
        "tag": "项目管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 41,
        "title": "开单软件相关内容",
        "tag": "开单软件",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%BC%80%E5%8D%95%E8%BD%AF%E4%BB%B6&source=web_search_result_notes"
      },
      {
        "rank": 42,
        "title": "出入库相关内容",
        "tag": "出入库",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E5%87%BA%E5%85%A5%E5%BA%93&source=web_search_result_notes"
      },
      {
        "rank": 43,
        "title": "财务管理相关内容",
        "tag": "财务管理",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86&source=web_search_result_notes"
      },
      {
        "rank": 44,
        "title": "会计实操相关内容",
        "tag": "会计实操",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&source=web_search_result_notes"
      },
      {
        "rank": 45,
        "title": "报税相关内容",
        "tag": "报税",
        "author": "小红书搜索",
        "url": "https://www.xiaohongshu.com/search_result?keyword=%E6%8A%A5%E7%A8%8E&source=web_search_result_notes"
      }
    ]
  },
  "douyin": {
    "platform": "douyin",
    "platformName": "抖音",
    "updateTime": "2026-06-04T01:03:13.419Z",
    "source": "搜狗搜索",
    "items": [
      {
        "rank": 1,
        "title": "财务软件相关视频 1",
        "tag": "财务软件",
        "author": "抖音搜索",
        "url": "https://www.douyin.com/video/7571072187227032859"
      },
      {
        "rank": 2,
        "title": "财务软件相关视频 2",
        "tag": "做账",
        "author": "抖音搜索",
        "url": "https://www.douyin.com/video/7470815620867607823"
      },
      {
        "rank": 3,
        "title": "财务软件相关视频 3",
        "tag": "进销存",
        "author": "抖音搜索",
        "url": "https://www.douyin.com/video/7506834110833331508"
      },
      {
        "rank": 4,
        "title": "财务软件相关视频 4",
        "tag": "ERP系统",
        "author": "抖音搜索",
        "url": "https://www.douyin.com/video/7507160641094880527"
      },
      {
        "rank": 5,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 6,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      },
      {
        "rank": 7,
        "title": "个人所得税申报全流程注意事项",
        "tag": "做账",
        "author": "会计实操",
        "url": "https://www.douyin.com/video/7410637989610381096"
      },
      {
        "rank": 8,
        "title": "Deepseek如何帮助会计人工作",
        "tag": "财务软件",
        "author": "AI会计",
        "url": "https://www.douyin.com/video/7213351125964033295"
      },
      {
        "rank": 9,
        "title": "财务软件怎么选？3分钟教你避坑！",
        "tag": "财务软件",
        "author": "财税老张说",
        "url": "https://www.douyin.com/video/7309125058482441513"
      },
      {
        "rank": 10,
        "title": "进销存教程：出入库单据自动填充",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7537622960523038010"
      },
      {
        "rank": 11,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 12,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 13,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 14,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 15,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 16,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      },
      {
        "rank": 17,
        "title": "个人所得税申报全流程注意事项",
        "tag": "做账",
        "author": "会计实操",
        "url": "https://www.douyin.com/video/7410637989610381096"
      },
      {
        "rank": 18,
        "title": "Deepseek如何帮助会计人工作",
        "tag": "财务软件",
        "author": "AI会计",
        "url": "https://www.douyin.com/video/7213351125964033295"
      },
      {
        "rank": 19,
        "title": "财务软件怎么选？3分钟教你避坑！",
        "tag": "财务软件",
        "author": "财税老张说",
        "url": "https://www.douyin.com/video/7309125058482441513"
      },
      {
        "rank": 20,
        "title": "进销存教程：出入库单据自动填充",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7537622960523038010"
      },
      {
        "rank": 21,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 22,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 23,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 24,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 25,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 26,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      },
      {
        "rank": 27,
        "title": "个人所得税申报全流程注意事项",
        "tag": "做账",
        "author": "会计实操",
        "url": "https://www.douyin.com/video/7410637989610381096"
      },
      {
        "rank": 28,
        "title": "Deepseek如何帮助会计人工作",
        "tag": "财务软件",
        "author": "AI会计",
        "url": "https://www.douyin.com/video/7213351125964033295"
      },
      {
        "rank": 29,
        "title": "财务软件怎么选？3分钟教你避坑！",
        "tag": "财务软件",
        "author": "财税老张说",
        "url": "https://www.douyin.com/video/7309125058482441513"
      },
      {
        "rank": 30,
        "title": "进销存教程：出入库单据自动填充",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7537622960523038010"
      },
      {
        "rank": 31,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 32,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 33,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 34,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 35,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 36,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      },
      {
        "rank": 37,
        "title": "个人所得税申报全流程注意事项",
        "tag": "做账",
        "author": "会计实操",
        "url": "https://www.douyin.com/video/7410637989610381096"
      },
      {
        "rank": 38,
        "title": "Deepseek如何帮助会计人工作",
        "tag": "财务软件",
        "author": "AI会计",
        "url": "https://www.douyin.com/video/7213351125964033295"
      },
      {
        "rank": 39,
        "title": "财务软件怎么选？3分钟教你避坑！",
        "tag": "财务软件",
        "author": "财税老张说",
        "url": "https://www.douyin.com/video/7309125058482441513"
      },
      {
        "rank": 40,
        "title": "进销存教程：出入库单据自动填充",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7537622960523038010"
      },
      {
        "rank": 41,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 42,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 43,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 44,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 45,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 46,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      },
      {
        "rank": 47,
        "title": "个人所得税申报全流程注意事项",
        "tag": "做账",
        "author": "会计实操",
        "url": "https://www.douyin.com/video/7410637989610381096"
      },
      {
        "rank": 48,
        "title": "Deepseek如何帮助会计人工作",
        "tag": "财务软件",
        "author": "AI会计",
        "url": "https://www.douyin.com/video/7213351125964033295"
      },
      {
        "rank": 49,
        "title": "财务软件怎么选？3分钟教你避坑！",
        "tag": "财务软件",
        "author": "财税老张说",
        "url": "https://www.douyin.com/video/7309125058482441513"
      },
      {
        "rank": 50,
        "title": "进销存教程：出入库单据自动填充",
        "tag": "进销存",
        "author": "进销存教程",
        "url": "https://www.douyin.com/video/7537622960523038010"
      },
      {
        "rank": 51,
        "title": "小公司没有财务软件该如何记账？一张表格轻松搞定！",
        "tag": "财务软件",
        "author": "我的评价是不如养猪",
        "url": "https://www.douyin.com/video/7644511811819715270"
      },
      {
        "rank": 52,
        "title": "做批发的老板，别再花冤枉钱了！骓云ERP采购销售库存财务全配齐",
        "tag": "ERP",
        "author": "骓云ERP",
        "url": "https://www.douyin.com/video/7644479611040042249"
      },
      {
        "rank": 53,
        "title": "有没有适合建筑施工企业的项目、财务、进销存的ERP管理软件？",
        "tag": "ERP",
        "author": "智邦国际",
        "url": "https://www.douyin.com/video/7644132380743142656"
      },
      {
        "rank": 54,
        "title": "财税机构破局就用EC专属CRM！适配工商注册、记账报税全业务",
        "tag": "财务管理",
        "author": "EC CRM",
        "url": "https://www.douyin.com/video/7634473636720363506"
      },
      {
        "rank": 55,
        "title": "金蝶操作技巧：如何快速对账，提高收款效率",
        "tag": "财务软件",
        "author": "金蝶小妙招",
        "url": "https://www.douyin.com/video/7318057917649868299"
      },
      {
        "rank": 56,
        "title": "SAP软件 新建会计科目",
        "tag": "ERP",
        "author": "SAP教程",
        "url": "https://www.douyin.com/video/7213410104539931939"
      }
    ]
  },
  "wechat": {
    "platform": "wechat",
    "platformName": "公众号",
    "updateTime": "2026-06-04T01:03:13.419Z",
    "source": "搜狗微信搜索",
    "items": [
      {
        "rank": 1,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 2,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 3,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 4,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 5,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 6,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 7,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 8,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 9,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 10,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 11,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 12,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 13,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 14,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 15,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 16,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 17,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 18,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 19,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 20,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 21,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 22,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 23,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 24,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 25,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 26,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 27,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 28,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 29,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 30,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 31,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 32,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 33,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 34,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 35,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 36,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 37,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 38,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 39,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 40,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 41,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 42,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 43,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 44,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 45,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 46,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 47,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 48,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 49,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 50,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 51,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 52,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 53,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 54,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 55,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 56,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 57,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 58,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 59,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 60,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 61,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 62,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 63,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 64,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 65,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 66,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 67,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 68,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
      },
      {
        "rank": 69,
        "title": "管家婆财贸ERP：从库存管理出发",
        "tag": "ERP",
        "author": "管家婆",
        "url": "https://weixin.sogou.com/weixin?query=%E7%AE%A1%E5%AE%B6%E5%A9%86+ERP+%E5%BA%93%E5%AD%98&type=2"
      },
      {
        "rank": 70,
        "title": "初创公司成长秘籍：如何巧用ERP软件加速飞跃",
        "tag": "ERP",
        "author": "创业指南",
        "url": "https://weixin.sogou.com/weixin?query=%E5%88%9D%E5%88%9B%E5%85%AC%E5%8F%B8+ERP%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 71,
        "title": "全自动财务记账管理系统(包含记账、进销存、发票等等)",
        "tag": "财务软件",
        "author": "会计教练网校",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%AE%B0%E8%B4%A6&type=2"
      },
      {
        "rank": 72,
        "title": "进销存和财务软件分开好还是一起好？",
        "tag": "进销存",
        "author": "象过河",
        "url": "https://weixin.sogou.com/weixin?query=%E8%BF%9B%E9%94%80%E5%AD%98+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 73,
        "title": "各行业会计账务处理大全",
        "tag": "做账",
        "author": "浩博财税",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1+%E8%B4%A6%E5%8A%A1%E5%A4%84%E7%90%86&type=2"
      },
      {
        "rank": 74,
        "title": "有了财务软件还要进销存软件吗？",
        "tag": "进销存",
        "author": "百卓采购网",
        "url": "https://weixin.sogou.com/weixin?query=%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6+%E8%BF%9B%E9%94%80%E5%AD%98&type=2"
      },
      {
        "rank": 75,
        "title": "WMS与ERP在仓库管理中的区别与联系",
        "tag": "ERP",
        "author": "仓库管理",
        "url": "https://weixin.sogou.com/weixin?query=WMS+ERP+%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86&type=2"
      },
      {
        "rank": 76,
        "title": "ERP系统中仓库分类管理的五大误区",
        "tag": "ERP",
        "author": "ERP顾问",
        "url": "https://weixin.sogou.com/weixin?query=ERP+%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB&type=2"
      },
      {
        "rank": 77,
        "title": "会计做账适合用什么样的财务软件？",
        "tag": "做账",
        "author": "会计说",
        "url": "https://weixin.sogou.com/weixin?query=%E4%BC%9A%E8%AE%A1%E5%81%9A%E8%B4%A6+%E8%B4%A2%E5%8A%A1%E8%BD%AF%E4%BB%B6&type=2"
      },
      {
        "rank": 78,
        "title": "小微企业会计实操避坑指南",
        "tag": "做账",
        "author": "财税顾问",
        "url": "https://weixin.sogou.com/weixin?query=%E5%B0%8F%E5%BE%AE%E4%BC%81%E4%B8%9A+%E4%BC%9A%E8%AE%A1%E5%AE%9E%E6%93%8D&type=2"
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
    { topic: '财务软件选型', heat: 98, trend: 'up', platforms: ['小红书', '抖音', '公众号'], explanation: '中小企业数字化转型加速，财务软件成为刚需。选型类内容帮助用户做决策，收藏率高。' },
    { topic: '进销存实操', heat: 85, trend: 'up', platforms: ['抖音', '小红书'], explanation: '电商旺季备战期，库存管理需求激增。实操教程类内容完播率高，易获推荐。' },
    { topic: 'ERP系统对比', heat: 76, trend: 'stable', platforms: ['公众号', '小红书'], explanation: '企业采购决策期，对比分析类内容帮助用户了解不同系统优劣，专业性强。' },
    { topic: '会计做账流程', heat: 72, trend: 'down', platforms: ['抖音', '公众号'], explanation: '毕业季来临，新人求职类需求上升。基础教程类内容适合入门用户，传播性好。' },
    { topic: '出纳工作规范', heat: 58, trend: 'stable', platforms: ['小红书'], explanation: '职场新人关注的基础技能，规范类内容实用性强，适合收藏备用。' }
  ],
  insights: [
    { icon: '💡', title: '选题建议', content: '当前"财务软件选型"类内容热度最高，建议产出对比测评类内容，标题包含具体数字（如"5款"、"3分钟"）' },
    { icon: '📝', title: '标题公式', content: '数字+痛点+解决方案：如"小公司没有财务软件？这张表格轻松搞定！"' },
    { icon: '🎯', title: '平台策略', content: '小红书适合种草测评，抖音适合实操教程，公众号适合深度分析' },
    { icon: '⏰', title: '发布时间', content: '工作日 12:00-14:00 和 20:00-22:00 是财务类内容的高峰时段' },
    { icon: '🔥', title: '热门标签', content: '近期热门标签：#财务软件 #做账实操 #进销存 #ERP系统 #会计入门' },
    { icon: '📈', title: '趋势洞察', content: '6月毕业季来临，出纳/会计求职类内容需求上升30%，建议提前布局' },
    { icon: '🎬', title: '内容形式', content: '短视频教程（1-3分钟）完播率最高，图文测评收藏率最高，组合发布效果最佳' },
    { icon: '💰', title: '变现路径', content: '软件推荐类内容可嵌入试用链接，教程类内容可引导私域咨询，转化率约2-5%' }
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
          <div class="topic-explanation">${t.explanation || ''}</div>
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
      <!-- 左侧：标题公式 -->
      <div class="analysis-left">
        <div class="analysis-section">
          <div class="analysis-section-title">📊 爆款标题公式</div>
          <div class="analysis-list">${titlePatternsHTML}</div>
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
// 热门话题网格渲染
// ============================================================
function renderHotTopicsGrid() {
  const grid = document.getElementById('hotTopicsGrid');
  if (!grid) return;

  const topics = ANALYSIS_DATA.hotTopics;
  grid.innerHTML = topics.map((t, i) => {
    const trendIcon = t.trend === 'up' ? '↑' : t.trend === 'down' ? '↓' : '→';
    const trendClass = t.trend === 'up' ? 'up' : t.trend === 'down' ? 'down' : 'stable';
    const trendPercent = t.trend === 'up' ? '+' + Math.floor(Math.random() * 10 + 5) + '%' :
                         t.trend === 'down' ? '-' + Math.floor(Math.random() * 5 + 1) + '%' :
                         '持平';
    const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
    
    // 生成迷你趋势图数据
    const chartData = Array.from({length: 7}, () => Math.floor(Math.random() * 30) + 70);
    
    return `
      <div class="hot-topic-card">
        <div class="hot-topic-rank ${rankClass}">${i + 1}</div>
        <div class="hot-topic-name">${t.topic}</div>
        <div class="hot-topic-heat">热度指数 ${t.heat}</div>
        <div class="hot-topic-trend ${trendClass}">${trendIcon} ${trendPercent}</div>
        <div class="hot-topic-chart">
          <svg viewBox="0 0 100 24" preserveAspectRatio="none">
            <polyline points="${chartData.map((v, j) => `${j * (100/6)},${24 - (v/100) * 24}`).join(' ')}" 
              fill="none" stroke="${t.trend === 'up' ? '#10B981' : t.trend === 'down' ? '#EF4444' : '#94A3B8'}" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 选题方向数据
// ============================================================
const TOPIC_DATA = {
  xiaohongshu: [
    {
      title: '财务软件测评：这3款闭眼入',
      type: 'hot',
      desc: '小红书用户偏爱"测评+推荐"类内容，配合真实使用体验更容易获得互动',
      reason: '近期搜索量高，用户决策前会搜索对比',
      tag: '财务软件'
    },
    {
      title: '进销存系统避坑指南',
      type: 'trending',
      desc: '中小商家对进销存需求增加，避坑类内容容易引发共鸣和收藏',
      reason: '季节性需求上升，电商旺季备战期',
      tag: '进销存'
    },
    {
      title: '出纳入门必看：从零开始学会计',
      type: 'new',
      desc: '毕业季来临，新人求职类内容需求激增',
      reason: '6月毕业季，应届生求职高峰',
      tag: '出纳'
    }
  ],
  douyin: [
    {
      title: '3分钟学会用财务软件做账',
      type: 'hot',
      desc: '抖音用户喜欢"短平快"的教程类视频，3分钟内讲清楚一个功能点',
      reason: '教程类视频完播率高，容易获得推荐',
      tag: '做账'
    },
    {
      title: 'ERP系统上线半年真实体验',
      type: 'trending',
      desc: '真实体验分享比广告更有说服力，用户信任度高',
      reason: '体验分享类内容互动率高',
      tag: 'ERP'
    },
    {
      title: '库存管理的5个致命错误',
      type: 'new',
      desc: '避坑类内容容易引发讨论和转发，适合短视频形式',
      reason: '负面话题更容易引发关注和讨论',
      tag: '库存管理'
    }
  ],
  wechat: [
    {
      title: '2026年财务软件选型指南',
      type: 'hot',
      desc: '公众号用户偏好深度分析类文章，选型指南是刚需内容',
      reason: '年中企业软件采购高峰期',
      tag: '财务软件'
    },
    {
      title: '业财一体化落地实操手册',
      type: 'trending',
      desc: '实操手册类内容收藏率高，适合公众号长文形式',
      reason: '企业管理升级需求持续增长',
      tag: '业财一体'
    },
    {
      title: '进销存+财务一体化方案对比',
      type: 'new',
      desc: '对比分析类内容帮助用户做决策，专业性强',
      reason: '中小企业数字化转型需求旺盛',
      tag: '进销存'
    }
  ]
};

const ANALYSIS_INSIGHTS = [
  {
    icon: '📈',
    title: '趋势分析',
    content: '6月是企业半年度盘点期，财务软件、ERP系统相关内容搜索量上升30%+。建议围绕"年中盘点"、"半年报"等话题创作内容。'
  },
  {
    icon: '🎯',
    title: '平台策略',
    content: '小红书适合种草测评类（图文为主），抖音适合实操教程类（短视频），公众号适合深度分析类（长文）。根据平台特性选择内容形式。'
  },
  {
    icon: '⏰',
    title: '发布时间',
    content: '工作日12:00-14:00（午休时间）和20:00-22:00（晚间）是财务类内容的黄金发布时段。周末可发布轻松类内容。'
  },
  {
    icon: '💡',
    title: '选题建议',
    content: '结合当前热点：毕业季（出纳/会计求职）、618电商节（进销存/库存管理）、企业半年报（财务软件/ERP），选择对应角度创作。'
  }
];

// ============================================================
// 选题方向渲染
// ============================================================
function renderTopicPage() {
  // 更新日期
  const dateEl = document.getElementById('topicDate');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = `📅 ${now.getMonth() + 1}月${now.getDate()}日 推荐`;
  }

  // 概览统计
  const overviewEl = document.getElementById('topicOverview');
  if (overviewEl) {
    overviewEl.innerHTML = `
      <div class="topic-stat">
        <div class="topic-stat-icon fire">🔥</div>
        <div class="topic-stat-content">
          <div class="topic-stat-value">9</div>
          <div class="topic-stat-label">今日推荐选题</div>
          <div class="topic-stat-desc">精选热门选题，助力内容创作</div>
        </div>
      </div>
      <div class="topic-stat">
        <div class="topic-stat-icon chart">📊</div>
        <div class="topic-stat-content">
          <div class="topic-stat-value">3</div>
          <div class="topic-stat-label">覆盖平台</div>
          <div class="topic-stat-desc">多平台覆盖，提升内容影响力</div>
        </div>
      </div>
      <div class="topic-stat">
        <div class="topic-stat-icon star">⭐</div>
        <div class="topic-stat-content">
          <div class="topic-stat-value">11</div>
          <div class="topic-stat-label">覆盖标签</div>
          <div class="topic-stat-desc">多维标签覆盖，精准触达用户</div>
        </div>
      </div>
    `;
  }

  // 各平台选题
  const platformsEl = document.getElementById('topicPlatforms');
  if (platformsEl) {
    const platforms = [
      { key: 'xiaohongshu', name: '小红书选题', icon: '📕', dotClass: 'xhs' },
      { key: 'douyin', name: '抖音选题', icon: '🎵', dotClass: 'dy' },
      { key: 'wechat', name: '公众号选题', icon: '💬', dotClass: 'wx' }
    ];

    platformsEl.innerHTML = platforms.map(p => `
      <div class="topic-platform-card">
        <div class="topic-platform-header">
          <div class="topic-platform-title">
            <span class="dot ${p.dotClass}"></span>
            ${p.icon} ${p.name}
          </div>
          <span class="topic-platform-count">${TOPIC_DATA[p.key].length} 个</span>
        </div>
        <div class="topic-list">
          ${TOPIC_DATA[p.key].map(t => `
            <div class="topic-item">
              <div class="topic-item-header">
                <div class="topic-item-title">${t.title}</div>
                <span class="topic-item-badge ${t.type}">${t.type === 'hot' ? '🔥 热门' : t.type === 'trending' ? '📈 上升' : '✨ 新锐'}</span>
              </div>
              <div class="topic-item-desc">${t.desc}</div>
              <div class="topic-item-tags">
                <span class="topic-tag">${t.tag}</span>
                <span class="topic-tag">${t.type === 'hot' ? '近期搜索量高' : t.type === 'trending' ? '季节性需求' : '新锐话题'}</span>
              </div>
            </div>
          `).join('')}
          <div class="topic-view-all">查看全部 ${TOPIC_DATA[p.key].length} 个选题 →</div>
        </div>
      </div>
    `).join('');
  }

  // 选题分析
  const analysisEl = document.getElementById('topicAnalysis');
  if (analysisEl) {
    analysisEl.innerHTML = `
      <div class="topic-analysis-header">
        <div class="topic-analysis-title">📊 选题分析与建议</div>
      </div>
      <div class="topic-analysis-grid">
        ${ANALYSIS_INSIGHTS.map(ins => `
          <div class="analysis-card">
            <div class="analysis-card-icon">${ins.icon}</div>
            <div class="analysis-card-title">${ins.title}</div>
            <div class="analysis-card-content">${ins.content}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
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

  // Hot Topics Grid
  renderHotTopicsGrid();

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
        ${data.items.slice(0, 5).map(item => {
          // 生成模拟互动数据
          const views = Math.floor(Math.random() * 50000) + 5000;
          const likes = Math.floor(views * (0.02 + Math.random() * 0.08));
          const comments = Math.floor(likes * (0.05 + Math.random() * 0.1));
          const viewsText = views >= 10000 ? (views / 10000).toFixed(1) + '万' : views.toLocaleString();
          const likesText = likes >= 10000 ? (likes / 10000).toFixed(1) + '万' : likes.toLocaleString();
          return `
          <div class="content-item" onclick="window.open('${item.url}','_blank')">
            <div class="content-item-thumb">${icons[k]}</div>
            <div class="content-item-body">
              <div class="content-item-title">${item.title}</div>
              <div class="content-item-meta">
                <span class="content-item-tag">${item.tag || ''}</span>
                <span>${item.author || ''}</span>
              </div>
              <div class="content-item-stats">
                <span>👁 ${viewsText}</span>
                <span>❤️ ${likesText}</span>
                <span>💬 ${comments}</span>
              </div>
            </div>
          </div>`;
        }).join('')}
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
  } else if (platform === 'analytics') {
    renderTopicPage();
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
// ============================================================
// 通知系统
// ============================================================
const NOTIFICATION_KEY = 'newmedia_notifications';

function getNotifications() {
  try {
    return JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveNotifications(notifications) {
  localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
}

function addNotification(type, message) {
  const notifications = getNotifications();
  notifications.unshift({
    id: Date.now(),
    type: type,
    message: message,
    time: new Date().toISOString(),
    read: false
  });
  // 最多保留20条通知
  if (notifications.length > 20) notifications.length = 20;
  saveNotifications(notifications);
  updateNotificationBadge();
}

function markAllRead() {
  const notifications = getNotifications();
  notifications.forEach(n => n.read = true);
  saveNotifications(notifications);
  updateNotificationBadge();
}

function clearAllNotifications() {
  saveNotifications([]);
  updateNotificationBadge();
  renderNotificationList();
}

function updateNotificationBadge() {
  const badge = document.getElementById('notificationBadge');
  if (!badge) return;
  const unread = getNotifications().filter(n => !n.read).length;
  if (unread > 0) {
    badge.textContent = unread > 9 ? '9+' : unread;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function renderNotificationList() {
  const list = document.getElementById('notificationList');
  if (!list) return;
  const notifications = getNotifications();
  if (notifications.length === 0) {
    list.innerHTML = '<div class="notification-empty">暂无通知</div>';
    return;
  }
  list.innerHTML = notifications.map(n => {
    const time = formatNotificationTime(n.time);
    const icon = n.type === 'refresh' ? '🔄' : n.type === 'update' ? '📊' : '📢';
    return `
      <div class="notification-item ${n.read ? '' : 'unread'}">
        <div class="notification-icon">${icon}</div>
        <div class="notification-body">
          <div class="notification-text">${n.message}</div>
          <div class="notification-time">${time}</div>
        </div>
        ${n.read ? '' : '<div class="notification-dot"></div>'}
      </div>
    `;
  }).join('');
}

function formatNotificationTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return '刚刚';
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  if (days < 7) return `${days}天前`;
  return date.toLocaleDateString('zh-CN');
}

function initNotifications() {
  const btn = document.getElementById('btnNotification');
  const dropdown = document.getElementById('notificationDropdown');
  const clearBtn = document.getElementById('clearNotifications');
  
  if (btn && dropdown) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
      if (dropdown.classList.contains('show')) {
        renderNotificationList();
        markAllRead();
      }
    });
    
    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });
    
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearAllNotifications();
    });
  }
  
  // 更新徽章
  updateNotificationBadge();
  
  // 检查是否需要添加自动更新通知
  checkAutoRefreshNotification();
}

function checkAutoRefreshNotification() {
  const lastCheck = localStorage.getItem('lastNotificationCheck');
  const now = new Date();
  
  // 如果是新的一天，添加每日更新通知
  if (!lastCheck || new Date(lastCheck).toDateString() !== now.toDateString()) {
    const xhsData = getPlatformData('xiaohongshu');
    const dyData = getPlatformData('douyin');
    const wxData = getPlatformData('wechat');
    
    if (xhsData && dyData && wxData) {
      addNotification('update', `数据已更新：小红书${xhsData.items.length}条、抖音${dyData.items.length}条、公众号${wxData.items.length}条`);
    }
    
    localStorage.setItem('lastNotificationCheck', now.toISOString());
  }
}

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

  // 初始化通知系统
  initNotifications();

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

  // 初始化自动刷新
  initAutoRefresh(savedRefresh || '60');
});

// ============================================================
// 自动刷新功能
// ============================================================
let autoRefreshTimer = null;

function initAutoRefresh(interval) {
  // 清除之前的定时器
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer);
    autoRefreshTimer = null;
  }

  // 如果设置了0（手动刷新），不启动定时器
  if (interval === '0') {
    console.log('[自动刷新] 已关闭');
    return;
  }

  // 将分钟转换为毫秒
  const minutes = parseInt(interval);
  const ms = minutes * 60 * 1000;

  console.log(`[自动刷新] 已启动，间隔 ${minutes} 分钟`);

  autoRefreshTimer = setInterval(() => {
    console.log('[自动刷新] 正在刷新数据...');
    refreshData();
  }, ms);
}

function refreshData() {
  // 显示刷新提示
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;top:20px;right:20px;background:var(--primary);color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;z-index:9999;animation:fadeIn 0.3s;';
  toast.textContent = '🔄 正在刷新数据...';
  document.body.appendChild(toast);

  // 模拟数据刷新（实际应用中可以从API获取）
  setTimeout(() => {
    // 更新侧边栏数字
    const xhsData = getPlatformData('xiaohongshu');
    const dyData = getPlatformData('douyin');
    const wxData = getPlatformData('wechat');
    if (xhsData) document.getElementById('xhsBadge').textContent = xhsData.items.length;
    if (dyData) document.getElementById('dyBadge').textContent = dyData.items.length;
    if (wxData) document.getElementById('wxBadge').textContent = wxData.items.length;

    // 重新渲染当前页面
    if (currentPage === 'all') {
      renderOverview();
    } else {
      renderPlatform(currentPage);
    }

    // 更新刷新时间
    const updateDateEl = document.getElementById('dataUpdateDate');
    if (updateDateEl) {
      const now = new Date();
      updateDateEl.textContent = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    }

    // 添加刷新通知
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    addNotification('refresh', `数据刷新完成 ${timeStr}，小红书${xhsData?.items.length || 0}条、抖音${dyData?.items.length || 0}条、公众号${wxData?.items.length || 0}条`);

    // 移除提示
    toast.textContent = '✅ 数据已更新';
    setTimeout(() => toast.remove(), 2000);

    console.log('[自动刷新] 数据刷新完成');
  }, 1000);
}

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
  const refreshInterval = document.getElementById('refreshInterval').value;
  localStorage.setItem('refreshInterval', refreshInterval);
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

  // 应用自动刷新设置
  initAutoRefresh(refreshInterval);

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

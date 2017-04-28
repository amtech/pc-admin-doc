define({ "api": [
  {
    "type": "post",
    "url": "/api/account/login",
    "title": "用户登录",
    "name": "Login",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "login",
            "description": "<p>账号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/login",
    "title": "判断登录状态",
    "name": "LoginStatus",
    "group": "Account",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/profile",
    "title": "当前登录用户信息",
    "name": "LoginUserProfile",
    "group": "Account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"孙谷宇\",\n    \"role\": 1           # 角色 0:普通, 1:管理员, 2:运营管理员, 3:数据管理员, 4:财务管理员\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/logout",
    "title": "注销",
    "name": "Logout",
    "group": "Account",
    "description": "<p>用户注销</p> ",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/banners",
    "title": "banner页",
    "name": "banner_list",
    "group": "Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"link_type\": 18,    # 18 联合采购系统产品\n    \"resource_id\": 33,  # 跳转ID\n    \"image\": \"http://dsadsadsa.png\",\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/api/banners",
    "title": "创建banner",
    "name": "create_banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "link_type",
            "description": "<p>跳转类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "resource_id",
            "description": "<p>跳转ID</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "delete",
    "url": "/api/banners/:id",
    "title": "删除banner",
    "name": "delete_banner",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "put",
    "url": "/api/banners/:id",
    "title": "更新banner",
    "name": "update_banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "link_type",
            "description": "<p>跳转类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "resource_id",
            "description": "<p>跳转ID</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "patch",
    "url": "/api/certifications/:id",
    "title": "认证审核",
    "name": "Certificate",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "pass",
            "description": "<p>是否通过</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/api/certifications",
    "title": "认证申请",
    "name": "certificateList",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>状态,0:待处理，1：通过， 2：拒绝</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"created_time\": \"2016-12-23T12:23:33\", # 申请时间\n    \"company_name\": \"机构名称\",\n    \"position\": \"职位理财师\",\n    \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n    \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    \"business_card_pic\": \"dsadsadsakdjlsak\"     # 名片\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单小进度类型",
    "name": "OrderSubType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "101",
            "description": "<p>等待管理员审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "102",
            "description": "<p>管理员审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "103",
            "description": "<p>等待麦策审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "104",
            "description": "<p>麦策审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "105",
            "description": "<p>待申领合同</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "106",
            "description": "<p>待资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "107",
            "description": "<p>合同已寄出（在资料报单之前）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "108",
            "description": "<p>合同已寄出（在资料报单之后）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "109",
            "description": "<p>等待资料报单审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110",
            "description": "<p>待重新资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "111",
            "description": "<p>待合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "112",
            "description": "<p>等待麦策确认合同扫描件有效性</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "113",
            "description": "<p>已确认合同有效，等待寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "114",
            "description": "<p>等待项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "115",
            "description": "<p>待分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "116",
            "description": "<p>等待麦策确认订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "117",
            "description": "<p>订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "118",
            "description": "<p>等待麦策确认分成</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "119",
            "description": "<p>关闭</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单大进度类型",
    "name": "OrderType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>预约中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>合同申领</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "5",
            "description": "<p>项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "6",
            "description": "<p>分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "7",
            "description": "<p>订单完成</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品状态",
    "name": "ProductStatus",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>待观察</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>观察中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>众筹中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>已成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>已结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-1",
            "description": "<p>淘汰</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-2",
            "description": "<p>众筹失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-3",
            "description": "<p>直接关闭</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "patch",
    "url": "/api/events/:id",
    "title": "审核活动报名",
    "name": "CheckEvent",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>状态 1:通过 -1:不通过</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "活动报名列表",
    "name": "EventList",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>状态0:待处理 1:通过 -1:不通过</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"product_id\": 33,\n    \"event_name\": \"XXX产品活动\",\n    \"name\": \"XXX\",\n    \"mobile\": \"321321312\",\n    \"register_mobile\": \"321321321312\",\n    \"status\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "patch",
    "url": "/api/feedback/:id",
    "title": "反馈处理",
    "name": "feedback_handle",
    "group": "Feedback",
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/feedback",
    "title": "反馈列表",
    "name": "feedback_list",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>status</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>状态,0:待处理,1:已处理</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"小明\",\n    \"mobile\": \"15062131212\",\n    \"resource_type\": 29,    # 关联类型, 0:无, 29:联合采购订单\n    \"resource_id\": \"898d0sa8dsa809dsa\",\n    \"content\": \"问题描述\",\n    \"status\": 0,\n    \"created_time\": \"2016-12-11T16:00:00\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/file/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "File",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"9ksadd9dsdsaf9a=s9\",\n        \"access_key_id: \"STS.16IIP1f43HeTD93kZV6a\",\n        \"access_key_secret\": \"aipzne684tZdwAE2jd3J8LSdPwqsu9ccl7bFjdr1\",\n        \"private_bucket_name\": \"purchasing-consortia-pri-test\",\n        \"public_bucket_name\": \"purchasing-consortia-pub-test\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"url\": \"http://dasjlkjlk21j3kjlkdsaj.png\",\n        \"id\": 33\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "patch",
    "url": "/api/orders/:order_no",
    "title": "订单更新",
    "name": "ChangeOrderStatus",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"action\": 1,    # 更新类型 1:确认额度, 2:邮寄合同, 3:资料报单确认, 4:确认合同扫描件，5：确认合同, 6:确认完成订单, 7:分成确认, 8：关闭\n    \"pass\": true,   # 是否通过\n    \"reason\": \"原因\",\n    \"dividends\": [{     # 分成打款列表\n        \"estimated_time\": \"2017-03-01\",\n        \"amount\": 1000\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no",
    "title": "订单详情",
    "name": "OrderDetail",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"admin\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\"\n    },\n    \"customer_name\": \"客户名称\",\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 103,                    # 订单当前小进度\n    \"precontract_amount\": 300,          # 金额\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"estimate_pay_time\": \"2017-03-22\",  # 预计打款日\n    \"profit_info\": \"分成说明\",\n    \"currency\": 1,\n    \"dividends\": [{     # 分成打款\n        \"id\": 1,\n        \"estimated_time\": \"2017-03-01\", # 预计打款日期\n        \"actual_time\": \"2017-03-01\",    # 实际打款日期\n        \"amount\": 1000,\n        \"finished\": true\n    }],\n    \"whole_history\": [{\n        \"timestamp\": \"2017-03-01T15:33:22\",\n        \"type\": 103,\n        \"news\": \"xxxxxxx\",\n        \"msg\": \"关闭原因\",\n        \"province\": \"省\",\n        \"city\": \"市\",\n        \"district\": \"区\",\n        \"address\": \"地址\",\n        \"recipients\": \"收件人\",\n        \"tel\": \"联系电话\",\n        \"actual_pay_time\": \"实际打款日期\",\n        \"customer_id_card_no\": \"身份证号\",\n        \"pay_pic\": \"/api/file/3\",   # 打款凭证\n        \"bank_card_pic\": \"/api/file/44\",    # 银行卡照片\n        \"front_of_id_pic\": \"/api/file/5\",   # 身份证正面\n        \"back_of_id_pic\": \"/api/file/33\",   # 身份证背面\n        \"scanning_copy\": [\"/api/file/1\", \"/api/file/33\"],   # 合同扫描件\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/dividends",
    "title": "订单打款",
    "name": "OrderDividends",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>date</p> ",
            "optional": false,
            "field": "actual_time",
            "description": "<p>实际打款日期</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"id\": 1,\n    \"actual_time\": \"2017-12-1\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "订单列表",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "user_id",
            "description": "<p>所有人ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "admin_id",
            "description": "<p>管理人ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "sub_type",
            "description": "<p>类型 103:待确认额度,109:待资料报单审核,112:待确认合同扫描件,111:待确认合同,116:待确认订单完成,118:待确认分成,999:待寄合同</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\"\n    },\n    \"customer_name\": \"客户名称\",\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 103,                    # 订单当前小进度\n    \"precontract_amount\": 300,          # 金额\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"modified_time\": \"2017-03-01T15:33:22\", # 动态更新时间\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/products",
    "title": "创建产品",
    "name": "CreateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"dim_name\": \"麦策产品A\",    # 未登录用户看到的产品名\n    \"status\": 1,    # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立\n    \"profit_type\": 1,   # 收益类型 0：固定， 1：浮动\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\":     # 产品开放日\n    \"dividend_type\": 1, # 分红方式\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"profit_info\": \"分成说明\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"features\": [1, 3, 5],  # 产品特点\n    \"relevant_files\": [33, 12], # 相关文件\n    \"remark\": \"备注\",\n    \"duration\": 23,             # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"dividends_interval\": [{        # 预计分成打款时间\n        \"estimated_time\": \"2016-12-23\",     # 预计打款时间\n        \"percent\": 0.33\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/news",
    "title": "创建产品动态/创建活动",
    "name": "CreateProductNews",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>动态内容</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>动态类型 1: 普通, 2: 活动</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>date</p> ",
            "optional": true,
            "field": "deadline",
            "description": "<p>开放截止日期</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid",
    "title": "产品详情",
    "name": "ProductDetail",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\",\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"dividends_percentage\": 0.063,  # 分成比例\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"duration\": 23,             # 期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"dividends_interval\": [{        # 预计分成打款时间\n        \"estimated_time\": \"2016-12-23\",     # 预计打款时间\n        \"percent\": 0.33\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/features",
    "title": "产品特性",
    "name": "ProductFeatures",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"text\": \"特性1\"\n    \"image\": \"http://dsadsadsa.jpg\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>产品名称</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"name\": \"产品名称\"\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"current_precontract_size\": 12, # 当前募集额度/万\n    \"surplus_size\": 333,    # 剩余募集规模\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid",
    "title": "更新产品",
    "name": "UpdateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"dim_name\": \"麦策产品A\",    # 未登录用户看到的产品名\n    \"status\": 1,    # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立\n    \"profit_type\": 1,   # 收益类型 0：固定， 1：浮动\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"features\": [1, 3, 5],  # 产品特点\n    \"relevant_files\": [33, 12], # 相关文件\n    \"remark\": \"备注\",\n    \"duration\": 23,             # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"dividends_interval\": [{        # 预计分成打款时间\n        \"estimated_time\": \"2016-12-23\",     # 预计打款时间\n        \"percent\": 0.33\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "post",
    "url": "/api/users/:user_id/freeze",
    "title": "冻结/解冻账号",
    "name": "FreezeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "freeze",
            "description": "<p>是否冻结</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "用户列表",
    "name": "UserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "admin_id",
            "description": "<p>管理员ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：旗下理财师",
          "content": "/api/users?admin_id=100342",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"frozen\": true      # 是否已被冻结\n    \"join_time\": \"2016-12-23T12:23:33\", # 加入时间\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user_id",
    "title": "用户详情",
    "name": "UserProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100319,\n    \"name\": \"小明\",\n    \"mobile\": \"150432423\",\n    \"created_time\": \"2015-12-22\",   # 注册时间\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n    \"personal_statistic\": {     # 个人配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    },\n    \"org_statistic\": {          # 机构配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  }
] });
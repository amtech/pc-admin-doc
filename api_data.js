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
    "type": "post",
    "url": "/api/account/logout",
    "title": "注销",
    "name": "Logout",
    "group": "Account",
    "description": "<p>用户注销</p> ",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  }
] });
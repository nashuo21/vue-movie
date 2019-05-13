---
description: 服务器端数据接口
---

# API

{% api-method method="post" host="http://localhost:3000" path="/api2/users/userReg/" %}
{% api-method-summary %}
userReg
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get free cakes.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="appkey" type="string" required=true %}
APP端appkey，每台设备唯一
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="devInfo" type="object" required=true %}
验证信息
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="phone" type="string" required=false %}
手机号，必填
{% endapi-method-parameter %}

{% api-method-parameter name="uname" type="string" required=true %}
用户名，必填
{% endapi-method-parameter %}

{% api-method-parameter name="upwd" type="string" required=true %}
登录密码，必填
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
"statu":"ok",
"msgSuccess":"注册成功",
"uid":"用户id",
    "uname": "用户名",
    "upwd": "登录密码",
    "phone": "手机号"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```javascript
{
    "msgFailed": "注册失败"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="" path="" %}
{% api-method-summary %}
userLoginOut
{% endapi-method-summary %}

{% api-method-description %}
用户退出
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


# sendEmail
使用node模块一键发送邮件

# usage

```js
/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 * @param {Array<Object>} attachments 附件 { filename: 'xx', path: './xx.txt'} 或 { filename: 'xx.txt (不写后缀默认exe)', content: '内容自己写'}
 */
 
 sendMail(recipient, subject, html, attachments);
```

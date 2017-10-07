// 邮件模块
const nodemailer = require('nodemailer');
// 邮箱快速配置模块
const smtpTransport = require('nodemailer-smtp-transport');
/*
* 支持的服务
'1und1',
'AOL',
'DebugMail.io',
'DynectEmail',
'FastMail',
'GandiMail',
'Gmail',
'Godaddy',
'GodaddyAsia',
'GodaddyEurope',
'hot.ee',
'Hotmail',
'iCloud',
'mail.ee',
'Mail.ru',
'Mailgun',
'Mailjet',
'Mandrill',
'Naver',
'OpenMailBox',
'Postmark',
'QQ',
'QQex',
'SendCloud',
'SendGrid',
'SES',
'SES-US-EAST-1',
'SES-US-WEST-1',
'SES-EU-WEST-1',
'Sparkpost',
'Yahoo',
'Yandex',
'Zoho'
*/

// 实例邮件服务
const st = nodemailer.createTransport(smtpTransport({
  service: 'QQ', // 可以是上面任一服务
  auth: {
    user: 'xxxx@qq.com',  //  邮箱用户名
    pass: 'xxxx', // QQ 邮箱需要填写授权码, 登录网页邮箱 > 设置 > 账户 > POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务 > 开启IMAP/SMTP服务 > 生成授权码
  }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 * @param {Array<Object>} attachments 附件 { filename: 'xx', path: './xx.txt'} 或 { filename: 'xx.txt (不写后缀默认exe)', content: '内容自己写'}
 */
function sendMail(recipient, subject, html, attachments) {

  let opt = {
    from: config.user,
    to: recipient,
    subject: subject,
    html: html
  };

  if (attachments) {
    opt.attachments = attachments;
  }
  st.sendMail(opt, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log('发送成功', response)
    }
  });
}

export default sendMail;

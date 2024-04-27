// 假设的用户名和密码
const username = "admin";
const password = "sakcnzzgoogle";

// 获取表单元素
const form = document.getElementById("loginForm");

// 添加提交事件监听器
form.addEventListener("submit", function (event) {
    // 阻止表单默认提交行为
    event.preventDefault();

    // 获取输入框的值
    const name = document.getElementById("name").value;
    const passwordInput = document.getElementById("password").value;

    // 验证用户名和密码
    if (name === username && passwordInput === password) {
        alert("验证成功！欢迎登录社工查询系统！　　　　　　　　　　　　　　　　王蕊	530326201012242942	初中2026届	初中2026届1班	女");
  } else {
        alert("验证失败，请检查用户名和密码");
    }
});
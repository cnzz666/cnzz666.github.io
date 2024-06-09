<?php
// 检查是否有 POST 数据
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取用户输入
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 将数据保存到文件
    $file = 'users.txt';
    $data = $username . ':' . $password . PHP_EOL; // 使用换行符分隔记录
    file_put_contents($file, $data, FILE_APPEND); // 追加到文件末尾

    // 返回 OK
    echo 'OK';
}
?>

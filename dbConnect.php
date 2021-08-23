<?php
    header("Content-Type:text/html;charset=utf-8");
    date_default_timezone_set('Asia/Seoul');
    
    $ini_array = parse_ini_file("account.ini", true);
    $host = $ini_array['DOTHOME']['HOST'];
    $user = $ini_array['DOTHOME']['USER'];
    $pw = $ini_array['DOTHOME']['PW'];
    $dbName = $ini_array['DOTHOME']['DBNAME'];

    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $qna=$_POST['qna'];
    $today = date("Y-m-d H:m:s");

    $conn = new mysqli($host, $user, $pw, $dbName);
    
    /* DB 연결 확인 */
    //if($conn){ echo "MySQL 접속 성공 <br>";}
    //else{ echo "MySQL 접속 실패 <br>"; }
    
    /* SELECT 구문 */
    //$sql = "SELECT * FROM SM_QNA_TB";
    //while($row = mysqli_fetch_array($result)){
    //    echo $row['USER_NM']."<br>".$row['USER_PN']."<br>";
    //}
    
    $sql = "INSERT INTO SM_QNA_TB(USER_NM, USER_PN, USER_EA, USER_TXT, USER_DT) VALUES('$name','$phone','$email','$qna','$today')";
    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);

    echo '<script language="javascript">';
    echo 'alert("문의 접수가 완료되었습니다.")';
    echo '</script>';
    echo "<script>window.location = 'http://sungminhitech.com/menu3.html?result=success'</script>";
?>